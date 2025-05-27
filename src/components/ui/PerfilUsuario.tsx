"use client";

import { usePerfil } from "@/hooks/usePerfil";
import { useResenasUsuario } from "@/hooks/useReviewsUsuario";
import { ReviewsList } from "./ReviewList";
import { useState } from "react";
import { ModalGeneros } from "./ModalGeneros";
import { User, Calendar, Star, Plus, Edit3, Settings, Music } from "lucide-react";
import { ReviewForm } from "./ReviewForm";
import { Review, Song } from "./types";
import { IconClose } from "./icons";

export default function PerfilUsuario() {
  const { perfil, loading: loadingPerfil } = usePerfil();
  const { reviews, songs, loading: loadingResenas, refreshReviews } = useResenasUsuario();
  const [mostrarModal, setMostrarModal] = useState(false);
  
  // Estados para el modal de edición
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [reviewToEdit, setReviewToEdit] = useState<Review | null>(null);
  const [songToEdit, setSongToEdit] = useState<Song | null>(null);

  if (loadingPerfil || loadingResenas) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          <div className="relative bg-[#1A1D2E]/80 backdrop-blur-sm border border-[#2a2d4a]/50 rounded-full p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-400/30 border-t-cyan-400"></div>
          </div>
        </div>
        <p className="text-gray-300 text-lg mt-6">Cargando tu perfil...</p>
      </div>
    );
  }

  if (!perfil) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-[#1A1D2E]/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Error al cargar</h3>
            <p className="text-gray-300">No se pudo cargar tu perfil. Intenta recargar la página.</p>
          </div>
        </div>
      </div>
    );
  }

  const fecha = new Date(perfil.miembroDesde).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleAgregarGenero = () => setMostrarModal(true);

  const handleGuardarGeneros = async ({
    actuales,
    gustaria,
  }: {
    actuales: number[];
    gustaria: number[];
  }) => {
    try {
      const res = await fetch("/api/usuarioGeneros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ actuales, gustaria }),
      });

      if (res.ok) {
        location.reload();
      } else {
        console.error("Error al guardar géneros", await res.json());
      }
    } catch (err) {
      console.error("Error agregando géneros", err);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Refrescar las reseñas después de eliminar
        await refreshReviews();
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Error al eliminar la reseña');
      }
    } catch (error) {
      console.error('Error eliminando reseña:', error);
      alert('Error al eliminar la reseña. Intenta de nuevo.');
      throw error;
    }
  };

  // Función para abrir el modal de edición
  const handleEditReview = (reviewId: string) => {
    const review = reviews.find(r => r.id === reviewId);
    if (!review) {
      alert('Reseña no encontrada');
      return;
    }

    // Crear objeto Song a partir de los datos de la review
    const song: Song = {
      name: String(review.name || ''),
      artist: String(review.artist || ''),
      album: String(review.album || ''),
      coverUrl: String(review.coverUrl || ''),
      genre: String(review.genre || ''),
      tipo: (review.tipo as 'cancion' | 'album' | 'otro') || 'cancion',
    };

    setReviewToEdit(review);
    setSongToEdit(song);
    setIsEditModalOpen(true);
  };

  // Función para cerrar el modal de edición
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setReviewToEdit(null);
    setSongToEdit(null);
  };

  // Función para guardar la reseña editada
  const handleSaveEditedReview = async ({ title, content, rating }: { title: string; content: string; rating: number }) => {
    if (!reviewToEdit) return;

    try {
      const payload = {
        titulo: title,
        contenido: content,
        estrellas: rating,
      };

      const response = await fetch(`/api/review/${reviewToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        handleCloseEditModal();
        // Refrescar las reseñas después de editar
        await refreshReviews();
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Error al actualizar la reseña');
      }
    } catch (error) {
      console.error('Error actualizando reseña:', error);
      alert('Error al actualizar la reseña. Intenta de nuevo.');
      throw error;
    }
  };

  return (
    <>
      <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto review-container">
          {/* Hero Section */}
          <div className="relative mb-6 sm:mb-8 lg:mb-12">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-8">
                {/* Avatar */}
                <div className="relative group flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#2a2d4a] to-[#1A1D2E] border-4 border-[#2a2d4a]/50 flex items-center justify-center shadow-2xl">
                    <User className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400" />
                  </div>
                </div>

                {/* Información del perfil */}
                <div className="flex-1 text-center lg:text-left w-full lg:w-auto">
                  <div className="mb-4 sm:mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-3">
                      {perfil.nombreUsuario}
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs sm:text-sm md:text-base">Miembro desde {fecha}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        <span className="text-xs sm:text-sm md:text-base">{perfil.totalResenas} reseñas</span>
                      </div>
                    </div>
                  </div>

                  {/* Sección de géneros */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Music className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        Géneros preferidos
                      </h3>
                      <button
                        onClick={handleAgregarGenero}
                        className="group relative p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200"
                        title="Agregar géneros"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 group-hover:text-white group-hover:rotate-90 transition-all duration-200" />
                      </button>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3">
                      {(perfil.generosPreferidos || []).length > 0 ? (
                        perfil.generosPreferidos.map((genero, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 hover:border-purple-400/50 transition-colors duration-200"
                          >
                            {genero}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500 text-xs sm:text-sm italic">
                          No has seleccionado géneros favoritos
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de reseñas */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-2xl"></div>
              <div className="relative bg-[#1A1D2E]/60 backdrop-blur-sm border border-[#2a2d4a]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Edit3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Mis Reseñas
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400">
                        Tus contribuciones a la comunidad musical
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <ReviewsList
                reviews={reviews}
                songs={Object.values(songs)}
                onEditReview={handleEditReview}
                onDeleteReview={handleDeleteReview}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal de géneros */}
      {mostrarModal && (
        <ModalGeneros
          generosUsuario={perfil.generosPreferidos}
          onClose={() => setMostrarModal(false)}
          onGuardar={handleGuardarGeneros} 
          tipo={"actual"} 
        />
      )}

      {/* Modal de edición de reseña */}
      {isEditModalOpen && reviewToEdit && songToEdit && (
        <div className="modal-no-scroll fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={handleCloseEditModal}>
          <div
            className="modal-no-scroll relative bg-[#1A1D2E] text-white rounded-xl shadow-[0_0px_30px_rgba(72,80,111,0.50)] border border-[#191c2c8d] w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-no-scroll p-4 sm:p-6 md:p-10 h-full">
              <button
                onClick={handleCloseEditModal}
                className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-white transition-colors z-10"
              >
                <IconClose />
              </button>

              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Editar Reseña
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  {songToEdit.name} • {songToEdit.artist}
                </p>
              </div>

              <ReviewForm 
                song={songToEdit} 
                existingReview={reviewToEdit} 
                onSubmit={handleSaveEditedReview} 
                onCancel={handleCloseEditModal} 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
