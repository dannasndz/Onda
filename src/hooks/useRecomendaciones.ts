import { useEffect, useRef, useState } from "react";

interface Recomendacion {
  nombre: string;
  artista ?: string;
  imagen: string;
  genero ?: string;
  tipo: 'album' | 'cancion' | 'artista';
  usaPlaceholder ?: boolean;
}

export function useRecomendaciones(status: string) {
  const [recomendaciones, setRecomendaciones] = useState<Recomendacion[]>([]);
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (status === "authenticated" && !isSearching) {
      fetchRecomendaciones(page);
    }
  }, [status, page, isSearching]);

  useEffect(() => {
    if (isSearching && searchPage > 1 && searchQuery) {
      loadMoreSearchResults();
    }
  }, [searchPage, isSearching]);

  useEffect(() => {
    if (!hasMore || isLoading) {
      if (observer.current) {
        observer.current.disconnect();
      }
      return;
    }

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          if (isSearching) {
            setSearchPage((prev) => prev + 1);
          } else {
            setPage((prev) => prev + 1);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (loaderRef.current) {
      observer.current.observe(loaderRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasMore, isLoading, isSearching]);

  const fetchRecomendaciones = async (page: number) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await fetch(`/api/recomendaciones?page=${page}&limit=50`);
      const data = await res.json();

      if (data.recomendaciones.length === 0) setHasMore(false);
      else {
        const ordenadas = [...data.recomendaciones].sort((a, b) => {
          if (a.imagen === '/placeholder-music.png') return 1;
          if (b.imagen === '/placeholder-music.png') return -1;
          return 0;
        });
        setRecomendaciones((prev) => [...prev, ...ordenadas]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  const performSearch = async (query: string, page: number, existingItems: Recomendacion[] = []) => {
    try {
      const [res1, res2, res3] = await Promise.all([
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=cancion&page=${page}`),
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=album&page=${page}`),
        fetch(`/api/busqueda?q=${encodeURIComponent(query)}&tipo=artista&page=${page}`),
      ]);
      
      if (!res1.ok || !res2.ok || !res3.ok) {
        console.error('Error en alguna de las APIs de búsqueda');
        return [];
      }

      const [data1, data2, data3] = await Promise.all([res1.json(), res2.json(), res3.json()]);

      const resultados = [
        ...(data1.resultados || []), 
        ...(data2.resultados || []), 
        ...(data3.resultados || [])
      ];

      // Crear set con elementos existentes para evitar duplicados
      const existingKeys = new Set(
        existingItems.map(item => `${item.tipo}-${item.nombre}-${item.artista || ''}`)
      );

      const seen = new Set();
      const filtrados = resultados.filter(item => {
        const key = `${item.tipo}-${item.nombre}-${item.artista || ''}`;
        if (seen.has(key) || existingKeys.has(key)) return false;
        seen.add(key);
        return true;
      });

      return filtrados;
    } catch (err) {
      console.error('Error en performSearch:', err);
      return [];
    }
  };

  const handleSearch = async (query: string) => {
    if (isLoading) return;

    setRecomendaciones([]);
    setHasMore(true);
    setIsSearching(true);
    setSearchPage(1);
    setSearchQuery(query);
    setIsLoading(true);

    try {
      const resultados = await performSearch(query, 1);
      if (resultados.length === 0) {
        setHasMore(false);
      } else {
        setRecomendaciones(resultados);
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreSearchResults = async () => {
    if (isLoading || !searchQuery || !hasMore) return;

    setIsLoading(true);
    try {
      const resultados = await performSearch(searchQuery, searchPage, recomendaciones);
      if (resultados.length === 0) {
        setHasMore(false);
      } else {
        setRecomendaciones(prev => [...prev, ...resultados]);
        // Si obtenemos menos resultados de los esperados, probablemente no hay más
        if (resultados.length < 10) {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error('Error cargando más resultados de búsqueda:', err);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };
  const clearSearch = () => {
    setIsSearching(false);
    setRecomendaciones([]);
    setPage(1);
    setSearchPage(1);
    setHasMore(true);
    setSearchQuery("");
    setIsLoading(false);
    
    // Desconectar observer para evitar problemas
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  return {
    recomendaciones,
    isLoading,
    isSearching,
    hasMore,
    searchQuery,
    handleSearch,
    clearSearch,
    loaderRef
  };
}