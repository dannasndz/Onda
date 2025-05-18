export interface Song {
  album: any;
  name: string;
  artist: string;
  tipo: string;
  coverUrl?: string;
}

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
