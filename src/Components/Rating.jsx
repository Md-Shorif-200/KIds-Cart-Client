import React from "react";
import StarRatings from "react-star-ratings";

const Rating = ({ value = 0, size = 20, color = "gold" }) => {
  return (
    <StarRatings
      rating={value}
      starRatedColor={color}
      numberOfStars={5}
      name="rating"
      starDimension={`${size}px`}
      starSpacing="2px"
    />
  );
};

export default Rating;