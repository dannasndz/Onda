import { useEffect, useState, useCallback } from 'react';
import { Review, Song } from '@/components/ui/types';

interface ResenasConCanciones {
  reviews: Review[];
  songs: Record<string, Song>;
}

export function useResenasUsuario() {
  const [data, setData] = useState<ResenasConCanciones>({ reviews: [], songs: {} });
  const [loading, setLoading] = useState(true);

  const fetchResenas = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/review/me');
      if (!res.ok) throw new Error('Error al obtener reseñas');

      const json = await res.json();

      const reviews = Array.isArray(json) ? json : json.reviews ?? [];
      const songs = json.songs ?? {};

      setData({ reviews, songs });
    } catch (err) {
      console.error('Error cargando reseñas del usuario:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResenas();
  }, [fetchResenas]);

  const refreshReviews = useCallback(() => {
    return fetchResenas();
  }, [fetchResenas]);

  return { ...data, loading, refreshReviews };
}
