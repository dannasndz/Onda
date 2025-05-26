import { useState, useEffect, useCallback } from 'react';
import { Song, Review } from '@/components/ui/types';

interface ReviewStates {
  existingReview: Review | null;
  isEditingReview: boolean;
  ranking: { promedio: number | null; cantidad?: number; mensaje?: string } | null;
  isReviewListOpen: boolean;
  loading: boolean;
  error: string | null;
}

export const useReviewStates = (song: Song | null, isOpen: boolean, session: any) => {
  const [states, setStates] = useState<ReviewStates>({
    existingReview: null,
    isEditingReview: false,
    ranking: null,
    isReviewListOpen: false,
    loading: false,
    error: null,
  });

  const resetStates = useCallback(() => {
    setStates({
      existingReview: null,
      isEditingReview: false,
      ranking: null,
      isReviewListOpen: false,
      loading: false,
      error: null,
    });
  }, []);

  const updateState = useCallback((updates: Partial<ReviewStates>) => {
    setStates(prev => ({ ...prev, ...updates }));
  }, []);

  const fetchReview = useCallback(async () => {
    if (!song || !session?.user) return;
    
    updateState({ loading: true, error: null });
    
    try {
      const res = await fetch(
        `/api/review?name=${encodeURIComponent(song.name)}&artist=${encodeURIComponent(song.artist)}&tipo=${song.tipo}`
      );
      
      if (!res.ok) {
        updateState({ existingReview: null, loading: false });
        return;
      }
      
      const data = await res.json();
      
      if (data?.id) {
        updateState({ 
          existingReview: data, 
          isEditingReview: false,
          loading: false 
        });
      } else {
        updateState({ 
          existingReview: null, 
          isEditingReview: false,
          loading: false 
        });
      }
    } catch (error) {
      updateState({ 
        existingReview: null, 
        isEditingReview: false,
        loading: false,
        error: 'Error al cargar la reseña'
      });
    }
  }, [song, session, updateState]);

  const fetchRanking = useCallback(async () => {
    if (!song) return;
    
    try {
      const res = await fetch(
        `/api/review/ranking?name=${encodeURIComponent(song.name)}&artist=${encodeURIComponent(song.artist)}&tipo=${song.tipo}`
      );
      
      if (!res.ok) {
        updateState({ ranking: null });
        return;
      }
      
      const data = await res.json();
      updateState({ ranking: data });
    } catch (error) {
      updateState({ ranking: null });
    }
  }, [song, updateState]);

  useEffect(() => {
    if (isOpen && song) {
      // Resetear estados primero
      resetStates();
      // Luego cargar nuevos datos
      fetchReview();
      fetchRanking();
    } else if (!isOpen) {
      resetStates();
    }
  }, [isOpen, song, session, resetStates, fetchReview, fetchRanking]);

  return {
    ...states,
    updateState,
    resetStates,
    refetchReview: fetchReview,
    refetchRanking: fetchRanking,
  };
}; 