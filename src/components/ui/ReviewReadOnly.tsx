import React, { useEffect, useState } from 'react';
import { Review, Song } from './types';
import { RatingProm } from './ratingProm';
import ReviewListModal from './ReviewListModal';

interface ReviewReadOnlyProps {
  review: Review;
  song: Song;
  onEdit: () => void;
}

export const ReviewReadOnly: React.FC<ReviewReadOnlyProps> = ({ review, song, onEdit }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const [ranking, setRanking] = useState<{ promedio: number | null; cantidad?: number; mensaje?: string } | null>(null);
  const [isReviewListOpen, setReviewListOpen] = useState(false); // NUEVO


  useEffect(() => {
    async function fetchRanking() {
      if (!song) return;
      try {
        const res = await fetch(
          `/api/review/ranking?name=${encodeURIComponent(song.name)}&artist=${encodeURIComponent(song.artist)}&tipo=${song.tipo}`
        );
        if (!res.ok) return setRanking(null);
        const data = await res.json();
        setRanking(data);
      } catch {
        setRanking(null);
      }
    }

    if (song) {
      fetchRanking();
    } else {
      setRanking(null);
    }

  }, [song,]);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-screen-xl mx-auto  p-6 rounded-2xl ">

      {/* Imagen */}
      <div className="w-full md:w-2/5 justify-center md:justify-start">
        <img
          src={song.coverUrl || '/placeholder-music.png'}
          alt={`Cover for ${song.name}`}
          className="w-40 sm:w-48 md:w-full max-w-xs aspect-square object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Contenido */}
      <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col justify-between space-y-4">
        {/* Info de la canción */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white">{song.name}</h2>
          <p className="text-base sm:text-xl text-gray-400">{song.artist}</p>
          {song.album && (
            <p className="text-sm sm:text-lg text-gray-400">Álbum: {song.album}</p>
          )}
        </div>


        {ranking && (
          <div className="mb-4 text-center md:text-left">
            {ranking.promedio !== null ? (
              <>
                <div className="flex items-center gap-2 justify-center md:justify-start ">
                  <p className="text-sm text-zinc-300">
                    La comunidad califica esta obra con:
                  </p>
                  <RatingProm value={ranking.promedio} />
                </div>

                <span
                  className="text-indigo-400 text-sm cursor-pointer underline"
                  onClick={() => setReviewListOpen(true)}
                >
                  ({ranking.cantidad} reseñas)
                </span>
              </>
            ) : (
              <p className="text-sm text-gray-500">{ranking.mensaje}</p>
            )}
          </div>
        )}
        {/* Contenido de la reseña */}
        <div className="w-full bg-[#232736ad] p-4 rounded-2xl ">
          <p className={`text-white font-bold text-sm sm:text-base md:text-lg break-words whitespace-pre-wrap transition-all duration-200 ease-in-out ${!expanded ? 'line-clamp-3' : ''
            }`}>{review.titulo}</p>
          {/* Estrellas */}
          <div className="text-[#6C63FF] text-sm sm:text-3xl">
            <p className="text-lg text-gray-500 mt-1">Tú calificación: {'★'.repeat(review.estrellas)}{'☆'.repeat(5 - review.estrellas)}
            </p>
          </div>

          <p
            className={`text-white text-sm sm:text-base md:text-lg break-words whitespace-pre-wrap transition-all duration-200 ease-in-out ${!expanded ? 'line-clamp-3' : ''
              }`}
          >
            {review.contenido}
          </p>

          {review.contenido.length > 200 && (
            <button
              onClick={toggleExpanded}
              className="text-sm sm:text-base text-cyan-400 mt-2 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition"
            >
              {expanded ? 'Mostrar menos' : 'Mostrar más'}
            </button>
          )}
        </div>


        {/* Botón de editar */}
        <div>
          <button
            onClick={onEdit}
            className="w-full sm:w-auto px-6 py-2 rounded-lg text-white text-base sm:text-lg font-medium bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Editar
          </button>
        </div>
        {song?.name && (
          <ReviewListModal
            isOpen={isReviewListOpen}
            onClose={() => setReviewListOpen(false)}
            name={song.name}
            artist={song.artist}
            tipo={song.tipo}
          />
        )}
      </div>
    </div>
  );
};
