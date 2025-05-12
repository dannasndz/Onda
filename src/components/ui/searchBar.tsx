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
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-6">
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