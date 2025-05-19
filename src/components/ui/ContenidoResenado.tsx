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
    <div className="bg-[#1A1D2E] shadow-[0_0px_10px_rgba(72,80,111,0.50)] w-[1200px] ml-20 mx-auto text-white rounded-2xl p-4  flex items-center gap-6 ">
      <img
        src={song.coverUrl || '/placeholder-music.png'}
        alt={song.name}
        className="w-32 h-32 rounded-xl object-cover shadow-md"
      />

      <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
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

        <div className="bg-[#353B52] rounded-xl p-4 flex-1 shadow-sm border border-[#2e3354]">
          <p className="font-semibold text-white text-lg mb-1">{review.titulo}</p>
          <p className="text-gray-400 text-sm mb-3 italic">Creada el {fechaCreacion}</p>
          <p className="text-gray-300">{review.contenido}</p>
        </div>
      </div>
    </div>
  );
};
