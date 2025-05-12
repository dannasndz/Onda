import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  query?: string;
  onClear?: () => void; 
}

export default function SearchBar({ onSearch, query = "", onClear }: SearchBarProps) {
  const [localQuery, setLocalQuery] = useState(query);
  
  useEffect(() => {
    setLocalQuery(query);
  }, [query]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!localQuery.trim()) return;
    onSearch(localQuery.trim());
  };
  
  const handleClear = () => {
    setLocalQuery("");
    if (onClear) onClear();
  };
  
  return (
    <div className="flex flex-col w-full">
      <form onSubmit={handleSubmit} className="flex gap-4 items-center mb-10">
        <div className="relative flex-1">
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Buscar canción, álbum o artista..."
            className="p-2 pl-4 pr-10 rounded-md w-full bg-[#1f1f2b] border border-[#2c2d3f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
          {localQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6 rounded-full font-semibold hover:opacity-90 transition"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}