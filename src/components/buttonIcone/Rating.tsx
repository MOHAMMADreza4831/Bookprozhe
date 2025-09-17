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
      </div>
    );
  }

  let StarComponent;
  if (rating >= 4) {
    StarComponent = StarIcon;
  } else if (rating >= 3) {
    StarComponent = StarHalfIcon;
  } else {
    StarComponent = StarBorderIcon;
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <StarComponent sx={{ color: "gold" }} />
      <span style={{ marginLeft: 15, minWidth: 30, textAlign: "left" }}>
        {rating}
      </span>{" "}
    </div>
  );
}
