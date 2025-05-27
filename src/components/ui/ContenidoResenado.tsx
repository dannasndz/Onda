import React, { useState } from 'react';
import { Review, Song } from './types';
import { Edit, Trash2, MoreVertical } from 'lucide-react';

interface ReviewReadOnlyProps {
  review: Review;
  song: Song;
  onEdit: () => void;
  onDelete?: (reviewId: string) => void;
}

export const ReviewReadOnly: React.FC<ReviewReadOnlyProps> = ({ review, song, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const fechaCreacion = review.createdAt
    ? new Date(review.createdAt).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : 'Fecha no disponible';

    const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
    setShowMenu(false);
  };

  const handleConfirmDelete = async () => {
    if (!onDelete || isDeleting) return;
    
    setIsDeleting(true);
    try {
      await onDelete(review.id);
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error('Error al eliminar la reseña:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const handleEdit = () => {
    console.log('Edit button clicked'); // Debug
    onEdit();
    setShowMenu(false);
  };

  const toggleMenu = () => {
    console.log('Menu toggle clicked, current state:', showMenu); // Debug
    setShowMenu(!showMenu);
  };

  // Función para truncar texto largo y manejar palabras sin espacios
  const truncateText = (text: string, maxLength: number = 300) => {
    if (!text) return '';

    if (text.length <= maxLength) return text;

    if (isExpanded) return text;

    return text.substring(0, maxLength) + '...';
  };

  const hasLongWords = (text: string) => {
    const words = text.split(/\s+/);
    return words.some(word => word.length > 50);
  };

  const contenidoTruncado = truncateText(review.contenido);
  const tituloTruncado = truncateText(review.titulo, 100);
  const needsExpansion = review.contenido && review.contenido.length > 300;

  return (
    <div className="group relative w-full bg-[#1A1D2E]/90 backdrop-blur-sm border border-[#2a2d4a]/50 hover:border-[#2a2d4a]/80 rounded-xl sm:rounded-2xl transition-all duration-200">
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-[#2a2d4a] hover:bg-[#3a3d5a] text-gray-300 hover:text-white transition-all duration-200 shadow-lg cursor-pointer"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          {/* Menú desplegable */}
          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowMenu(false)}
              />

              <div className="absolute right-0 top-full mt-2 z-20 bg-[#232736] border border-[#2a2d4a] rounded-lg shadow-xl min-w-[140px]">
                <div className="flex flex-col p-1">
                  <button
                    onClick={handleEdit}
                    className="flex flex-row items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#2a2d4a]/60 rounded transition-colors duration-200 w-full cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="truncate">Editar</span>
                  </button>

                  {onDelete && (
                    <button
                      onClick={handleDeleteClick}
                      disabled={isDeleting}
                      className="flex flex-row items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors duration-200 disabled:opacity-50 w-full cursor-pointer"
                    >
                      <span className="truncate">
                        {isDeleting ? 'Eliminando...' : 'Eliminar'}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>


      <div className="p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Columna izquierda - Información de la canción */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-3 sm:gap-4 lg:w-72 xl:w-80 flex-shrink-0">
            <div className="relative group/image flex-shrink-0">
              <img
                src={song.coverUrl || '/placeholder-music.png'}
                alt={song.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-lg sm:rounded-xl object-cover shadow-lg ring-2 ring-[#2a2d4a]/30 group-hover/image:ring-cyan-500/30 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg sm:rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex-1 sm:ml-3 lg:ml-0 text-center sm:text-left lg:text-center min-w-0">
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 break-words hyphens-auto">
                {song.name}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-1 break-words">
                {song.artist}
              </p>

              <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-2 mb-2">
                <span className="px-2 py-0.5 sm:py-1 text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  {song.tipo}
                </span>
              </div>

              {song.album && (
                <p className="text-gray-400 text-xs sm:text-sm italic mb-2 break-words">
                  Álbum: {song.album}
                </p>
              )}

              {/* Rating */}
              <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-2">
                <div className="text-[#6C63FF] text-base sm:text-lg lg:text-xl">
                  {'★'.repeat(review.estrellas)}
                  <span className="text-gray-500">{'☆'.repeat(5 - review.estrellas)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Contenido de la reseña */}
          <div className="flex-1 bg-[#232736]/60 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-[#2a2d4a]/30 min-w-0">
            <div className="mb-3 sm:mb-4">
              <h4 className={`text-white text-base sm:text-lg lg:text-xl font-semibold mb-2 ${hasLongWords(review.titulo) ? 'break-all' : 'break-words'} hyphens-auto`}>
                {tituloTruncado}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                <span>Creada el {fechaCreacion}</span>
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className={`text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed ${hasLongWords(review.contenido) ? 'break-all' : 'break-words'} hyphens-auto whitespace-pre-wrap overflow-wrap-anywhere`}>
                {contenidoTruncado}
              </p>

              {/* Botón para expandir/contraer si el contenido es largo */}
              {needsExpansion && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-3 text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-colors duration-200 underline underline-offset-2"
                >
                  {isExpanded ? 'Ver menos' : 'Ver más'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación para eliminar */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1A1D2E] border border-[#2a2d4a] rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center">
              
              <h3 className="text-lg font-semibold text-white mb-2">
                Eliminar reseña
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                ¿Estás seguro de que quieres eliminar esta reseña de <span className="font-medium text-white">"{song.name}"</span>? 
                Esta acción no se puede deshacer.
              </p>
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleCancelDelete}
                  disabled={isDeleting}
                  className="px-4 py-2 text-sm font-medium text-gray-300 bg-[#2a2d4a] hover:bg-[#3a3d5a] rounded-lg transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                >
                  Cancelar
                </button>
                
                <button
                  onClick={handleConfirmDelete}
                  disabled={isDeleting}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                >
                  {isDeleting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Eliminando...
                    </>
                  ) : (
                    'Eliminar'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
