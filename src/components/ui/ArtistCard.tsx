import type { ArtistaInfo } from '@/types/lastfm';
import { User, Crown, TrendingUp } from 'lucide-react';

interface ArtistCardProps {
    artista: ArtistaInfo;
}

export default function ArtistCard({ artista }: ArtistCardProps) {
    const getRankColor = (rank: number) => {
        if (rank <= 3) return 'from-yellow-400 to-orange-500';
        if (rank <= 10) return 'from-cyan-400 to-blue-500';
        return 'from-purple-400 to-pink-500';
    };

    const getRankIcon = (rank: number) => {
        if (rank <= 3) return <Crown className="w-4 h-4" />;
        return <TrendingUp className="w-4 h-4" />;
    };

    return (
        <div className="group relative">
            {/* Main card */}
            <div className="bg-[#1A1D2E]/90 border border-[#2a2d4a]/60 hover:border-cyan-400/10 rounded-2xl p-6 transition-all duration-200 hover:bg-[#1A1D2E]">
                {/* Rank badge */}
                <div className="absolute -top-2 -right-2 z-10">
                    <div className={`bg-gradient-to-r ${getRankColor(artista.rank)} rounded-full px-3 py-1.5 flex items-center gap-1.5`}>
                        {getRankIcon(artista.rank)}
                        <span className="text-white text-xs font-bold">#{artista.rank}</span>
                    </div>
                </div>

                {/* Artist image */}
                <div className="relative mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-[#2a2d4a] to-[#1A1D2E] border-2 border-[#2a2d4a]/50 group-hover:border-cyan-400/30 transition-colors duration-200">
                        {artista.imageUrl ? (
                            <img 
                                src={artista.imageUrl} 
                                alt={artista.name} 
                                className="w-full h-full object-cover" 
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <User className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 group-hover:text-cyan-00 transition-colors duration-200" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Artist info */}
                <div className="text-center space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-400 transition-colors duration-200 line-clamp-2">
                        {artista.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Top Artist</span>
                    </div>
                </div>
            </div>
        </div>
    );
}