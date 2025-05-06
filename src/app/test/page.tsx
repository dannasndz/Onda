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
  const [seleccionados, setSeleccionados] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
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
  }, [status, router]);

  useEffect(() => {
    console.log("Estado de sesión:", status);
    console.log("Datos de sesión:", session);
  }, [session, status]);

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

  const toggleSeleccion = (id: number) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    if (seleccionados.length === 0) {
      alert('Por favor, selecciona al menos un género musical');
      return;
    }

    try {
      console.log('Sesión actual:', session);

      const res = await fetch('/api/usuarioGeneros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ generos: seleccionados }),
      });

      const data = await res.json().catch(e => {
        console.error('Error al parsear respuesta JSON:', e);
        return null;
      });

      console.log('Respuesta completa:', { status: res.status, data });

      if (res.ok) {
        alert('¡Géneros guardados correctamente!');
        router.push('/dashboard');
      } else {
        const errorMsg = data?.error || 'No se pudieron guardar los géneros';
        console.error('Error respuesta:', errorMsg, data);
        alert(`Error: ${errorMsg}`);
      }
    } catch (error) {
      console.error('Error al enviar géneros:', error);
      alert('Ocurrió un error al procesar tu solicitud. Por favor intenta nuevamente.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#121212]">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          ¿Qué géneros escuchas actualmente?
        </h1>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {generos.map((genero) => {
            const isSelected = seleccionados.includes(genero.id);
            return (
              <button
                key={genero.id}
                onClick={() => toggleSeleccion(genero.id)}
                className={`py-3 rounded-xl font-semibold transition-colors ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-[#1e1f2b] text-white hover:bg-[#2c2d3f]'
                }`}
              >
                {genero.nombre}
              </button>
            );
          })}
        </div>

        {loading ? (
          <p className="text-white text-center">Cargando géneros...</p>
        ) : (
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold"
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}