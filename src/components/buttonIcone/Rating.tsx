import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type RatingProps = {
  rating?: number;
};

export default function Rating({ rating }: RatingProps) {
  if (rating === undefined) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <StarBorderIcon sx={{ color: "gold" }} />
        <span style={{ marginLeft: 8 }}>0.0</span>
      </div>
    );
  }

  const roundedRating = parseFloat(rating.toFixed(1));

  let StarComponent;
  if (roundedRating >= 4) {
    StarComponent = StarIcon;
  } else if (roundedRating >= 3) {
    StarComponent = StarHalfIcon;
  } else {
    StarComponent = StarBorderIcon;
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <StarComponent sx={{ color: "gold" }} />
      <span style={{ marginLeft: 15, minWidth: 30, textAlign: "left" }}>
        {roundedRating.toFixed(1)}
      </span>{" "}
    </div>
  );
}
