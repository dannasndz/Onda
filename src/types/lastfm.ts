export interface LastFmImage {
    '#text': string;
    size: 'small' | 'medium' | 'large' | 'extralarge';
}

export interface TopArtistaLastFm {
    name: string;
    mbid: string;
    url: string;
    streamable: string;
    image: LastFmImage[];
    '@attr': {
        rank: string;
    };
}

export interface TopAlbumLastFm {
    name: string;
    mbid: string;
    url: string;
    artist: {
        name: string;
        mbid: string;
        url: string;
    };
    image: LastFmImage[];
    '@attr': {
        rank: string;
    };
}

export interface ArtistaInfo {
    name: string;
    mbid: string;
    url: string;
    streamable: string;
    image: LastFmImage[];
    imageUrl?: string;
    rank: number;
    '@attr'?: {
        rank: string;
    };
}

export interface AlbumInfo {
    name: string;
    mbid: string;
    url: string;
    artistName: string;
    image: LastFmImage[];
    imageUrl?: string;
    rank: number;
}

export interface AlbumApiResponse extends AlbumInfo {
  '@attr'?: {
    rank: string;
  };
  artist: {
    name: string;
  };
}
