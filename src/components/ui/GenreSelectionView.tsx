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
    const contenedorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchGeneros = async () => {
            try {
                const res = await fetch("/api/generos");
                if (!res.ok) throw new Error('Error al cargar géneros');
                const data = await res.json();
                setGeneros(data);
            } catch (error) {
                console.error("Error en fetchGeneros:", error);
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
        <>
            <h1 className="text-3xl md:text-6xl font-medium mb-3">
                Hola, {session?.user?.name ?? "usuario"}!
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-center">
                ¿Qué te gustaría descubrir hoy?
            </p>
            <p className="text-sm text-gray-400 mb-6 text-center max-w-xl">
                Selecciona un género para ver los artistas y álbumes más escuchados.
            </p>

            {/* Buscador */}
            <div className="relative w-full max-w-xl mb-6">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Buscar género..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full bg-[#1a1d2e] text-white rounded-xl pl-10 pr-4 py-3 text-base border border-[#2a2d4a] focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
            </div>

            {/* Carrusel de géneros */}
            {generosFiltrados.length > 0 ? (
                <div className="flex items-center bg-[#1A1D2E] rounded-2xl gap-4 w-full max-w-5xl mb-8 px-6 py-6 min-h-[100px] shadow-lg">
                    <button
                        onClick={() => scroll("left")}
                        className="text-white hover:scale-110 transition p-2 rounded-full hover:bg-[#1f2236]"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div
                        ref={contenedorRef}
                        className="flex gap-4 flex-1 overflow-x-auto no-scrollbar"
                    >
                        {generosFiltrados.map((genero) => (
                            <button
                                key={genero.id}
                                onClick={() => onSelectGenre(genero.nombre)}
                                className={`whitespace-nowrap rounded-full px-6 py-3 text-base font-semibold border transition-all
                                ${generoSeleccionado === genero.nombre
                                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white border-transparent ring-2 ring-white"
                                    : "bg-[#1f2236] border-[#333955] text-gray-300 hover:border-violet-500 hover:text-white"
                                }`}
                            >
                                {genero.nombre}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="text-white hover:scale-110 transition p-2 rounded-full hover:bg-[#1f2236]"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            ) : (
                <div className="bg-[#1A1D2E] rounded-2xl w-full max-w-5xl mb-8 p-6 min-h-[100px] shadow-lg flex justify-center items-center">
                    <p className="text-gray-400">{busqueda ? "No se encontraron géneros." : "Cargando géneros..."}</p>
                </div>
            )}

            {/* Botón de continuar */}
            <button
                onClick={onContinue}
                disabled={generoSeleccionado === null}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
                Continuar
            </button>
        </>
    );
}