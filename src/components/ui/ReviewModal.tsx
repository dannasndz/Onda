'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { IconClose } from './icons';
import { ReviewForm } from './ReviewForm';
import { ReviewReadOnly } from './ReviewReadOnly'; 
import { Song, Review } from './types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song | null;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, song }) => {
  const { data: session } = useSession();
  const [existingReview, setExistingReview] = useState<Review | null>(null);
  const [isEditingReview, setIsEditingReview] = useState(false);

  useEffect(() => {
    const reset = () => {
      setExistingReview(null);
      setIsEditingReview(false);
    };

    async function fetchReview() {
      if (!song || !session?.user) return reset();
      try {
        const res = await fetch(
          `/api/review?name=${encodeURIComponent(song.name)}&artist=${encodeURIComponent(song.artist)}&tipo=${song.tipo}`
        );
        if (!res.ok) return reset();
        const data = await res.json();
        if (data?.id) {
          setExistingReview(data);
          setIsEditingReview(false); 
        } else {
          setExistingReview(null);
          setIsEditingReview(false);
        }
      } catch {
        reset();
      }
    }

    if (isOpen) fetchReview(); else reset();
  }, [isOpen, song, session]);

  const handleSave = async ({ title, content, rating }: { title: string; content: string; rating: number }) => {
    if (!song || !session?.user) return;
    const payload = {
      titulo: title,
      contenido: content,
      estrellas: rating,
      ...(!existingReview && { song }),
    };
    const url = existingReview ? `/api/review/${existingReview.id}` : '/api/review';
    const method = existingReview ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    onClose();
  };

  if (!isOpen || !song) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="relative bg-[#1A1D2E] text-white rounded-xl shadow-[0_0px_30px_rgba(72,80,111,0.50)]  border-[#191c2c8d] border-1 w-full max-w-3xl md:max-w-4xl p-6 md:p-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
          <IconClose />
        </button>

        {existingReview && !isEditingReview ? (
          <ReviewReadOnly
            review={existingReview}
            song={song}
            onEdit={() => setIsEditingReview(true)}
          />
        ) : (
          <>
            {!existingReview && !isEditingReview && (
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center space-y-4 flex-shrink-0">
                  <img
                    src={song.coverUrl || '/no-cover.png'}
                    alt={`Cover for ${song.name}`}
                    className="w-full h-auto object-cover rounded-lg shadow-lg aspect-square max-w-xs mx-auto md:max-w-full"
                  />
                </div>

                <div className="md:w-3/5 lg:w-2/3 flex flex-col space-y-6 justify-center">
                  <div>
                    <h2 className="text-4xl font-semibold text-white mb-0.5">{song.name}</h2>
                    <p className="text-2xl text-gray-400 mb-3">{song.artist}</p>
                    <p className='text-gray-500 text-sm text-center mt-5 mb-2'>El mundo necesita saber qué piensas. ¡Escribe tu reseña ya!</p>
                  </div>

                  <button
                    onClick={() => setIsEditingReview(true)}
                    className="text-center px-5 py-2.5 rounded-lg text-2xl font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity"
                  >
                    Crear reseña
                  </button>
                </div>
              </div>
            )}

            {(isEditingReview || (!existingReview && isEditingReview)) && (
              <ReviewForm
                song={song}
                existingReview={existingReview}
                onSubmit={handleSave}
                onCancel={() => setIsEditingReview(false)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
