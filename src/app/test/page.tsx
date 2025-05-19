'use client';

import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Genero {
  id: number;
  nombre: string;
}

export default function GenerosPage() {
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [actuales, setActuales] = useState<number[]>([]);
  const [gustaria, setGustaria] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<1 | 2>(1);
  const [pagina, setPagina] = useState(0);
  const [search, setSearch] = useState('');

  const generosPorPagina = 10;
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
      return;
    }

    if (status !== "loading") {
      fetchGeneros();
    }
  }, [status]);

  async function fetchGeneros() {
    try {
      const res = await fetch('/api/generos');
      const data = await res.json();
      setGeneros(data);
    } catch (error) {
      console.error('Error al cargar géneros:', error);
    } finally {
      setLoading(false);
    }
  }

  const seleccionados = step === 1 ? actuales : gustaria;

  const toggleSeleccion = (id: number) => {
    const setFn = step === 1 ? setActuales : setGustaria;
    setFn((prev) =>
      prev.includes(id) ? prev.filter(gid => gid !== id) : [...prev, id]
    );
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (actuales.length === 0) return  <p>Selecciona al menos un género </p>;
      setStep(2);
      setPagina(0);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (gustaria.length === 0) {
      return;
    }

    try {
      const res = await fetch('/api/usuarioGeneros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ actuales, gustaria }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/extras/agradecimiento');
      } 
    } catch (error) {
      console.error('Error al guardar géneros:', error);
    }
  };

  // Búsqueda y paginación
  const generosFiltrados = search.trim()
    ? generos.filter(g =>
      g.nombre.toLowerCase().includes(search.toLowerCase())
    )
    : generos;

  const totalPaginas = Math.ceil(generosFiltrados.length / generosPorPagina);
  const inicio = pagina * generosPorPagina;
  const generosPagina = search.trim()
    ? generosFiltrados
    : generosFiltrados.slice(inicio, inicio + generosPorPagina);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {step === 1
            ? "¿Qué géneros escuchas actualmente?"
            : "¿Qué géneros te gustaría escuchar más?"}
        </h1>

        <div className="mb-3 flex flex-wrap justify-between items-center gap-4 w-full">
          <input
            type="text"
            placeholder=" Buscar género..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-full  text-sm sm:w-[250px] h-[35px] rounded-xl bg-[#1f1f2b] border border-[#2c2d3f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />

          <div className="flex flex-wrap gap-2 justify-end">
            {seleccionados.map((id) => {
              const genero = generos.find((g) => g.id === id);
              return (
                <span
                  key={id}
                  className="bg-[#6C63FF] opacity-70 px-3 py-1 rounded-full text-white text-sm flex items-center justify-between gap-2 h-[30px] w-[130px]"
                >
                  <span className="truncate">{genero?.nombre}</span>
                  <button
                    onClick={() => toggleSeleccion(id)}
                    className="text-white text-xs hover:text-red-300 opacity-80"
                    aria-label={`Quitar ${genero?.nombre}`}
                  >
                    ✕
                  </button>
                </span>
              );
            })}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="mb-4 bg-[#1A1D2E] rounded-2xl p-8 sm:p-5 shadow-lg max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-2 justify-items-center">
              {generosPagina.map((genero) => {
                const isSelected = seleccionados.includes(genero.id);
                return (
                  <div key={genero.id} className="h-[60px] w-[150px] p-1">
                    <button
                      onClick={() => toggleSeleccion(genero.id)}
                      className={`w-full h-full text-sm rounded-xl font-medium transition-all flex items-center justify-center
                        ${isSelected
                          ? 'bg-gradient-to-r from-[#6C63FF] to-[#A678F0] text-white border-2 border-white'
                          : 'bg-gradient-to-r from-[#6C63FF] to-[#A678F0] text-white border hover:opacity-90 border-transparent'
                        }`}
                    >
                      {genero.nombre}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {!search.trim() && (
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              disabled={pagina === 0}
              onClick={() => setPagina(p => Math.max(0, p - 1))}
              className="px-4 py-2 bg-[#1f2937] rounded disabled:opacity-50"
            >
              ←
            </button>
            <span className="text-sm text-gray-400">
              Página {pagina + 1} de {totalPaginas}
            </span>
            <button
              disabled={pagina >= totalPaginas - 1}
              onClick={() => setPagina(p => Math.min(totalPaginas - 1, p + 1))}
              className="px-4 py-2 bg-[#1f2937] rounded disabled:opacity-50"
            >
              →
            </button>
          </div>
        )}
      </div>

      <button
        onClick={handleNextStep}
        className="w-[500px] bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6 rounded-full font-semibold hover:opacity-90 transition"
        // className="w-[500px] flex justify-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold hover:scale-105 transition"
      >
        {step === 1 ? "Siguiente" : "Finalizar"}
      </button>
    </div>
  );
}
