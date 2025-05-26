'use client';
import React, { useState, useEffect } from 'react';
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
  const [titleCharCount, setTitleCharCount] = useState(existingReview?.titulo.length || 0);

  // Actualizar campos cuando existingReview cambie
  useEffect(() => {
    if (existingReview) {
      setTitle(existingReview.titulo || '');
      setContent(existingReview.contenido || '');
      setRating(existingReview.estrellas || 0);
      setCharCount(existingReview.contenido?.length || 0);
      setTitleCharCount(existingReview.titulo?.length || 0);
    } else {
      setTitle('');
      setContent('');
      setRating(0);
      setCharCount(0);
      setTitleCharCount(0);
    }
  }, [existingReview]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setContent(text);
      setCharCount(text.length);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (text.length <= 50) {
      setTitle(text);
      setTitleCharCount(text.length);
    }
  };

  const handleSubmit = () => {
    onSubmit({ title, content, rating });
  };

  return (
    <div className="flex flex-col mt-5 md:flex-row gap-6 md:gap-8">
      {/* Imagen + estrellas */}
      <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col items-center space-y-4 flex-shrink-0">
        <img
          src={song.coverUrl || '/placeholder-music.png'}
          alt={`Cover for ${song.name}`}
          className="w-full max-w-[250px] sm:max-w-xs md:max-w-full aspect-square object-cover rounded-lg shadow-lg"
        />
        <StarRating rating={rating} onRate={setRating} />
      </div>

      {/* Contenido del formulario */}
      <div className="w-full md:w-3/5 lg:w-2/3  flex flex-col space-y-4">
        {/* Título y artista */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-1">
            {song.name}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-3">{song.artist}</p>
        </div>

        {/* Campos del formulario */}
        <div className="flex-grow flex flex-col space-y-3">
          {/* Título */}
          <div>
            <label htmlFor="reviewTitle" className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
              Título de la reseña
            </label>
            <input
              id="reviewTitle"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Escribe un título..."
              className="w-full p-2.5 rounded-md bg-[#353B52] border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-sm sm:text-base"
            />
            <div className="text-right text-xs text-gray-500 mt-1">{titleCharCount}/50</div>
          </div>

          {/* Contenido */}
          <div className="flex-grow flex  flex-col">
            <textarea
              id="reviewContent"
              value={content}
              onChange={handleContentChange}
              placeholder="Escribe lo que piensas sobre esto..."
              className="w-full flex-grow p-2.5 rounded-md bg-[#353B52] border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none resize-none text-sm sm:text-base"
              rows={6}
            />
            <div className="text-right text-xs text-gray-500 mt-1">{charCount}/500</div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3">
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-600 text-sm font-medium text-gray-300 hover:bg-gray-700/50 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!content.trim() || !title.trim() || rating === 0}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer "
          >
            {existingReview ? 'Actualizar' : 'Publicar'}
          </button>
        </div>
      </div>
    </div>

  );
};
