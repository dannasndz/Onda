'use client';
import React, { useState } from 'react';
import { StarRating } from './StarRating';
import { Review, Song } from './types';

interface ReviewFormProps {
  song: Song;
  existingReview: Review | null;
  onSubmit: (data: { title: string; content: string; rating: number }) => void;
  onCancel: () => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ song, existingReview, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(existingReview?.titulo || '');
  const [content, setContent] = useState(existingReview?.contenido || '');
  const [rating, setRating] = useState(existingReview?.estrellas || 0);
  const [charCount, setCharCount] = useState(existingReview?.contenido.length || 0);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setContent(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = () => {
    onSubmit({ title, content, rating });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 ">
      <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center space-y-4 flex-shrink-0">
        <img
          src={song.coverUrl || '/no-cover.png'}
          alt={`Cover for ${song.name}`}
          className="w-full h-auto object-cover rounded-lg shadow-lg aspect-square max-w-xs mx-auto md:max-w-full"
        />
        <StarRating rating={rating} onRate={setRating} />
      </div>

      <div className="md:w-3/5 lg:w-2/3 flex flex-col space-y-4">
        <div>
          <h2 className="text-5xl font-semibold text-white mb-0.5">{song.name}</h2>
          <p className="text-2xl text-gray-400 mb-3">{song.artist}</p>
        </div>

        <div className="flex-grow flex flex-col space-y-3">
          <div>
            <label htmlFor="reviewTitle" className="block text-base font-medium text-gray-300 mb-1">
              Título de la reseña
            </label>
            <input
              id="reviewTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Escribe un título..."
              className="w-full p-2.5 rounded-md bg-[#353B52] border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <textarea
              id="reviewContent"
              value={content}
              onChange={handleContentChange}
              placeholder="Escribe una reseña sobre esta canción..."
              className="w-full flex-grow p-2.5 rounded-md bg-[#353B52] border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none resize-none"
              rows={6}
            />
            <div className="text-right text-xs text-gray-500 mt-1">{charCount}/500</div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-3">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-lg border border-gray-600 text-sm font-medium text-gray-300 hover:bg-gray-700/50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!content.trim() || !title.trim() || rating === 0}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {existingReview ? 'Actualizar' : 'Publicar'}
          </button>
        </div>
      </div>
    </div>
  );
};
