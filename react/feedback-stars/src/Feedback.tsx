import React, { useState } from "react";
import Star from "./Star";

const Feedback = ({ numberOfStars }: { numberOfStars: number }) => {
  const stars = new Array(numberOfStars).fill(true);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  console.log({ rating });
  console.log({ hoverRating });

  return (
    <div>
      {stars.map((star, idx) => {
        return (
          <Star
            key={idx}
            onMouseEnter={() => setHoverRating(idx + 1)}
            onMouseLeave={() => setHoverRating(0)}
            starId={idx + 1}
            ratings={hoverRating || rating}
            onClick={() => setRating(idx + 1)}
          />
          // <Star
          //   onMouseLeave={() => setHoverRating(0)}
          //   onMouseEnter={() => setHoverRating(idx + 1)}
          //   onClick={() => setRating(idx + 1)}
          //   starId={idx + 1}
          //   ratings={hoverRating || rating}
          // />
        );
      })}
    </div>
  );
};

export default Feedback;
