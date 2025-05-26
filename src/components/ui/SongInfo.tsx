'use client';
import React from 'react';
import { Song } from './types';
import { RatingProm } from '@/components/ui/ratingProm';

interface SongInfoProps {
  song: Song;
  ranking?: { promedio: number | null; cantidad?: number; mensaje?: string } | null;
  onCreateReview?: () => void;
  onShowReviews?: () => void;
  showCreateButton?: boolean;
  showMotivationalMessage?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const SongInfo: React.FC<SongInfoProps> = ({ 
  song, 
  ranking, 
  onCreateReview, 
  onShowReviews,
  showCreateButton = true,
  showMotivationalMessage = true,
  children,
  className = ""
}) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 md:gap-8 ${className}`}>
      <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col items-center space-y-4 flex-shrink-0">
        <img
          src={song.coverUrl || '/placeholder-image.png'}
          alt={`Cover for ${song.name}`}
          className="w-full h-auto object-cover rounded-lg shadow-lg aspect-square max-w-xs md:max-w-full"
        />
      </div>

      <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col space-y-6 justify-center text-center md:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-1">{song.name}</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4">{song.artist}</p>
          {song.album && (
            <p className="text-sm sm:text-lg text-gray-400 mb-4">Álbum: {song.album}</p>
          )}
          
          {ranking && (
            <div className="mb-6">
              {ranking.promedio !== null ? (
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <span className="text-sm font-medium text-slate-300">
                        Calificación de la comunidad:
                      </span>
                      <div className="flex items-center gap-2">
                        <RatingProm value={ranking.promedio} />
                        <span className="text-lg font-semibold text-white">
                          {ranking.promedio.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    
                    {onShowReviews && ranking.cantidad && ranking.cantidad > 0 && (
                      <button
                        onClick={onShowReviews}
                        className="group flex items-center gap-2 justify-center md:justify-start text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                      >
                        <svg 
                          className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium underline decoration-dotted underline-offset-2">
                          Ver {ranking.cantidad} reseña{ranking.cantidad !== 1 ? 's' : ''} de la comunidad
                        </span>
                        <svg 
                          className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}

                    {/* {ranking.cantidad === 0 && (
                      <div className="text-center md:text-left">
                        <p className="text-sm text-gray-400">
                          {ranking.cantidad} calificaciones
                        </p>
                      </div>
                    )} */}
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-4 border border-amber-600/30">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-amber-200 font-medium">{ranking.mensaje}</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {showMotivationalMessage && (
            <div className=" bg-gray-600/40  backdrop-blur-sm rounded-lg p-4 border border-black/5">
              <p className="text-slate-300 text-sm leading-relaxed">
                 <span className="font-medium">¡Tu opinión importa!</span> Comparte tu experiencia y ayuda a otros a descubrir música increíble.
              </p>
            </div>
          )}

          {/* Contenido personalizado */}
          {children}
        </div>

        {showCreateButton && onCreateReview && (
          <button
            onClick={onCreateReview}
            className="group relative overflow-hidden text-center cursor-pointer px-6 py-3 rounded-xl text-lg sm:text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg hover:shadow-black/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Crear reseña
            </span>
            <div className="absolute bg-gradient-to-r from-white/0 via-white/80 to-white/0 "></div>
          </button>
        )}
      </div>
    </div>
  );
}; 