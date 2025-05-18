export type Song = {
  coverUrl: string;
  name: string;
  artist: string;
  genre: string;
  album?: string | null;
  tipo: 'cancion' | 'album' | 'otro';
};


export interface Review {
  id: string;
  titulo: string;
  contenido: string;
  estrellas: number;
  userId: string;
  songId?: string;
  createdAt?: string;
  updatedAt?: string;
}
