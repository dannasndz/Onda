import { useEffect, useState } from "react";

interface Perfil {
  id: number;
  nombreUsuario: string;
  correo: string;
  miembroDesde: string;
  totalResenas: number;
  generosPreferidos: string[];
}

export function usePerfil() {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const res = await fetch("/api/usuario/perfil");
        if (!res.ok) throw new Error("Error al obtener perfil");

        const data = await res.json();

        // Adaptamos la estructura del perfil al formato que espera el componente
        const perfilAdaptado: Perfil = {
          id: data.id,
          nombreUsuario: data.nombreUsuario,
          correo: data.correo,
          miembroDesde: data.createdAt,
          totalResenas: data._count.reseñas,
          generosPreferidos: data.generos.map((g: any) => g.genero.nombre),
        };

        setPerfil(perfilAdaptado);
      } catch (error) {
        console.error("Error al cargar el perfil:", error);
        setPerfil(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, []);

  return { perfil, loading };
}
