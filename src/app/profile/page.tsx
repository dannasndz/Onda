// app/profile/page.tsx
'use client'

import { useEffect, useState } from 'react';
import Navbar from "@/components/ui/navbar";

export default function Profile() {
  const artistId = '1vCWHaC5f2uS3yhpwWbIA6'; // ID de Avicii
  const [artistData, setArtistData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArtistData() {
      try {
        console.log('Fetching artist data...');
        const response = await fetch(`/api/spotify/artist/${artistId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Artist data:', data);
        setArtistData(data);
      } catch (err: any) {
        console.error('Error:', err);
        setError(err.message);
      }
    }

    fetchArtistData();
  }, [artistId]);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl text-white justify-content">PERFIL</h1>
      {error && <p className="text-red-500">{error}</p>}
      {artistData ? (
        <div>
          <h2>{artistData.name}</h2>
          <p>{artistData.genres.join(', ')}</p>
          <img src={artistData.images[0]?.url} alt={artistData.name} width={200} />
        </div>
      ) : (
        <p>Cargando datos del artista...</p>
      )}
    </div>
  );
}
