import type { ArtistaInfo } from '@/types/lastfm';

interface ArtistCardProps {
    artista: ArtistaInfo;
}

export default function ArtistCard({ artista }: ArtistCardProps) {
    return (
        <div className="bg-[#1A1D2E] shadow-[0_0px_8px_rgba(72,80,111,0.50)]  p-5 rounded-xl flex flex-col items-center text-center ">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-[#0D0D19] mb-4 flex items-center justify-center">
                {artista.imageUrl ? (
                    <img src={artista.imageUrl} alt={artista.name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-500 text-4xl">?</span>
                )}
            </div>
            <h3 className="text-xl font-semibold mb-1">{artista.name}</h3>
            <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Top {artista.rank}
            </span>
        </div>
    );
}