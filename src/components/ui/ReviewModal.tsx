'use client';

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Song {
    name: string;
    artist: string;
    album?: string | null;
    genre?: string;
    coverUrl?: string;
    tipo: 'cancion' | 'album' | 'otro';
}

interface Review {
    id: string;
    titulo: string;
    contenido: string;
    estrellas: number;
}

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: Song | null;
}

export default function ReviewModal({ isOpen, onClose, song }: ReviewModalProps) {
    const { data: session } = useSession();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [existingReview, setExistingReview] = useState<Review | null>(null);

    useEffect(() => {
        const fetchReview = async () => {
            if (song && session?.user) {
                const res = await fetch(`/api/review?name=${encodeURIComponent(song.name)}&artist=${encodeURIComponent(song.artist)}&tipo=${song.tipo}`);
                const data = await res.json();

                if (res.ok && data) {
                    setExistingReview(data);
                    setTitle(data.titulo || '');
                    setContent(data.contenido || '');
                    setRating(data.estrellas || 0);
                    setCharCount(data.contenido?.length || 0);
                } else {
                    setExistingReview(null);
                    setTitle('');
                    setContent('');
                    setRating(0);
                    setCharCount(0);
                }
            }
        };

        fetchReview();
    }, [song, session]);



    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        if (text.length <= 500) {
            setContent(text);
            setCharCount(text.length);
        }
    };

    const handleSubmit = async () => {
        if (!song || !session?.user) return;

        try {
            const reviewData = {
                titulo: title,
                contenido: content,
                estrellas: rating,
                song: {
                    name: song.name,
                    artist: song.artist,
                    album: song.album,
                    genre: song.genre,
                    coverUrl: song.coverUrl,
                    tipo: song.tipo,
                },
            };

            const url = existingReview ? `/api/review/${existingReview.id}` : '/api/review';
            const method = existingReview ? 'PUT' : 'POST';
            const body = existingReview
                ? JSON.stringify({ titulo: title, contenido: content, estrellas: rating })
                : JSON.stringify(reviewData);

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body,
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error('Error response:', errorData);
                throw new Error('Error al guardar review');
            }

            onClose();
        } catch (error) {
            console.error('Error al guardar review:', error);
        }
    };


    const renderStars = () => {
        return (
            <div className="flex flex-col items-center">
                <p className="text-sm text-gray-400 mb-1">Tu calificación</p>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setRating(i)}
                            className={`text-4xl ${i <= rating ? 'text-yellow-400' : 'text-gray-700'}`}
                        >
                            ★
                        </button>
                    ))}
                </div>
                {rating > 0 && <p className="text-sm text-yellow-400 mt-1">{rating} de 5 estrellas</p>}
            </div>
        );
    };

    if (!isOpen || !song) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black/70" onClick={onClose} />
                <div className="relative bg-slate-900 p-6 rounded-xl w-full max-w-3xl mx-4 text-white">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Info recomendación */}
                        <div className="md:w-1/3 flex flex-col items-center">
                            <img
                                src={song.coverUrl || '/no-cover.png'}
                                alt="cover"
                                className="w-56 h-56 object-cover rounded shadow"
                            />
                            <div className="mt-4 w-full space-y-1">
                                <div><strong>Nombre:</strong> {song.name}</div>
                                <div><strong>Artista:</strong> {song.artist}</div>
                                {song.tipo === 'cancion' && song.album && <div><strong>Álbum:</strong> {song.album}</div>}
                                <div><strong>Género:</strong> {song.genre || 'Desconocido'}</div>
                            </div>
                            <div className="mt-4">{renderStars()}</div>
                        </div>

                        {/* review */}
                        <div className="md:w-2/3">
                            <label className="block text-lg mb-2">Título</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Escribe un título..."
                                className="w-full p-2 rounded bg-slate-800 border border-gray-600"
                            />
                            <label className="block text-lg mt-4 mb-2">Contenido</label>
                            <textarea
                                value={content}
                                onChange={handleContentChange}
                                placeholder="¿Qué opinas?"
                                className="w-full h-40 p-2 rounded bg-slate-800 border border-gray-600"
                            />
                            <div className="text-right text-sm text-gray-400">{charCount}/500</div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={onClose} className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-800">Cancelar</button>
                                <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
                                    {existingReview ? 'Actualizar' : 'Publicar'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
