'use client';
import React, { useEffect, useRef } from 'react';
import { ReviewModal } from './ReviewModal';
import { Song } from './types';

interface ReviewModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song | null;
}

export const ReviewModalWrapper: React.FC<ReviewModalWrapperProps> = ({ 
  isOpen, 
  onClose, 
  song 
}) => {
  const previousSongRef = useRef<Song | null>(null);
  const [key, setKey] = React.useState(0);

  useEffect(() => {
    if (song && previousSongRef.current && 
        (song.name !== previousSongRef.current.name || 
         song.artist !== previousSongRef.current.artist ||
         song.tipo !== previousSongRef.current.tipo)) {
      setKey(prev => prev + 1);
    }
    previousSongRef.current = song;
  }, [song]);

  useEffect(() => {
    if (!isOpen) {
      setKey(prev => prev + 1);
    }
  }, [isOpen]);

  if (!song) return null;

  return (
    <ReviewModal
      key={key}
      isOpen={isOpen}
      onClose={onClose}
      song={song}
    />
  );
}; 