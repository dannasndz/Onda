export default function SkeletonCard() {
    return (
        <div className="mb-4 bg-[#1f1f2b] animate-pulse rounded-xl overflow-hidden shadow-md w-[100%] max-w-[240px]">
            <div className="w-full h-[240px] bg-gray-700"></div>
            <div className="p-4">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="flex justify-between">
                    <div className="h-3 bg-gray-700 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                </div>
            </div>
        </div>
    );
}
