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
  const [searchPage, setSearchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = async (query: string, page: number = 1) => {
    if (isLoading) return;

    if (page === 1) {
      setRecomendaciones([]);
      setHasMore(true);
      setIsSearching(true);
      setSearchPage(1);
      setSearchQuery(query);
    }

    setIsLoading(true);

    try {
      const [resCancion, resAlbum, resArtista] = await Promise.all([
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=cancion&page=${page}&limit=20`),
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=album&page=${page}&limit=20`),
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=artista&page=${page}&limit=20`)
      ]);

      const [dataCancion, dataAlbum, dataArtista] = await Promise.all([
        resCancion.json(),
        resAlbum.json(),
        resArtista.json()
      ]);

      const todosResultados = [
        ...(dataCancion.resultados || []),
        ...(dataAlbum.resultados || []),
        ...(dataArtista.resultados || [])
      ];

      const seen = new Set();
      const nuevosResultados = todosResultados.filter(item => {
        const key = `${item.tipo}-${item.nombre.toLowerCase()}-${(item.artista || '').toLowerCase()}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

      const resultadosOrdenados = nuevosResultados.sort(() => Math.random() - 0.5);

      if (resultadosOrdenados.length === 0) {
        setHasMore(false);
      } else {
        setRecomendaciones(prev => [...prev, ...resultadosOrdenados]);
      }
    } catch (err) {
      console.error("Error en búsqueda:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setIsSearching(false);
    setRecomendaciones([]);
    setPage(1);
    setSearchPage(1);
    setHasMore(true);
    setSearchQuery(""); 
  };

  useEffect(() => {
    if (!hasMore || isLoading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (isSearching) {
          setSearchPage((prev) => prev + 1);
        } else {
          setPage((prev) => prev + 1);
        }
      }
    });

    if (loaderRef.current) observer.current.observe(loaderRef.current);
  }, [hasMore, isLoading, isSearching]);

  useEffect(() => {
    if (isSearching && searchPage > 1) {
      handleSearch(searchQuery, searchPage);
    }
  }, [searchPage]);

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
      <div className="ml-[80px] px-6 max-w-full">
        <SearchBar
          onSearch={handleSearch}
          query={searchQuery}
          onClear={() => setSearchQuery("")}
        />
      </div>
      <Navbar />
      <div className="ml-[80px]">
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

        {hasMore && (
          <div ref={loaderRef} className="text-center text-bold text-sm text-gray-400 mt-8">
            Estamos preparando música con tu onda...
          </div>
        )}

        {!hasMore && (
          <div className="text-center text-sm text-gray-500 mt-8">
            Uy! terminaste con las recomendaciones.
          </div>
        )}
      </div>
    </div>
  );
}