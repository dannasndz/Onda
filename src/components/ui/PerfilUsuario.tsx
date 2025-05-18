"use client";

import { usePerfil } from "@/hooks/usePerfil";

export default function PerfilUsuario() {
  const { perfil, loading } = usePerfil();

  if (loading) return <p>Cargando perfil...</p>;
  if (!perfil) return <p>No se pudo cargar el perfil.</p>;

  const fecha = new Date(perfil.miembroDesde).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 max-w-xl mx-auto bg-[#1A1D2E] shadow-[0_0px_30px_rgba(72,80,111,0.20)] rounded-2xl ">
      <h1 className="text-white text-5xl font-bold"> {perfil.nombreUsuario}</h1>
      <div className="text-[#ADB5BD]">

        <p>Miembro desde {fecha} - Total de reseñas: {perfil.totalResenas} </p>
        <p><strong>Géneros preferidos:</strong></p>
      </div>
      <ul className="list-disc ml-5">
        {perfil.generosPreferidos.map((genero, i) => (
          <li key={i}>{genero}</li>
        ))}
      </ul>
    </div>
  );
}
