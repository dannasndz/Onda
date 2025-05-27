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
    const [cargandoMas, setCargandoMas] = useState<'artistas' | 'albumes' | null>(null);
    const [errorResultados, setErrorResultados] = useState<string | null>(null);
    const [paginaArtistas, setPaginaArtistas] = useState(1);
    const [paginaAlbumes, setPaginaAlbumes] = useState(1);
    const [hayMasArtistas, setHayMasArtistas] = useState(true);
    const [hayMasAlbumes, setHayMasAlbumes] = useState(true);

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
        return images.find(img => img['#text'])?.['#text']; 
    };

    const handleContinuar = async () => {
        if (!generoSeleccionado) return;

        setCargandoResultados(true);
        setErrorResultados(null);
        setNombreGeneroParaTitulo(generoSeleccionado);
        setVista('resultados');
        setTopArtistas([]);
        setTopAlbumes([]);
        setPaginaArtistas(1);
        setPaginaAlbumes(1);
        setHayMasArtistas(true);
        setHayMasAlbumes(true);

        try {
            // Cargar solo el top 3 inicial
            const [artistasRes, albumesRes] = await Promise.all([
                fetch(`/api/lastfm/topartist?genero=${encodeURIComponent(generoSeleccionado)}&limit=3&page=1`),
                fetch(`/api/lastfm/topalbums?genero=${encodeURIComponent(generoSeleccionado)}&limit=3&page=1`)
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

            const artistasProcesados = artistasData.map((artista: ArtistaInfo, index: number) => ({
                ...artista,
                rank: index + 1, 
                imageUrl: getImageUrl(artista.image)
            }));

            const albumesProcesados = (albumesData as AlbumApiResponse[]).map((album, index: number) => ({
                ...album,
                artistName: album.artist.name,
                imageUrl: getImageUrl(album.image),
                rank: index + 1,
            }));

            setTopArtistas(artistasProcesados);
            setTopAlbumes(albumesProcesados);

            setHayMasArtistas(artistasProcesados.length === 3);
            setHayMasAlbumes(albumesProcesados.length === 3);




        } catch (error: any) {
            console.error("Error en handleContinuar:", error);
            setErrorResultados(error.message || 'No se pudieron cargar los resultados.');
        } finally {
            setCargandoResultados(false);
        }
    };

    const cargarMasResultados = async (tipo: 'artistas' | 'albumes') => {
        if (!generoSeleccionado || cargandoMas !== null) return;

        setCargandoMas(tipo);
        try {
            const siguientePagina = tipo === 'artistas' ? paginaArtistas + 1 : paginaAlbumes + 1;
            const endpoint = tipo === 'artistas' ? 'topartist' : 'topalbums';
            
            const response = await fetch(
                `/api/lastfm/${endpoint}?genero=${encodeURIComponent(generoSeleccionado)}&limit=6&page=${siguientePagina}`
            );

            if (!response.ok) {
                throw new Error('Error al cargar más resultados');
            }

            const data = await response.json();

            if (tipo === 'artistas') {
                // Filtrar duplicados 
                setTopArtistas(prev => {
                    const existingKeys = new Set(prev.map(a => `${a.name}-${a.mbid || 'no-mbid'}`));
                    const artistasFiltrados = data.filter((artista: ArtistaInfo) => 
                        !existingKeys.has(`${artista.name}-${artista.mbid || 'no-mbid'}`)
                    );
                    
                    // Calcular ranks con la lista completa
                    const nuevosArtistas = artistasFiltrados.map((artista: ArtistaInfo, index: number) => ({
                        ...artista,
                        rank: prev.length + index + 1, // Continuar la numeración desde donde esta 
                        imageUrl: getImageUrl(artista.image)
                    }));
                    
                    return [...prev, ...nuevosArtistas];
                });
                setPaginaArtistas(siguientePagina);

                setHayMasArtistas(data.length === 6);
            } else {
                // Filtrar duplicados 
                setTopAlbumes(prev => {
                    const existingKeys = new Set(prev.map(a => `${a.name}-${a.artistName}-${a.mbid || 'no-mbid'}`));
                    const albumesFiltrados = (data as AlbumApiResponse[]).filter(album => 
                        !existingKeys.has(`${album.name}-${album.artist.name}-${album.mbid || 'no-mbid'}`)
                    );
                    
                    // Calcular ranks 
                    const nuevosAlbumes = albumesFiltrados.map((album, index: number) => ({
                        ...album,
                        artistName: album.artist.name,
                        imageUrl: getImageUrl(album.image),
                        rank: prev.length + index + 1, 
                    }));
                    
                    return [...prev, ...nuevosAlbumes];
                });
                setPaginaAlbumes(siguientePagina);
        
                setHayMasAlbumes(data.length === 6);
            }
        } catch (error) {
            console.error('Error cargando más resultados:', error);
        } finally {
            setCargandoMas(null);
        }
    };

    const handleVolverSeleccionGenero = () => {
        setVista('generos');
        setGeneroSeleccionado(null);
        setNombreGeneroParaTitulo(null);
        setTopArtistas([]);
        setTopAlbumes([]);
        setErrorResultados(null);
        setPaginaArtistas(1);
        setPaginaAlbumes(1);
        setHayMasArtistas(true);
        setHayMasAlbumes(true);
    }

    return (
        <div className="flex min-h-screen text-white">
            <nav className="hidden lg:block fixed top-0 left-0 h-screen w-20 overflow-y-auto z-20">
                <Navbar />
            </nav>

            <main className="flex-1 w-full lg:ml-20">
                {vista === 'generos' ? (
                    <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden scrollbar-hide">
                        <div className="w-full max-w-7xl mx-auto">
                            <div className="flex items-center justify-center h-full">
                                <GenreSelectionView
                                    session={session}
                                    generoSeleccionado={generoSeleccionado}
                                    onSelectGenre={handleSeleccionarGenero}
                                    onContinue={handleContinuar}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <div className="flex-1 w-full max-w-7xl mx-auto">
                            <ResultsView
                                nombreGenero={nombreGeneroParaTitulo}
                                topArtistas={topArtistas}
                                topAlbumes={topAlbumes}
                                cargando={cargandoResultados}
                                cargandoMas={cargandoMas}
                                error={errorResultados}
                                hayMasArtistas={hayMasArtistas}
                                hayMasAlbumes={hayMasAlbumes}
                                onVolver={handleVolverSeleccionGenero}
                                onCargarMas={cargarMasResultados}
                            />
                        </div>
                    </div>
                )}
            </main>

            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#1A1D2E]/95 backdrop-blur-sm border-t border-[#2a2d4a]/50">
                <div className="px-4 py-2">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}