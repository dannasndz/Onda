'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { IconClose } from './icons';
import { ReviewForm } from './ReviewForm';
import { ReviewReadOnly } from './ReviewReadOnly';
import { Song, Review } from './types';
import { RatingProm } from '@/components/ui/ratingProm';
import ReviewListModal from '@/components/ui/ReviewListModal';
import { SongInfo } from './SongInfo';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, song }) => {
  const { data: session } = useSession();
  const [existingReview, setExistingReview] = useState<Review | null>(null);
  const [isEditingReview, setIsEditingReview] = useState(false);
  const [ranking, setRanking] = useState<{ promedio: number | null; cantidad?: number; mensaje?: string } | null>(null);
  const [isReviewListOpen, setReviewListOpen] = useState(false);

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
          reset();
        }
      } catch {
        reset();
      }
    }

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

    if (isOpen) {
      fetchReview();
      fetchRanking();
    } else {
      reset();
      setRanking(null);
    }
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
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    onClose();
  };

  if (!isOpen || !song) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center pt-4 pb-4" onClick={onClose}>
      <div
        className="relative bg-[#1A1D2E] text-white rounded-xl shadow-[0_0px_30px_rgba(72,80,111,0.50)] border border-[#191c2c8d] w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-4 my-auto transform transition-all max-h-[calc(100vh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p- sm:p-6 md:p-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-white transition-colors z-10"
          >
            <IconClose />
          </button>

          {existingReview && !isEditingReview ? (
            <ReviewReadOnly review={existingReview} song={song} onEdit={() => setIsEditingReview(true)} />
          ) : (
            <>
              {!existingReview && !isEditingReview && (
                <SongInfo 
                  song={song}
                  ranking={ranking}
                  onCreateReview={() => setIsEditingReview(true)}
                  onShowReviews={() => setReviewListOpen(true)}
                />
              )}

              {(isEditingReview || (!existingReview && isEditingReview)) && (
                <ReviewForm song={song} existingReview={existingReview} onSubmit={handleSave} onCancel={() => setIsEditingReview(false)} />
              )}
            </>
          )}
        </div>

        {/* MODAL de lista de reseñas */}
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
