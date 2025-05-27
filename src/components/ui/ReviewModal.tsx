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
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    const reset = () => {
      setExistingReview(null);
      setIsEditingReview(false);
      setRanking(null);
      setIsLoadingData(false);
    };

    async function fetchData() {
      if (!song) return reset();
      
      setIsLoadingData(true);
      
      try {
        const [reviewPromise, rankingPromise] = await Promise.allSettled([
          // Fetch review solo si hay sesión
          session?.user ? fetch(
            `/api/review?name=${encodeURIComponent(song.name)}&artist=${encodeURIComponent(song.artist)}&tipo=${song.tipo}`
          ) : Promise.resolve(null),
          fetch(
            `/api/review/ranking?name=${encodeURIComponent(song.name)}&artist=${encodeURIComponent(song.artist)}&tipo=${song.tipo}`
          )
        ]);

        // Procesar resultado de review
        if (reviewPromise.status === 'fulfilled' && reviewPromise.value && session?.user) {
          const reviewRes = reviewPromise.value;
          if (reviewRes.ok) {
            const reviewData = await reviewRes.json();
            if (reviewData?.id) {
              setExistingReview(reviewData);
              setIsEditingReview(false);
            }
          }
        }

        // Procesar resultado de ranking
        if (rankingPromise.status === 'fulfilled') {
          const rankingRes = rankingPromise.value;
          if (rankingRes.ok) {
            const rankingData = await rankingRes.json();
            setRanking(rankingData);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoadingData(false);
      }
    }

    if (isOpen && song) {
      fetchData();
    } else {
      reset();
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

  const showReviewReadOnly = existingReview && !isEditingReview;
  const showSongInfo = !existingReview && !isEditingReview;
  const showReviewForm = isEditingReview;

  if (!isOpen || !song) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center pt-4 pb-4" onClick={onClose}>
      <div
        className="relative bg-[#1A1D2E] text-white rounded-xl shadow-[0_0px_30px_rgba(72,80,111,0.50)] border border-[#191c2c8d] w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-4 my-auto transform transition-all max-h-[calc(100vh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 md:p-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-white transition-colors z-10"
          >
            <IconClose />
          </button>

          {/* Estado de carga inicial */}
          {isLoadingData && (
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400"></div>
                <span className="text-gray-300 text-lg">Cargando información...</span>
              </div>
            </div>
          )}

          <div className={`${showReviewReadOnly && !isLoadingData ? 'block' : 'hidden'}`}>
            {existingReview && (
              <ReviewReadOnly 
                review={existingReview} 
                song={song} 
                onEdit={() => setIsEditingReview(true)} 
              />
            )}
          </div>

          <div className={`${showSongInfo && !isLoadingData ? 'block' : 'hidden'}`}>
            <SongInfo 
              song={song}
              ranking={ranking}
              onCreateReview={() => setIsEditingReview(true)}
              onShowReviews={() => setReviewListOpen(true)}
            />
          </div>

          <div className={`${showReviewForm && !isLoadingData ? 'block' : 'hidden'}`}>
            <ReviewForm 
              song={song} 
              existingReview={existingReview} 
              onSubmit={handleSave} 
              onCancel={() => setIsEditingReview(false)} 
            />
          </div>
        </div>

        {/* MODAL de lista de reseñas -}}} */}
        <ReviewListModal
          isOpen={isReviewListOpen}
          onClose={() => setReviewListOpen(false)}
          name={song?.name || ''}
          artist={song?.artist || ''}
          tipo={song?.tipo || 'otro'}
        />
      </div>
    </div>
  );
};
