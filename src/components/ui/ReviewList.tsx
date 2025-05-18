import React from 'react';
import { Review, Song } from './types';
import { ReviewReadOnly } from './ContenidoResenado';

interface ReviewsListProps {
  reviews: Review[];
  songs: Record<string, Song>;
  onEditReview: (reviewId: string) => void;
}

export const ReviewsList: React.FC<ReviewsListProps> = ({ reviews, songs, onEditReview }) => {
  if (reviews.length === 0) {
    return (
      <p className="text-gray-400 text-center py-10">No has reseñado ningún contenido todavía.</p>
    );
  }

  return (
    <div className="flex flex-col gap-6 "> 
      {reviews.map((review) => {
        const song = {
          name: String(review.name),
          artist: String(review.artist),
          album: String(review.album || ''),
          coverUrl: String(review.coverUrl || ''),
          genre: String(review.genre || ''),
          tipo: review.tipo as 'cancion' | 'album' | 'otro',
        };

        return (
          <ReviewReadOnly
            key={review.id}
            review={review}
            song={song}
            onEdit={() => onEditReview(review.id)}
          />
        );
      })}
    </div>
  );
};

