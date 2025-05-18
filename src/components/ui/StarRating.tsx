import React from 'react';

interface StarRatingProps {
  rating: number;
  onRate: (value: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, onRate }) => (
  <div className="flex justify-center">
    {[1, 2, 3, 4, 5].map((index) => (
      <button
        key={index}
        type="button"
        onClick={() => onRate(index)}
        className={`text-7xl md:text-7xl transition-colors 
                    ${index <= rating ? 'text-[#6C63FF]' : 'text-[#6C63FF] hover:text-[#6b63ff83]'}`}
        aria-label={`Rate ${index} out of 5 stars`}
      >
        {index <= rating ? '★' : '☆'}
      </button>
    ))}
  </div>
);
