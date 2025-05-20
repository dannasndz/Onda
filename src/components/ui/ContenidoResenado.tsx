import React from 'react';
import { Review, Song } from './types';

interface ReviewReadOnlyProps {
  review: Review;
  song: Song;
  onEdit: () => void;
}

export const ReviewReadOnly: React.FC<ReviewReadOnlyProps> = ({ review, song, onEdit }) => {
  const fechaCreacion = review.createdAt
    ? new Date(review.createdAt).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : 'Fecha no disponible';

  return (
    <div className="w-full max-w-6xl bg-[#1A1D2E] p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_0px_15px_rgba(72,80,111,0.50)] border border-[#191c2c8d] flex flex-col md:flex-row items-center md:items-start gap-6">
      <img
        src={song.coverUrl || '/placeholder-music.png'}
        alt={song.name}
        className="w-32 h-32 rounded-xl object-cover shadow-md"
      />

      <div className="flex-1 flex flex-col sm:flex-row justify-between w-full gap-4">
        <div className="flex flex-col justify-between mr-5 mt-5">
          <div>
            <p className="text-2xl font-bold text-white">{song.name}</p>
            <p className="text-gray-300 text-lg">{song.artist}</p>
            <p className="text-gray-500 text-sm">{song.tipo}</p>

            {song.album && (
              <p className="text-gray-400 text-sm italic">Álbum: {song.album}</p>
            )}
          </div>

          <div className="mt-3 mb-5 text-[#7F82F0] text-4xl">
            {'★'.repeat(review.estrellas)}
            {'☆'.repeat(5 - review.estrellas)}
          </div>
        </div>

        <div className="bg-[#353B52] rounded-xl p-4 flex-1 shadow-sm border border-[#2e3354] w-[100]">

          <p className="font-semibold text-white text-lg mb-1 break-words whitespace-pre-wrap overflow-hidden">
            {review.titulo}
          </p>

          <p className="text-gray-400 text-sm mb-3 italic">Creada el {fechaCreacion}</p>
          <p className="text-gray-300 break-words whitespace-pre-wrap overflow-hidden">
            {review.contenido}
          </p>

        </div>
      </div>
    </div>
  );
};
