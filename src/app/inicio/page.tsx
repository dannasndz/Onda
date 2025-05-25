'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Masonry from 'react-masonry-css';
import { useRecomendaciones } from "@/hooks/useRecomendaciones";

import Navbar from "@/components/ui/navbar";
import SearchBar from "@/components/ui/searchBar";
import RecomendacionCard from "@/components/ui/RecomendacionCard";
import SkeletonCard from "@/components/ui/SkeletonCard";
import Loader from "@/components/ui/Loader";
import { useEffect, useState } from "react";
import { ReviewModal } from "@/components/ui/ReviewModal";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Inicio() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);

  type Song = {
    coverUrl: string;
    name: string;
    artist: string;
    genre: string;
    album?: string | null;
    tipo: 'cancion' | 'album' | 'otro';
  };

  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleCardClick = (item: any) => {
    const normalizedSong: Song = {
      coverUrl: item.coverUrl || item.imagen || '',
      name: item.name || item.nombre || 'Sin nombre',
      artist: item.artist || item.artista || 'Artista desconocido',
      genre: item.genre || item.genero || 'Género desconocido',
      album: item.album || null,
      tipo: item.tipo || 'otro',
    };

    setSelectedSong(normalizedSong);
    setModalOpen(true);
  };



  const closeModal = () => {
    setModalOpen(false);
    setSelectedSong(null);
  };

  const {
    recomendaciones,
    isLoading,
    isSearching,
    hasMore,
    searchQuery,
    handleSearch,
    clearSearch,
    loaderRef,
  } = useRecomendaciones(status);

  const breakpointColumnsObj = {
    default: 5,
    1280: 3,
    1024: 2,
    640: 1,
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/registro");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-white p-10">Cargando...</div>;
  }

  if (status === "unauthenticated") {
    return null; 
  }

  return (
    <div className="flex min-h-screen  text-white">
      <nav
        className="fixed top-0 left-0 h-screen w-64  overflow-y-auto z-20"
      >
        <Navbar />
      </nav>

      {/* Contenedor del contenido principal */}
      <main className="  flex-1 flex flex-col pt-6 px-4 sm:px-6 max-w-full
      overflow-y-auto min-h-screen
      md:ml-25
      mt-16 md:mt-0">
        {/* Search bar */}
        <div className="mb-6">
          <SearchBar
            onSearch={handleSearch}
            query={searchQuery}
            onClear={clearSearch}
          />
        </div>
{/* 
        {isSearching && (
          <div className="mb-4">
            <button
              onClick={clearSearch}
              className="px-3 py-1 bg-violet-700 text-sm text-white rounded-full hover:bg-violet-800 transition cursor-pointer"
            >
              Volver
            </button>
          </div>
        )} */}

        {/* Grid principal tipo masonry */}
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-5"
            columnClassName="masonry-column"
          >
            {recomendaciones.map((item, index) => (
              <RecomendacionCard key={index} item={item} onClick={handleCardClick} />
            ))}

            {isLoading &&
              Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard key={`skeleton-${index}`} />
              ))}
          </Masonry>
        </div>

        {/* Modal de reseña */}
        {selectedSong && (
          <ReviewModal isOpen={isModalOpen} onClose={closeModal} song={selectedSong} />
        )}

        {/* Loader infinito */}
        <Loader loaderRef={loaderRef} hasMore={hasMore} />
      </main>
    </div>

  );
}

