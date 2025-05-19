import { ArrowLeft } from "lucide-react";
import type { ArtistaInfo, AlbumInfo } from '@/types/lastfm';
import ArtistCard from "@/components/ui/ArtistCard";
import AlbumCard from "@/components/ui/AlbumCard";

interface ResultsViewProps {
    nombreGenero: string | null;
    topArtistas: ArtistaInfo[];
    topAlbumes: AlbumInfo[];
    cargando: boolean;
    error: string | null;
    onVolver: () => void;
}

export default function ResultsView({
    nombreGenero,
    topArtistas,
    topAlbumes,
    cargando,
    error,
    onVolver
}: ResultsViewProps) {
    return (
        <>
            <button 
                onClick={onVolver} 
                className="absolute left-6  md:left-30 mt-2 bg-[#1f2236] text-gray-200 bg-gradient-to-r  from-[#6C63FF] to-[#A678F0] border-[#333955] hover:border-[#6C63FF] hover:text-white hover:scale-105 transition flex items-center gap-2 px-3 py-2 rounded-lg z-20"
            >
                <ArrowLeft size={20} /> Volver
            </button>

            <h1 className="text-3xl md:text-5xl font-medium mb-8  text-center">
                Top de {nombreGenero || "Género"}
            </h1>

            {cargando && <p className="text-xl">Cargando resultados...</p>}
            {error && <p className="text-xl text-red-500">{error}</p>}

            {!cargando && !error && (
                <div className="w-full max-w-5xl">
                    {/* Top Artistas */}
                    {topArtistas.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Top artistas de {nombreGenero}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {topArtistas.map((artista) => (
                                    <ArtistCard key={artista.name + artista.rank} artista={artista} />
                                ))}
                            </div>
                        </section>
                    )}
                    
                    {topArtistas.length === 0 && !cargando && !error && (
                        <p className="text-center text-gray-400 mb-6">No se encontraron artistas para este género.</p>
                    )}

                    {/* Top Álbumes */}
                    {topAlbumes.length > 0 && (
                        <section>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Top álbumes de {nombreGenero}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {topAlbumes.map((album) => (
                                    <AlbumCard key={album.name + album.rank} album={album} />
                                ))}
                            </div>
                        </section>
                    )}
                    
                    {topAlbumes.length === 0 && !cargando && !error && (
                        <p className="text-center text-gray-400">No se encontraron álbumes para este género.</p>
                    )}
                </div>
            )}
            
            <button 
                onClick={onVolver} 
                className="mt-12 mb-6  bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:brightness-110 transition"
            >
                Seleccionar otro Género
            </button>
        </>
    );
}