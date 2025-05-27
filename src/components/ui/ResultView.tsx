import { ArrowLeft, Music, Users, Disc3, Star, TrendingUp, Play } from "lucide-react";
import type { ArtistaInfo, AlbumInfo } from '@/types/lastfm';
import ArtistCard from "@/components/ui/ArtistCard";
import AlbumCard from "@/components/ui/AlbumCard";

interface ResultsViewProps {
    nombreGenero: string | null;
    topArtistas: ArtistaInfo[];
    topAlbumes: AlbumInfo[];
    cargando: boolean;
    cargandoMas: 'artistas' | 'albumes' | null;
    error: string | null;
    hayMasArtistas: boolean;
    hayMasAlbumes: boolean;
    onVolver: () => void;
    onCargarMas: (tipo: 'artistas' | 'albumes') => void;
}

export default function ResultsView({
    nombreGenero,
    topArtistas,
    topAlbumes,
    cargando,
    cargandoMas,
    error,
    hayMasArtistas,
    hayMasAlbumes,
    onVolver,
    onCargarMas
}: ResultsViewProps) {
    return (
        <div className="w-full h-full flex flex-col  relative overflow-hidden">

            <div className="relative z-10 flex-shrink-0 w-full p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <button
                        onClick={onVolver}
                        className="group bg-[#1A1D2E] border border-[#2a2d4a]/50 text-white hover:bg-[#2a2d4a] hover:border-black/40 transition-all duration-300 flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-3 rounded-2xl text-sm sm:text-base font-medium shadow-md hover:shadow-cyan-500/10 cursor-pointer"
                    >
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline">Volver a géneros</span>
                        <span className="sm:hidden">Volver</span>
                    </button>
                </div>
            </div>

            <div className="relative z-10 flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 lg:mb-12">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-3xl blur-md"></div>
                            <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-6 sm:p-8 lg:p-10">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-clip-text">
                                        {nombreGenero || "Género"}
                                    </h1>
                                    <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                                </div>
                                <p className="text-lg sm:text-xl text-gray-300 font-medium">
                                    Descubre lo más popular en este género
                                </p>
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <span className="text-sm text-gray-400">Rankings actualizados</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Loading */}
                    {cargando && (
                        <div className="flex flex-col items-center justify-center py-16 sm:py-24">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                                <div className="relative bg-[#1A1D2E]/80 backdrop-blur-sm border border-[#2a2d4a]/50 rounded-full p-8">
                                    <div className="flex items-center justify-center space-x-4">
                                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-400/30 border-t-cyan-400"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-xl sm:text-2xl text-gray-300 font-medium mb-2">Cargando resultados...</p>
                                <p className="text-sm text-gray-500">Obteniendo los mejores artistas y álbumes</p>
                            </div>
                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="flex items-center justify-center py-16">
                            <div className="relative max-w-md w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-[#1A1D2E]/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">!</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-red-400 mb-2">Error al cargar</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{error}</p>
                                    <button
                                        onClick={onVolver}
                                        className="mt-6 px-6 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-500/30 text-red-400 rounded-xl transition-all duration-200 text-sm font-medium"
                                    >
                                        Intentar de nuevo
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Results  */}
                    {!cargando && !error && (
                        <div className="space-y-12 lg:space-y-16">
                            {/* Top Artists Section */}
                            {topArtistas.length > 0 && (
                                <section className="animate-fade-in">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl "></div>
                                        <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-6 lg:p-8">
                                            <div className="flex items-center justify-between flex-wrap gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12  rounded-2xl flex items-center justify-center">
                                                        <Users className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                                            Top Artistas
                                                        </h2>
                                                        <p className="text-sm sm:text-base text-gray-400">
                                                            Los más escuchados en {nombreGenero}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full">
                                                    <span className="text-gray-400 text-sm font-medium">{topArtistas.length} artistas</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                                        {topArtistas.map((artista, index) => (
                                            <div
                                                key={`artist-${artista.name}-${artista.rank}-${index}-${artista.mbid || 'no-mbid'}`}
                                                className="animate-slide-up"
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <ArtistCard artista={artista} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Botón Ver más artistas */}
                                    {hayMasArtistas && (
                                        <div className="flex justify-center mt-8">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <button
                                                    onClick={() => onCargarMas('artistas')}
                                                    disabled={cargandoMas !== null}
                                                    className="group relative cursor-pointer bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-400/30 hover:border-cyan-400 text-gray-400 hover:text-white px-6 py-3 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 font-medium"
                                                >
                                                    {cargandoMas === 'artistas' ? (
                                                        <>
                                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-cyan-400/20 border-t-cyan-400"></div>
                                                            <span>Cargando más artistas...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Users className="w-5 h-5 transition-transform duration-200" />
                                                            <span>Ver más artistas</span>
                                                        </>
                                                    )}
                                                </button>

                                            </div>
                                        </div>
                                    )}
                                </section>
                            )}

                            {/* Top Albums Section */}
                            {topAlbumes.length > 0 && (
                                <section className="animate-fade-in">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5 rounded-3xl"></div>
                                        <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-6 lg:p-8">
                                            <div className="flex items-center justify-between flex-wrap gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12  rounded-2xl flex items-center justify-center">
                                                        <Disc3 className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                                            Top Álbumes
                                                        </h2>
                                                        <p className="text-sm sm:text-base text-gray-400">
                                                            Los más populares en {nombreGenero}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full">
                                                    <span className="text-gray-400 text-sm font-medium">{topAlbumes.length} álbumes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                                        {topAlbumes.map((album, index) => (
                                            <div
                                                key={`album-${album.name}-${album.artistName}-${album.rank}-${index}-${album.mbid || 'no-mbid'}`}
                                                className="animate-slide-up"
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <AlbumCard album={album} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Botón Ver más álbumes */}
                                    {hayMasAlbumes && (
                                        <div className="flex justify-center mt-8">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <button
                                                    onClick={() => onCargarMas('albumes')}
                                                    disabled={cargandoMas !== null}
                                                    className="cursor-pointer group relative bg-purple-950/30 hover:bg-purple-950/50 border border-purple-400/30 hover:border-purple-400 text-gray-400 hover:text-white px-6 py-3 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 font-medium"
                                                >
                                                    {cargandoMas === 'albumes' ? (
                                                        <>
                                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-400/20 border-t-purple-400"></div>
                                                            <span>Cargando más álbumes...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Disc3 className="w-5 h-5 transition-transform duration-200" />
                                                            <span>Ver más álbumes</span>
                                                        </>
                                                    )}
                                                </button>

                                            </div>
                                        </div>
                                    )}
                                </section>
                            )}

                            {/* Empty states */}
                            {topArtistas.length === 0 && topAlbumes.length === 0 && (
                                <div className="text-center py-16">
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-3xl blur-xl"></div>
                                        <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-8 lg:p-12">
                                            <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2">
                                                No hay contenido disponible
                                            </h3>
                                            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                                                No se encontraron artistas ni álbumes para este género en este momento.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Bottom action button */}
                    {!cargando && (
                        <div className="w-full flex justify-center mt-12 lg:mt-16 mb-8 lg:mb-12">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl "></div>
                                <button
                                    onClick={onVolver}
                                    className="cursor-pointer relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg hover:shadow-black/20 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 rounded-2xl text-base sm:text-lg lg:text-xl font-bold  flex items-center gap-3"
                                >
                                    <ArrowLeft size={20} />
                                    <span>Explorar otro género</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}