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
      <div className="flex flex-col gap-10 items-center">
        <div className="w-[1200px] ml-20 mx-auto bg-[#1A1D2E] p-5 flex items-start shadow-[0_0px_15px_rgba(72,80,111,0.50)] border-1 border-[#191c2c8d] rounded-2xl">
          <div className="w-50 h-50 rounded-full bg-gray-600 flex-shrink-0"></div>
          <div className="flex-grow px-10">
            <h1 className="text-white text-4xl font-bold mb-2">
              {perfil.nombreUsuario}
            </h1>
            <p className="text-gray-400 text-lg mb-4">
              Miembro desde {fecha} · {perfil.totalResenas} reseñas
            </p>
            <div className="flex items-center gap-4 mt-8 mb-3">
              <p className="text-gray-300 font-normal text-xl">
                Géneros preferidos
              </p>
              <button
                onClick={handleAgregarGenero}
                className="text-white bg-gradient-to-r from-[#222440] to-[#a678f05f] rounded-2xl w-8 h-5 flex items-center justify-center text-sm font-bold hover:brightness-110 transition"
                aria-label="Agregar género"
              >
                +
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {(perfil.generosPreferidos || []).map((genero, i) => (
                <div
                  key={i}
                  className="px-5 py-2 text-base bg-gradient-to-r from-[#6C63FF] to-[#A678F0] rounded-full text-white"
                >
                  {genero}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-white text-3xl font-bold mb-6 ml-20">
            Mis Reseñas
          </h2>
          <ReviewsList
            reviews={reviews}
            songs={songs}
            onEditReview={(id) => {
              console.log("Editar reseña con ID:", id);
              // Aquí podrías redirigir o abrir modal
            }}
          />
        </div>
      </div>

      {mostrarModal && (
        <ModalGeneros
          generosUsuario={perfil.generosPreferidos}
          onClose={() => setMostrarModal(false)}
          onGuardar={handleGuardarGeneros} tipo={"actual"}        />
      )}
    </>
  );
}
