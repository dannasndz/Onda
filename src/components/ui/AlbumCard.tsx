import type { AlbumInfo } from '@/types/lastfm';

interface AlbumCardProps {
    album: AlbumInfo;
}

export default function AlbumCard({ album }: AlbumCardProps) {
    return (
        <div className="bg-[#1A1D2E] p-5 rounded-xl flex flex-col items-center text-center shadow-lg">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-[#0D0D19] mb-4 flex items-center justify-center">
                {album.imageUrl ? (
                    <img src={album.imageUrl} alt={album.name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-500 text-4xl">?</span>
                )}
            </div>
            <h3 className="text-xl font-semibold mb-1 truncate w-full" title={album.name}>{album.name}</h3>
            <p className="text-sm text-gray-400 mb-2 truncate w-full" title={album.artistName}>{album.artistName}</p>
        </div>
    );
}