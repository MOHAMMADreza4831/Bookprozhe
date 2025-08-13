import { Box, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import StyleIcons from "../Homecomponents/styleIconeCard";
import StarIcon from "@mui/icons-material/Star";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import Buttonicone from "../buttonIcone/buttonsicone";

interface Book {
  id: string;
  title: string;
  description: string;
  img: string;
  book:Book[]
  type: string[];
  rating: number;
}

interface ProductCardProps extends Book {}

const ProductCard: FC<ProductCardProps> = ({ title, img, rating, id , book }) => {
  return (
    <Box className=" ">
      <Card className="flex-shrink-0  w-[200px] h-[300px] gap-3 ">
        <Link to={`/dashboard/book/${id}`} key={id}>
          <CardMedia
            component="img"
            image={img}
            alt={title}
            className="w-full h-48 object-contain"
          />
        </Link>

        <Box className="flex flex-col">
          <Typography variant="h6" className="w-40">
            {title}
          </Typography>

          <Box className="flex justify-around ">

                <Buttonicone book={book} />
            <Box className="flex items-center gap-1">
              <StarIcon fontSize="small" sx={{ color: "yellow" }} />
              <span className="">{rating}</span>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductCard;
