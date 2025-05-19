"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Genero {
  id: number;
  nombre: string;
}

interface ModalGenerosProps {
  generosUsuario: string[];
  tipo: "actual" | "gustaria";
  onClose: () => void;
  onGuardar: (data: { actuales: number[]; gustaria: number[] }) => void;
}

export const ModalGeneros: React.FC<ModalGenerosProps> = ({
  generosUsuario,
  tipo,
  onClose,
  onGuardar,
}) => {
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [seleccionados, setSeleccionados] = useState<number[]>([]);
  const [pagina, setPagina] = useState(0);
  const generosPorPagina = 15;

  useEffect(() => {
    const fetchGeneros = async () => {
      const res = await fetch("/api/generos");
      const data: Genero[] = await res.json();
      setGeneros(data);

      const seleccionInicial = data
        .filter((g) => generosUsuario.includes(g.nombre))
        .map((g) => g.id);
      setSeleccionados(seleccionInicial);
    };

    fetchGeneros();
  }, [generosUsuario]);

  const toggleSeleccion = (id: number) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleGuardar = () => {
    if (tipo === "actual") {
      onGuardar({ actuales: seleccionados, gustaria: [] });
    } else {
      onGuardar({ actuales: [], gustaria: seleccionados });
    }
    onClose();
  };

  const totalPaginas = Math.ceil(generos.length / generosPorPagina);
  const generosPagina = generos.slice(
    pagina * generosPorPagina,
    (pagina + 1) * generosPorPagina
  );

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#141624] rounded-3xl p-8 w-full max-w-4xl shadow-2xl border border-[#2a2d4a]">
        <h2 className="text-white text-2xl font-medium text-center mb-6">
          Selecciona tus géneros {tipo === "actual" ? "actuales" : "deseados"}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-6">
          {generosPagina.map((genero) => {
            const isSelected = seleccionados.includes(genero.id);
            return (
              <button
                key={genero.id}
                onClick={() => toggleSeleccion(genero.id)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 border 
                  ${
                    isSelected
                      ? "bg-gradient-to-r from-[#6C63FF] to-[#A678F0] text-white border-white scale-105"
                      : "bg-[#1f2236] text-gray-300 border-[#333955] hover:border-[#6C63FF] hover:text-white hover:scale-105"
                  }`}
              >
                {genero.nombre}
              </button>
            );
          })}
        </div>

        {totalPaginas > 1 && (
          <div className="flex items-center justify-center gap-6 mb-6">
            <button
              disabled={pagina === 0}
              onClick={() => setPagina((p) => Math.max(0, p - 1))}
              className="text-white text-lg disabled:opacity-30 hover:scale-110 transition"
            >
              ←
            </button>
            <span className="text-sm text-gray-400">
              Página {pagina + 1} de {totalPaginas}
            </span>
            <button
              disabled={pagina >= totalPaginas - 1}
              onClick={() => setPagina((p) => Math.min(totalPaginas - 1, p + 1))}
              className="text-white text-lg disabled:opacity-30 hover:scale-110 transition"
            >
              →
            </button>
          </div>
        )}

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="bg-[#2e324a] text-white px-5 py-2 rounded-xl hover:bg-[#3a3e5b] transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleGuardar}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-5 py-2 rounded-xl hover:brightness-110 transition"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
