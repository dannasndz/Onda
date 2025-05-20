"use client";

import { usePerfil } from "@/hooks/usePerfil";
import { useResenasUsuario } from "@/hooks/useReviewsUsuario";
import { ReviewsList } from "./ReviewList";
import { useState } from "react";
import { ModalGeneros } from "./ModalGeneros";

export default function PerfilUsuario() {
  const { perfil, loading: loadingPerfil } = usePerfil();
  const { reviews, songs, loading: loadingResenas } = useResenasUsuario();
  const [mostrarModal, setMostrarModal] = useState(false);

  if (loadingPerfil || loadingResenas)
    return <p className="text-white text-center mt-10">Cargando perfil...</p>;

  if (!perfil)
    return (
      <p className="text-red-500 text-center mt-10">
        No se pudo cargar el perfil.
      </p>
    );

  const fecha = new Date(perfil.miembroDesde).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleAgregarGenero = () => setMostrarModal(true);

  const handleGuardarGeneros = async ({
    actuales,
    gustaria,
  }: {
    actuales: number[];
    gustaria: number[];
  }) => {
    try {
      const res = await fetch("/api/usuarioGeneros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ actuales, gustaria }),
      });

      if (res.ok) {
        location.reload();
      } else {
        console.error("Error al guardar géneros", await res.json());
      }
    } catch (err) {
      console.error("Error agregando géneros", err);
    }
  };

  return (
    <>
     <div className="flex flex-col gap-10 items-center w-full px-4 sm:px-6 md:px-10  pb-16">

        {/* Perfil */}
        <div className="w-full max-w-6xl bg-[#1A1D2E] p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_0px_15px_rgba(72,80,111,0.50)] border border-[#191c2c8d] flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-600 flex-shrink-0" />

          {/* Info del perfil */}
          <div className="flex-1 w-full text-center md:text-left">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 break-words">
              {perfil.nombreUsuario}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4">
              Miembro desde {fecha} · {perfil.totalResenas} reseñas
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 mt-4 mb-3 flex-wrap">
              <p className="text-gray-300 font-normal text-base sm:text-lg md:text-xl">
                Géneros preferidos
              </p>
              <button
                onClick={handleAgregarGenero}
                className="text-white bg-gradient-to-r from-[#222440] to-[#a678f05f] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:brightness-110 transition"
                title="Agregar género"
              >
                +
              </button>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
              {(perfil.generosPreferidos || []).map((genero, i) => (
                <div
                  key={i}
                  className="px-3 py-1 text-xs sm:text-sm md:text-base bg-gradient-to-r from-[#6C63FF] to-[#A678F0] rounded-full text-white"
                >
                  {genero}
                </div>
              ))}
            </div>
          </div>
        </div>
        <h2 className="w-full max-w-6xl  text-white text-xl font-bold sm:text-2xl md:text-3xl flex flex-col md:flex-row items-center md:items-start gap-6">
          Mis Reseñas
        </h2>


        {/* Reseñas */}
        <div className="w-full">

          <ReviewsList
            reviews={reviews}
            songs={songs}
            onEditReview={(id) => {
              console.log("Editar reseña con ID:", id);
            }}
          />
        </div>
      </div>
      {mostrarModal && (
        <ModalGeneros
          generosUsuario={perfil.generosPreferidos}
          onClose={() => setMostrarModal(false)}
          onGuardar={handleGuardarGeneros} tipo={"actual"} />
      )}

    </>
  );
}
