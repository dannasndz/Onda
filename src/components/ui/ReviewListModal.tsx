'use client';

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { RatingProm } from '@/components/ui/ratingProm';

interface Review {
    id: string;
    estrellas: number;
    contenido: string;
    user: {
        name: string;
    };
}

export default function ReviewListModal({
    isOpen,
    onClose,
    name,
    artist,
    tipo,
}: {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    artist: string;
    tipo: 'cancion' | 'album' | 'otro';
}) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (!isOpen) return;

  async function fetchReviews() {
    setLoading(true);
    try {
      const res = await fetch(`/api/review/obra?name=${encodeURIComponent(name)}&artist=${encodeURIComponent(artist)}&tipo=${tipo}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const text = await res.text();
      const data = text ? JSON.parse(text) : [];

      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }

  fetchReviews();
}, [isOpen, name, artist, tipo]);



    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md rounded bg-zinc-900 p-6 text-white">
                    <Dialog.Title className="text-xl font-bold mb-4">Reseñas de la comunidad</Dialog.Title>
                    {loading ? (
                        <p>Cargando reseñas...</p>
                    ) : reviews.length === 0 ? (
                        <p>No hay reseñas todavía.</p>
                    ) : (
                        <div className="space-y-4 max-h-[400px] overflow-y-auto">
                            {reviews.map(review => (
                                <div key={review.id} className="border border-zinc-700 p-4 rounded">
                                    <p className="text-sm text-white font-semibold">{review.user.name}</p>
                                    <RatingProm value={review.estrellas} />
                                    <p className="text-sm text-zinc-300">{review.contenido}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600 cursor-pointer"
                    >
                        Cerrar
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
