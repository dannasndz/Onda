export function RatingProm({ value }: { value: number }) {
  const estrellas = [];
  const redondeado = Math.round(value); 

  // Estrellas llenas
  for (let i = 0; i < redondeado; i++) {
    estrellas.push(
      <span key={`full-${i}`} className="text-[#6C63FF] text-xl sm:text-2xl">★</span>
    );
  }

  // Estrellas vacias
  for (let i = redondeado; i < 5; i++) {
    estrellas.push(
      <span key={`empty-${i}`} className="text-gray-400 text-xl sm:text-2xl">☆</span>
    );
  }

  return <div className="flex gap-1">{estrellas}</div>;
}
