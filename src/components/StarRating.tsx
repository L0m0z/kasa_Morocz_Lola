// src/components/StarRating.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "@/styles/components/starRating.scss"; // ✅ fonctionnera




interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {

  const clampedRating = Math.min(5, Math.max(0, rating));

  const stars = Array.from({ length: 5 }, (_, i) => i < clampedRating);

  return (
    <div className="star-rating">
      {stars.map((filled, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`star ${filled ? 'filled' : ''}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
