import { useState } from "react";

interface SearchBarProps {
  onSearch: (tipo: string, query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [tipo, setTipo] = useState("cancion");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(tipo, query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-6">
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="p-2 rounded-md bg-[#2c2c3a] text-white"
      >
        <option value="cancion">Canción</option>
        <option value="album">Álbum</option>
        <option value="artista">Artista</option>
      </select>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="p-2 rounded-md flex-1 bg-[#1f1f2b] text-white placeholder-gray-400"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
      >
        Buscar
      </button>
    </form>
  );
}
