export default function Loader({ loaderRef, hasMore }: { loaderRef: any, hasMore: boolean }) {
  return hasMore ? (
    <div ref={loaderRef} className="text-center text-bold text-sm text-gray-400 mt-8">
      Estamos preparando música con tu onda...
    </div>
  ) : (
    <div className="text-center text-sm text-gray-500 mt-8">
      Uy! terminaste con las recomendaciones.
    </div>
  );
}
