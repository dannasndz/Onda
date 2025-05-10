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

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/registro');
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
            setHasMore(false); // Detenemos el scroll infinito si se está filtrando
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
        <div className="p-6 min-h-screen text-white bg-transparent">
            <Navbar />
            <div className="ml-[80px]">

                <SearchBar onSearch={handleSearch} />
            </div>

            <div className="pt-10">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-5 ml-[80px]"
                    columnClassName="masonry-column"
                >
                    {recomendaciones.map((item, index) => (
                        <div
                            key={`${item.nombre}-${index}`}
                            className="mb-4 bg-[#1f1f2bcc] backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer"
                        >
                            <Image
                                src={item.imagen}
                                alt={item.nombre}
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover"
                                unoptimized // Asegúrate de configurar correctamente si usas dominios externos
                            />
                            <div className="p-4">
                                <p className="text-md font-semibold">{item.nombre}</p>
                                <p className="text-sm text-violet-400">{item.artista}</p>
                                <span className="text-xs text-gray-400">{item.genero}</span>
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
