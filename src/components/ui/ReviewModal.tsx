'use client';

import { useState, Fragment } from 'react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: {
    id: number;
    name: string;
    artist?: string;
    album?: string;
    year?: string;
    duration?: string;
    genre?: string;
    coverUrl?: string;
  } | null;
}

export default function ReviewModal({ isOpen, onClose, song }: ReviewModalProps) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [charCount, setCharCount] = useState(0);
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setContent(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = async () => {
    if (!song) return;
    
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
          titulo: title,
          contenido: content,
          estrellas: rating,
          cancionId: song.id,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      setContent('');
      setTitle('');
      setRating(0);
      onClose();
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
    }
  };
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => setRating(i)}
          className={`text-4xl ${i <= rating ? 'text-blue-500' : 'text-blue-900 opacity-70'}`}
        >
          ★
        </button>
      );
    }
    return stars;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/70" onClick={onClose} />
        
        {/* Modal */}
        <div className="relative bg-slate-900 p-6 rounded-xl w-full max-w-3xl mx-4 text-white">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Album Cover and Song Info */}
            <div className="flex flex-col items-center md:w-1/3">
              {song?.coverUrl ? (
                <img src={song.coverUrl} alt={`${song.album} cover`} className="w-56 h-56 object-cover rounded-md" />
              ) : (
                <div className="w-56 h-56 bg-gray-800 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">No cover</span>
                </div>
              )}
              
              <h2 className="text-2xl font-bold mt-4">{song?.name || 'Loading...'}</h2>
              <p className="text-xl text-gray-300">{song?.artist || ''}</p>
              
              <div className="flex items-center mt-2 text-sm text-gray-400">
                <span>{song?.album || ''} {song?.year ? `(${song.year})` : ''}</span>
              </div>
              
              <div className="flex items-center mt-1 text-sm text-gray-400">
                <span>{song?.duration || ''}</span>
              </div>
              
              <div className="flex items-center mt-1 text-sm text-gray-400">
                <span>{song?.genre || ''}</span>
              </div>
              
              <div className="flex mt-4">
                {renderStars()}
              </div>
            </div>
            
            {/* Review Form */}
            <div className="md:w-2/3">
              <div className="mb-4">
                <label htmlFor="review-title" className="block text-lg mb-2">
                  Título de la reseña
                </label>
                <input
                  id="review-title"
                  type="text"
                  className="w-full p-3 bg-slate-800 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="review-content" className="block text-lg mb-2">
                  Escribe una reseña sobre esta canción...
                </label>
                <textarea
                  id="review-content"
                  className="w-full p-3 h-40 bg-slate-800 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={content}
                  onChange={handleContentChange}
                />
                <div className="text-right text-sm text-gray-400">
                  {charCount}/500
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  onClick={onClose} 
                  className="px-4 py-2 bg-transparent border border-gray-600 text-white hover:bg-gray-800 rounded-md"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleSubmit} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}