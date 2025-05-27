import React, { useEffect, useState } from 'react';
import { Review, Song } from './types';
import { RatingProm } from './ratingProm';
import ReviewListModal from './ReviewListModal';
import { SongInfo } from './SongInfo';

interface ReviewReadOnlyProps {
  review: Review;
  song: Song;
  onEdit: () => void;
}

export const ReviewReadOnly: React.FC<ReviewReadOnlyProps> = ({ review, song, onEdit }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const [ranking, setRanking] = useState<{ promedio: number | null; cantidad?: number; mensaje?: string } | null>(null);
  const [isReviewListOpen, setReviewListOpen] = useState(false); 

  // Resetear estados cuando cambia la canción o reseña
  useEffect(() => {
    setExpanded(false);
    setReviewListOpen(false);
  }, [song, review]);

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
      setRanking(null); 
      fetchRanking();
    } else {
      setRanking(null);
    }
  }, [song]);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <SongInfo 
        song={song}
        ranking={ranking}
        onShowReviews={() => setReviewListOpen(true)}
        showCreateButton={false}
        showMotivationalMessage={false}
        className="mb-6"
      >
        {/* Contenido de la reseña */}
        <div className="w-full bg-[#232736ad] p-4 rounded-2xl mb-4 ">
          <p className={`text-white font-bold text-sm sm:text-base md:text-lg break-words whitespace-pre-wrap transition-all duration-200 ease-in-out ${!expanded ? 'line-clamp-3' : ''}`}>
            {review.titulo}
          </p>
          
          {/* Estrellas */}
          <div className="text-[#6C63FF] text-sm sm:text-3xl">
            <p className="text-lg text-gray-500 mt-1">
              Tu calificación: {'★'.repeat(review.estrellas)}{'☆'.repeat(5 - review.estrellas)}
            </p>
          </div>

          <p className={`text-white text-sm sm:text-base md:text-lg break-words whitespace-pre-wrap transition-all duration-200 ease-in-out ${!expanded ? 'line-clamp-3' : ''}`}>
            {review.contenido}
          </p>

          {review.contenido.length > 200 && (
            <button
              onClick={toggleExpanded}
              className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
            >
              {expanded ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Mostrar menos
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Mostrar más
                </>
              )}
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
      </SongInfo>

      {/* Modal de lista de reseñas */}
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
  );
};
