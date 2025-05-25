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
    <div className="w-full max-w-6xl bg-[#1A1D2E] p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_0px_15px_rgba(72,80,111,0.50)] border border-[#191c2c8d] flex flex-col md:flex-row gap-6">
      {/* Columna izquierda */}
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
        <img
          src={song.coverUrl || '/placeholder-music.png'}
          alt={song.name}
          className="w-32 h-32 rounded-xl object-cover shadow-md"
        />

        <div className="flex flex-col justify-between w-full">
          <div>
            <p className="text-2xl font-bold text-white">{song.name}</p>
            <p className="text-gray-300 text-lg">{song.artist}</p>
            <p className="text-gray-500 text-sm">{song.tipo}</p>
            {song.album && (
              <p className="text-gray-400 text-sm italic">Álbum: {song.album}</p>
            )}
          </div>

          <div className="text-[#7F82F0] text-4xl mt-3">
            {'★'.repeat(review.estrellas)}
            {'☆'.repeat(5 - review.estrellas)}
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="w-full md:min-w-4/5 bg-[#353B52] rounded-xl p-4 shadow-sm border border-[#2e3354]">
        <p className="font-semibold text-white text-lg mb-1 break-words">
          {review.titulo}
        </p>
        <p className="text-gray-400 text-sm mb-3 italic">
          Creada el {fechaCreacion}.
        </p>
        <p className="text-gray-300 break-words whitespace-pre-wrap">
          {review.contenido}
        </p>
      </div>
    </div>

  );
};
