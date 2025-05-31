import React from 'react';
import { ReviewReadOnly } from './ContenidoResenado';
import { Review, Song } from './types';

interface ReviewsListProps {
  reviews: Review[];
  songs: Song[];
  onEditReview: (reviewId: string) => void;
  onDeleteReview?: (reviewId: string) => Promise<void>;
}

export const ReviewsList: React.FC<ReviewsListProps> = ({
  reviews,
  songs,
  onEditReview,
  onDeleteReview
}) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 lg:py-16">
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">
              No hay reseñas aún
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Cuando escribas tu primera reseña, aparecerá aquí.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6 review-container">
      {reviews.map((review) => {
        const song: Song = {
          name: String(review.name || ''),
          artist: String(review.artist || ''),
          album: String(review.album || ''),
          coverUrl: String(review.coverUrl || ''),
          genre: String(review.genre || ''),
          tipo: (review.tipo as 'cancion' | 'album' | 'otro') || 'cancion',
        };

        return (
          <div key={review.id} className="review-content">
            <ReviewReadOnly
              review={review}
              song={song}
              onEdit={() => onEditReview(review.id)}
              onDelete={onDeleteReview ? (reviewId) => onDeleteReview(reviewId) : undefined}
            />
          </div>
        );
      })}
    </div>
  );
};
