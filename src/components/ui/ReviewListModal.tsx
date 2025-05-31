'use client';

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { RatingProm } from '@/components/ui/ratingProm';
import { IconClose } from './icons';

interface Review {
    id: string;
    titulo: string;
    estrellas: number;
    contenido: string;
    createdAt?: string;
    user: {
        name: string | null;
    };
}

// Función para validar y sanitizar cadenas
const sanitizeString = (str: string | null | undefined): string => {
    if (!str || typeof str !== 'string') return 'Sin información';
    return str.trim() || 'Sin información';
};

// Función para formatear fecha
const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return 'Fecha no disponible';
    try {
        return new Date(dateString).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch {
        return 'Fecha no disponible';
    }
};

// Función para truncar texto
const truncateText = (text: string, maxLength: number = 150): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
};

export default function ReviewListModal({
    isOpen,
    onClose,
    name,
    artist,
    tipo,
}: {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    artist: string;
    tipo: 'cancion' | 'album' | 'otro';
}) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (!isOpen) {
            setReviews([]);
            setLoading(true);
            setError(null);
            setExpandedReviews(new Set());
            return;
        }

        async function fetchReviews() {
            setLoading(true);
            setError(null);
            setExpandedReviews(new Set());  
            
            try {
                const sanitizedName = sanitizeString(name);
                const sanitizedArtist = sanitizeString(artist);
                
                if (sanitizedName === 'Sin información' || sanitizedArtist === 'Sin información') {
                    throw new Error('Información de la obra incompleta');
                }

                const res = await fetch(
                    `/api/review/obra?name=${encodeURIComponent(sanitizedName)}&artist=${encodeURIComponent(sanitizedArtist)}&tipo=${tipo}`
                );
                
                if (!res.ok) {
                    throw new Error(`Error del servidor: ${res.status}`);
                }

                const text = await res.text();
                const data = text ? JSON.parse(text) : [];

                const sanitizedReviews = data.map((review: any) => ({
                    ...review,
                    titulo: sanitizeString(review.titulo),
                    contenido: sanitizeString(review.contenido),
                    user: {
                        name: sanitizeString(review.user?.name) || 'Usuario anónimo'
                    }
                }));

                setReviews(sanitizedReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setError(error instanceof Error ? error.message : 'Error desconocido');
                setReviews([]);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, [isOpen, name, artist, tipo]);

    const toggleExpanded = (reviewId: string) => {
        setExpandedReviews(prev => {
            const newSet = new Set(prev);
            if (newSet.has(reviewId)) {
                newSet.delete(reviewId);
            } else {
                newSet.add(reviewId);
            }
            return newSet;
        });
    };

    const handleClose = () => {
        setExpandedReviews(new Set());
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
            <div 
                className="fixed inset-0 bg-black/30 backdrop-blur-sm" 
                aria-hidden="true" 
            />
            
            <div className="fixed inset-0 flex items-start justify-center pt-4 pb-4">
                <Dialog.Panel className="relative bg-[#1A1D2E] text-white rounded-xl shadow-[0_0px_30px_rgba(72,80,111,0.50)] border border-[#191c2c8d] w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-4 my-auto max-h-[calc(100vh-2rem)] overflow-hidden">
                    
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#191c2c8d]">
                        <div className="flex-1 pr-4">
                            <Dialog.Title className="text-xl sm:text-2xl font-semibold text-white mb-1">
                                Reseñas de la comunidad
                            </Dialog.Title>
                            <p className="text-sm sm:text-base text-gray-400">
                                {sanitizeString(name)} • {sanitizeString(artist)}
                            </p>
                        </div>
                        
                        <button
                            onClick={handleClose}
                            className="text-gray-400 hover:text-white transition-colors p-2 -mr-2"
                        >
                            <IconClose />
                        </button>
                    </div>

                    <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh]">
                        {loading ? (
                            <div className="flex items-center justify-center py-8">
                                <div className="flex items-center space-x-3">
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-400"></div>
                                    <span className="text-gray-300">Cargando reseñas...</span>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="text-center py-8">
                                <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-4 border border-red-600/30">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-red-200 font-medium">Error al cargar reseñas</p>
                                    </div>
                                    <p className="text-red-300 text-sm">{error}</p>
                                </div>
                            </div>
                        ) : reviews.length === 0 ? (
                            <div className="text-center py-8">
                                <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-amber-600/30">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                        <p className="text-amber-200 font-medium text-lg">¡Sé el primero!</p>
                                    </div>
                                    <p className="text-amber-300 text-sm">
                                        Aún no hay reseñas para esta obra. ¡Comparte tu opinión y sé el primero en dejar una reseña!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {reviews.map((review, index) => (
                                    <div 
                                        key={review.id || index} 
                                        className="bg-[#232736] border border-[#2e3354] rounded-xl p-4 sm:p-5 hover:bg-[#2a2f47] transition-colors duration-200"
                                    >
                                        {/* Review Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-semibold text-sm sm:text-base">
                                                        {review.user.name?.charAt(0)?.toUpperCase() || 'U'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium text-sm sm:text-base">
                                                        {review.user.name}
                                                    </p>
                                                    <p className="text-gray-400 text-xs sm:text-sm">
                                                        {formatDate(review.createdAt)}
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-2">
                                                <RatingProm value={review.estrellas} />
                                                <span className="text-white font-semibold text-sm">
                                                    {review.estrellas.toFixed(1)}
                                                </span>
                                            </div>
                                        </div>

                                        {review.titulo && review.titulo !== 'Sin información' && (
                                            <h4 className="text-white font-semibold text-sm sm:text-base mb-2 break-words">
                                                {review.titulo}
                                            </h4>
                                        )}

                                        <div className="text-gray-300 text-sm sm:text-base leading-relaxed break-words whitespace-pre-wrap">
                                            {(() => {
                                                const isExpanded = expandedReviews.has(review.id);
                                                const shouldTruncate = review.contenido.length > 150;
                                                const displayText = isExpanded || !shouldTruncate 
                                                    ? review.contenido 
                                                    : truncateText(review.contenido);
                                                
                                                return (
                                                    <>
                                                        <p>{displayText}</p>
                                                        {shouldTruncate && (
                                                            <button
                                                                onClick={() => toggleExpanded(review.id)}
                                                                className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                                                            >
                                                                {isExpanded ? (
                                                                    <>
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                                        </svg>
                                                                        Mostrar menos
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                        Mostrar más
                                                                    </>
                                                                )}
                                                            </button>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between p-4 sm:p-6 border-t border-[#191c2c8d] bg-[#1A1D2E]/50">
                        <p className="text-gray-400 text-xs sm:text-sm">
                            {reviews.length > 0 ? `${reviews.length} reseña${reviews.length !== 1 ? 's' : ''} encontrada${reviews.length !== 1 ? 's' : ''}` : ''}
                        </p>
                        
                        <button
                            onClick={handleClose}
                            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-white text-sm sm:text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        >
                            Cerrar
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
