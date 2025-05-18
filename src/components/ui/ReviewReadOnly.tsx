import React from 'react';
import { Review, Song } from './types';

interface ReviewReadOnlyProps {
  review: Review;
  song: Song;
  onEdit: () => void;
}

export const ReviewReadOnly: React.FC<ReviewReadOnlyProps> = ({ review, song, onEdit }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center space-y-4 flex-shrink-0">
        <img
          src={song.coverUrl || '/no-cover.png'}
          alt={`Cover for ${song.name}`}
          className="w-full h-auto object-cover rounded-lg shadow-lg aspect-square max-w-xs mx-auto md:max-w-full"
        />
      </div>

      <div className="md:w-3/5 lg:w-2/3 flex flex-col space-y-4  justify-center">
        <div>
          <h2 className="text-4xl font-semibold text-white mb-0.5">{song.name}</h2>
          <p className="text-2xl text-gray-400 mb-3">{song.artist}</p>
          {song.album && <p className="text-lg text-gray-400 mb-3">Álbum: {song.album}</p>}
        </div>

        <div className="text-[#6C63FF]  text-3xl -mt-4">
          {'★'.repeat(review.estrellas)}{'☆'.repeat(5 - review.estrellas)}
        </div>
        
        <div>
          <p className="text-white text-lg whitespace-pre-wrap">{review.contenido}</p>
        </div>


        <button
          onClick={onEdit}
          className="mt-4 text-center px-8 py-2.5 rounded-lg text-2xl font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity max-w-max"
        >
          Editar
        </button>
      </div>
    </div>
  );
};
