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
    artista: string;
    imagen: string;
    genero: string;
    tipo: 'album' | 'cancion';
}

export default function Inicio() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [recomendaciones, setRecomendaciones] = useState<Recomendacion[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loaderRef = useRef<HTMLDivElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.src = '/placeholder-music.png'; // Imagen de respaldo local
    };

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/registro');
        }
    }, [status, router]);

    useEffect(() => {
        if (status === 'authenticated') {
            fetchRecomendaciones(page);
        }
    }, [status, page]);

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
        if (!hasMore || isLoading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage((prev) => prev + 1);
            }
        });

        if (loaderRef.current) observer.current.observe(loaderRef.current);
    }, [hasMore, isLoading]);

    const handleSearch = async (tipo: string, query: string) => {
        try {
            const res = await fetch(`/api/busqueda?tipo=${tipo}&q=${encodeURIComponent(query)}`);
            const data = await res.json();
            setRecomendaciones(data.resultados);
            setHasMore(false);
        } catch (err) {
            console.error("Error en búsqueda:", err);
        }
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
        <div className="pl-[80px] pr-4 pt-6 min-h-screen text-white bg-transparent overflow-x-hidden max-w-screen">
            <Navbar />
            <div className="ml-[80px]">

                <SearchBar onSearch={handleSearch} />
            </div>

            <div className="pl-[25px] pr-[5px] max-w-[1600px] mx-auto">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-5 "
                    columnClassName="masonry-column"
                >
                    {recomendaciones.map((item, index) => (
                        <div
                            key={`${item.nombre}-${index}`}
                            className="mb-4 bg-[#1f1f2bcc] backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer w-full max-w-[240px]"
                        >
                            <Image
                                src={item.imagen || '/placeholder-music.png'}
                                alt={item.nombre}
                                width={240}
                                height={240}
                                className="w-full h-[240px] object-cover"
                                onError={handleImageError}
                                unoptimized
                            />
                            <div className="p-4">
                                <p className="text-md font-semibold truncate">{item.nombre}</p>
                                <p className="text-sm text-violet-400 truncate">{item.artista}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs text-gray-400">{item.genero}</span>
                                    <span className="text-xs px-2 py-1 bg-violet-900 rounded-full">
                                        {item.tipo === 'album' ? 'Álbum' : 'Canción'}
                                    </span>
                                </div>
                            </div>
                        </div>

                    ))}
                </Masonry>


                {hasMore && (
                    <div ref={loaderRef} className="text-center text-bold text-sm text-gray-400 mt-8">
                        Estamos preparando tu onda...
                    </div>
                )}

                {!hasMore && (
                    <div className="text-center text-sm text-gray-500 mt-8">
                        No hay más recomendaciones.
                    </div>
                )}
            </div>
        </div>
    );
}
