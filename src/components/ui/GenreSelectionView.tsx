import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface Genero {
    id: number;
    nombre: string;
}

interface GenreSelectionViewProps {
    session: any;
    generoSeleccionado: string | null;
    onSelectGenre: (nombre: string) => void;
    onContinue: () => void;
}

export default function GenreSelectionView({
    session,
    generoSeleccionado,
    onSelectGenre,
    onContinue
}: GenreSelectionViewProps) {
    const [generos, setGeneros] = useState<Genero[]>([]);
    const [busqueda, setBusqueda] = useState("");
    const [cargandoGeneros, setCargandoGeneros] = useState(true);
    const contenedorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchGeneros = async () => {
            try {
                setCargandoGeneros(true);
                const res = await fetch("/api/generos");
                if (!res.ok) throw new Error('Error al cargar géneros');
                const data = await res.json();
                setGeneros(data);
            } catch (error) {
                console.error("Error en fetchGeneros:", error);
            } finally {
                setCargandoGeneros(false);
            }
        };
        fetchGeneros();
    }, []);

    const generosFiltrados = generos.filter((g) =>
        g.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const scroll = (direction: "left" | "right") => {
        if (!contenedorRef.current) return;
        const scrollAmount = 200;
        contenedorRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

        return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                            ¡Hola, {session?.user?.name ?? "usuario"}!
                        </h1>
                    </div>

                    <div className="space-y-3 mb-6">
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
                            ¿Qué te gustaría descubrir hoy?
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Selecciona un género musical para explorar los artistas y álbumes más populares de nuestra comunidad.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-2xl mx-auto mb-6">
                        <div className="absolute inset-0 rounded-2xl blur-xl "></div>
                        <div className="relative bg-[#1A1D2E]/80 backdrop-blur-sm border border-[#2a2d4a]/50 rounded-2xl overflow-hidden">
                            <div className="flex items-center">
                                <div className="pl-4 pr-2">
                                    <Search className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar género musical..."
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                    className="w-full bg-transparent text-white placeholder-gray-400 py-4 pr-4 text-base sm:text-lg focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Genres Carousel */}
                <div className="mb-6 sm:mb-8">
                    {cargandoGeneros ? (
                        // Estado de carga inicial
                        <div className="bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0px_30px_rgba(72,80,111,0.30)]">
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-3 mb-4">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                                    <span className="text-gray-300 text-lg">Cargando géneros...</span>
                                </div>
                                <p className="text-gray-500 text-sm">
                                    Obteniendo la lista de géneros musicales
                                </p>
                            </div>
                        </div>
                    ) : generosFiltrados.length > 0 ? (
                        // Géneros encontrados
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
                            
                            <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-4 sm:p-6 shadow-[0_0px_30px_rgba(72,80,111,0.30)]">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <button
                                        onClick={() => scroll("left")}
                                        className="flex-shrink-0 p-2 sm:p-3 text-gray-400 hover:text-white hover:bg-[#2a2d4a]/50 rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                                    >
                                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>

                                    {/* genros scroll*/}
                                    <div
                                        ref={contenedorRef}
                                        className="flex gap-3 sm:gap-4 flex-1 overflow-x-auto scrollbar-hide py-2"
                                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                                    >
                                        {generosFiltrados.map((genero) => (
                                            <button
                                                key={genero.id}
                                                onClick={() => onSelectGenre(genero.nombre)}
                                                className={`relative flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                                                    generoSeleccionado === genero.nombre
                                                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_0px_20px_rgba(139,69,255,0.40)] ring-2 ring-white/20"
                                                        : "bg-[#232736]/80 border border-[#2e3354]/50 text-gray-300 hover:border-cyan-400/50 hover:text-white hover:bg-[#2a2f47]/80 hover:shadow-[0_0px_15px_rgba(6,182,212,0.20)]"
                                                }`}
                                            >
                                                <span className="relative z-10 whitespace-nowrap">
                                                    {genero.nombre}
                                                </span>
                                                {generoSeleccionado === genero.nombre && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => scroll("right")}
                                        className="flex-shrink-0 p-2 sm:p-3 text-gray-400 hover:text-white hover:bg-[#2a2d4a]/50 rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                                    >
                                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // No se encontraron géneros
                        <div className="bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0px_30px_rgba(72,80,111,0.30)]">
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-3 mb-4">
                                    
                                    <span className="text-gray-300 text-lg">No se encontraron géneros</span>
                                </div>
                                <p className="text-gray-500 text-sm">
                                    {busqueda 
                                        ? `No hay géneros que coincidan con "${busqueda}". Intenta con otro término.`
                                        : "No hay géneros disponibles en este momento."
                                    }
                                </p>
                            
                            </div>
                        </div>
                    )}
                </div>

                {/* Continue Button */}
                <div className="text-center">
                    <div className="relative inline-block">
                        {generoSeleccionado && (
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                        )}
                        <button
                            onClick={onContinue}
                            disabled={!generoSeleccionado}
                            className={`relative px-8 sm:px-12 py-4 sm:py-3 rounded-2xl text-base sm:text-lg font-bold cursor-pointer ${
                                generoSeleccionado
                                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:brightness-110 shadow-black"
                                    : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            <span className="relative z-10">
                                {generoSeleccionado ? `Explorar ${generoSeleccionado}` : "Selecciona un género"}
                            </span>
                        </button>
                    </div>
                    
                    {generoSeleccionado && (
                        <p className="mt-4 text-sm text-gray-400 animate-fade-in">
                            ¡Perfecto! Descubre lo mejor de <span className="text-cyan-400 font-medium">{generoSeleccionado}</span>
                        </p>
                    )}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </div>

    );
}