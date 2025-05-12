'use client';

import { useSession } from "next-auth/react";
import Navbar from "@/components/ui/navbar";
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import SearchBar from "@/components/ui/searchBar";

interface Recomendacion {
  nombre: string;
  artista?: string;
  imagen: string;
  genero?: string;
  tipo: 'album' | 'cancion' | 'artista';
}

export default function Inicio() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [recomendaciones, setRecomendaciones] = useState<Recomendacion[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder-music.png';
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/registro');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated' && !isSearching) {
      fetchRecomendaciones(page);
    }
  }, [status, page, isSearching]);

  const fetchRecomendaciones = async (page: number) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/recomendaciones?page=${page}&limit=20`);
      const data = await res.json();

      if (data.recomendaciones.length === 0) {
        setHasMore(false);
      } else {
        setRecomendaciones((prev) => [...prev, ...data.recomendaciones]);
      }
    } catch (error) {
      console.error("Error al obtener recomendaciones:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!hasMore || isLoading || isSearching) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (loaderRef.current) observer.current.observe(loaderRef.current);
  }, [hasMore, isLoading, isSearching]);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setIsSearching(true);
    
    try {
      // Realizar búsqueda en paralelo para los tres tipos
      const [resCancion, resAlbum, resArtista] = await Promise.all([
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=cancion`),
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=album`),
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=artista`)
      ]);
      
      const [dataCancion, dataAlbum, dataArtista] = await Promise.all([
        resCancion.json(),
        resAlbum.json(),
        resArtista.json()
      ]);
      
      // Combinar resultados
      const todosResultados = [
        ...(dataCancion.resultados || []),
        ...(dataAlbum.resultados || []),
        ...(dataArtista.resultados || [])
      ];
      
      // Eliminar duplicados que puedan haber quedado entre tipos diferentes
      const seen = new Set();
      const resultadosSinDuplicados = todosResultados.filter(item => {
        const key = `${item.tipo}-${item.nombre.toLowerCase()}-${(item.artista || '').toLowerCase()}`;
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      });
      
      // Ordenar aleatoriamente para mostrar variedad
      const resultadosOrdenados = resultadosSinDuplicados.sort(() => Math.random() - 0.5);
      
      setRecomendaciones(resultadosOrdenados);
      setHasMore(false);
    } catch (err) {
      console.error("Error en búsqueda:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Función para limpiar la búsqueda y volver a las recomendaciones
  const clearSearch = () => {
    setIsSearching(false);
    setRecomendaciones([]);
    setPage(1);
    setHasMore(true);
  };

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (status === "loading") {
    return <div className="text-white p-10">Cargando...</div>;
  }

  return (
    <div className="p-6 min-h-screen text-white bg-transparent overflow-x-hidden">
      <Navbar />
      <div className="ml-[80px]">
        <SearchBar onSearch={handleSearch} />
        
        {isSearching && (
          <button 
            onClick={clearSearch}
            className="mb-4 px-3 py-1 bg-violet-700 text-sm text-white rounded-full hover:bg-violet-800 transition"
          >
            Volver
          </button>
        )}
      </div>

      <div className="ml-[80px] mr-[70px] px-6 max-w-full">
         
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-5"
            columnClassName="masonry-column"
          >
            {recomendaciones.map((item, index) => (
              <div
                key={`${item.nombre}-${item.artista || ''}-${index}`}
                className="mb-4 bg-[#1f1f2bcc] backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer w-[100%] max-w-[240px]"
              >
                <Image
                  src={item.imagen || '/placeholder-music.png'}
                  alt={item.nombre}
                  width={240}
                  height={240}
                  className="w-full h-auto object-cover"
                  onError={handleImageError}
                  unoptimized
                />
                <div className="p-4">
                  <p className="text-md font-semibold truncate">{item.nombre}</p>
                  {item.artista && (
                    <p className="text-sm text-violet-400 truncate">{item.artista}</p>
                  )}
                  <div className="flex justify-between items-center mt-2">
                    {item.genero && (
                      <span className="text-xs text-gray-400">{item.genero}</span>
                    )}
                    <span className="text-xs px-2 py-1 bg-violet-900 rounded-full">
                      {item.tipo === 'album' ? 'Álbum' : item.tipo === 'cancion' ? 'Canción' : 'Artista'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        

        {!isSearching && hasMore && (
          <div ref={loaderRef} className="text-center text-bold text-sm text-gray-400 mt-8">
            Estamos preparando música con tu onda...
          </div>
        )}

        {!isSearching && !hasMore && (
          <div className="text-center text-sm text-gray-500 mt-8">
            Uy! creo que terminaste con las recomendaciones.
          </div>
        )}
      </div>
    </div>
  );
}