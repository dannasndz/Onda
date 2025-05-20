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
import { useState } from "react";
import { ReviewModal } from "@/components/ui/ReviewModal";

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

  if (status === "loading") {
    return <div className="text-white p-10">Cargando...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/auth/registro");
    return null;
  }

  return (
    <div className="p-4 sm:p-6 min-h-screen text-white bg-transparent overflow-x-hidden ml-20">
      {/* Search Bar */}
      <div className="px-4 sm:px-6  lg:mr-[70px] max-w-full">
        <SearchBar
          onSearch={handleSearch}
          query={searchQuery}
          onClear={clearSearch}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {isSearching && (
        <div className="px-4 sm:px-6 mt-4 lg:ml-[80px]">
          <button
            onClick={clearSearch}
            className="mb-4 px-3 py-1 bg-violet-700 text-sm text-white rounded-full hover:bg-violet-800 transition"
          >
            Volver
          </button>
        </div>
      )}

      {/* Grid principal */}
      <div className="px-4 sm:px-6  lg:mr-[70px] max-w-full">
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

        {selectedSong && (
          <ReviewModal isOpen={isModalOpen} onClose={closeModal} song={selectedSong} />
        )}
        <Loader loaderRef={loaderRef} hasMore={hasMore} />
      </div>
    </div>

  );
}
