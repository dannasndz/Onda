import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center mb-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar canción, álbum o artista..."
        className="p-2 rounded-md flex-1  bg-[#1f1f2b] border border-[#2c2d3f] text-white  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6 rounded-md  font-semibold hover:opacity-90 transition"
      >
        Buscar
      </button>
    </form>
  );
}
