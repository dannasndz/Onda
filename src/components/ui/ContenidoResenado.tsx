import React from 'react';
import { Review, Song } from './types';

interface ReviewReadOnlyProps {
  review: Review;
  song: Song;
  onEdit: () => void;
}

export const ReviewReadOnly: React.FC<ReviewReadOnlyProps> = ({ review, song, onEdit }) => {
  return (
    <div className="bg-[#1A1D2E] w-[1200px] ml-20 mx-auto text-white rounded-2xl p-4 shadow-lg flex items-center gap-6 ">
      <img
        src={song.coverUrl || '/placeholder-music.png'}
        alt={song.name}
        className="w-32 h-32 rounded-xl object-cover shadow-md"
      />

      <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
        <div className="flex flex-col justify-between mr-5">
          <div>
            <p className="text-2xl font-bold text-white">{song.name}</p>
            <p className="text-gray-300 text-lg">{song.artist}</p>
            {song.album && (
              <p className="text-gray-400 text-sm italic">Álbum: {song.album}</p>
            )}
          </div>

          <div className="mt-3 text-[#7F82F0] text-2xl">
            {'★'.repeat(review.estrellas)}
            {'☆'.repeat(5 - review.estrellas)}
          </div>
        </div>

        <div className="bg-[#353B52] rounded-xl p-4 flex-1 shadow-sm border border-[#2e3354]">
          <p className="font-semibold text-white text-lg mb-2">{review.titulo}</p>
          <p className="text-gray-300">{review.contenido}</p>
        </div>
      </div>
    </div>
  );
};
