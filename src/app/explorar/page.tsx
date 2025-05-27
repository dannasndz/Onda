"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/ui/navbar";
import GenreSelectionView from "@/components/ui/GenreSelectionView";
import ResultsView from "@/components/ui/ResultView";
import type { ArtistaInfo, AlbumInfo, AlbumApiResponse } from '@/types/lastfm';

export default function ExplorarGeneros() {
    const { data: session } = useSession();
    const [generoSeleccionado, setGeneroSeleccionado] = useState<string | null>(null);
    const [nombreGeneroParaTitulo, setNombreGeneroParaTitulo] = useState<string | null>(null);
    const [vista, setVista] = useState<'generos' | 'resultados'>('generos');
    const [topArtistas, setTopArtistas] = useState<ArtistaInfo[]>([]);
    const [topAlbumes, setTopAlbumes] = useState<AlbumInfo[]>([]);
    const [cargandoResultados, setCargandoResultados] = useState(false);
    const [errorResultados, setErrorResultados] = useState<string | null>(null);

    const handleSeleccionarGenero = (nombreGenero: string) => {
        setGeneroSeleccionado(nombreGenero);
    };

    const getImageUrl = (images: any[]): string | undefined => {
        if (!images || images.length === 0) return undefined;
        const extraLargeImage = images.find(img => img.size === 'extralarge' && img['#text']);
        if (extraLargeImage) return extraLargeImage['#text'];
        const largeImage = images.find(img => img.size === 'large' && img['#text']);
        if (largeImage) return largeImage['#text'];
        const mediumImage = images.find(img => img.size === 'medium' && img['#text']);
        if (mediumImage) return mediumImage['#text'];
        return images.find(img => img['#text'])?.['#text']; // fallback a la primera que tenga texto
    };

    const handleContinuar = async () => {
        if (!generoSeleccionado) return;

        setCargandoResultados(true);
        setErrorResultados(null);
        setNombreGeneroParaTitulo(generoSeleccionado);
        setVista('resultados');
        setTopArtistas([]);
        setTopAlbumes([]);

        try {
            const [artistasRes, albumesRes] = await Promise.all([
                fetch(`/api/lastfm/topartist?genero=${encodeURIComponent(generoSeleccionado)}`),
                fetch(`/api/lastfm/topalbums?genero=${encodeURIComponent(generoSeleccionado)}`)
            ]);

            if (!artistasRes.ok || !albumesRes.ok) {
                const errorArtistas = !artistasRes.ok ? await artistasRes.json() : null;
                const errorAlbumes = !albumesRes.ok ? await albumesRes.json() : null;
                console.error("Error API Artistas:", errorArtistas);
                console.error("Error API Albumes:", errorAlbumes);
                throw new Error('Error al obtener datos de Last.fm. Intenta con otro género.');
            }

            const artistasData = await artistasRes.json();
            const albumesData = await albumesRes.json();

            setTopArtistas(artistasData.map((artista: ArtistaInfo) => ({
                ...artista,
                rank: parseInt(artista['@attr']?.rank ?? '0', 10),
                imageUrl: getImageUrl(artista.image)
            })));


            setTopAlbumes(
                (albumesData as AlbumApiResponse[]).map(album => ({
                    ...album,
                    artistName: album.artist.name,
                    imageUrl: getImageUrl(album.image),
                    rank: parseInt(album['@attr']?.rank ?? '0', 10),
                }))
            );




        } catch (error: any) {
            console.error("Error en handleContinuar:", error);
            setErrorResultados(error.message || 'No se pudieron cargar los resultados.');
        } finally {
            setCargandoResultados(false);
        }
    };

    const handleVolverSeleccionGenero = () => {
        setVista('generos');
        setGeneroSeleccionado(null);
        setNombreGeneroParaTitulo(null);
        setTopArtistas([]);
        setTopAlbumes([]);
        setErrorResultados(null);
    }

    return (
        <div className="flex min-h-screen text-white">
            {/* Navbar - Hidden on mobile, visible on desktop */}
            <nav className="hidden lg:block fixed top-0 left-0 h-screen w-64 overflow-y-auto z-20">
                <Navbar />
            </nav>

            {/* Main content - Responsive layout */}
            <main className="flex-1 w-full lg:ml-20">
                <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl mx-auto">
                        {vista === 'generos' ? (
                            <div className="flex items-center justify-center min-h-screen">
                                <GenreSelectionView
                                    session={session}
                                    generoSeleccionado={generoSeleccionado}
                                    onSelectGenre={handleSeleccionarGenero}
                                    onContinue={handleContinuar}
                                />
                            </div>
                        ) : (
                            <div className="py-8 lg:py-12">
                                <ResultsView
                                    nombreGenero={nombreGeneroParaTitulo}
                                    topArtistas={topArtistas}
                                    topAlbumes={topAlbumes}
                                    cargando={cargandoResultados}
                                    error={errorResultados}
                                    onVolver={handleVolverSeleccionGenero}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Mobile navbar - Show on small screens */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#1A1D2E]/95 backdrop-blur-sm border-t border-[#2a2d4a]/50">
                <div className="px-4 py-2">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}