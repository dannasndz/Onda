import Image from "next/image";

type RecomendacionCardProps = {
  item: any;
  onClick: (item: any) => void;
};

export default function RecomendacionCard({ item, onClick }: RecomendacionCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder-music.png';
  };

  return (
    <div onClick={() => onClick(item)} className="mb-4 bg-[#1f1f2bcc] backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer w-[100%] max-w-[240px]">
      <Image
        src={item.imagen || '/placeholder-music.png'}
        alt={item.nombre}
        width={240}
        height={240}
        className="w-full h-auto object-cover"
        onError={handleImageError}
        unoptimized
      />
      <div className="p-4">
        <p className="text-md font-semibold truncate">{item.nombre}</p>
        {item.artista && (
          <p className="text-sm text-violet-400 truncate">{item.artista}</p>
        )}
        <div className="flex justify-between items-center mt-2">
          {item.genero && (
            <span className="text-xs text-gray-400">{item.genero}</span>
          )}
          <span className="text-xs px-2 py-1 bg-violet-900 rounded-full">
            {item.tipo === 'album' ? 'Álbum' : item.tipo === 'cancion' ? 'Canción' : 'Artista'}
          </span>
        </div>
      </div>
    </div>
  );
}
