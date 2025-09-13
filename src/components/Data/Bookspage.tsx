import { Box, CardMedia, Typography, Card } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import Buttonicone from "../buttonIcone/buttonsicone";
import Rating from "../buttonIcone/Rating";
import { Book } from "./interfaceDATA";
import { PATH_BOOKS } from "@src/routes/paths";

interface ProductCardProps {
  book: Book;
  title?: string; 
  image?: string; 
  rating?: number; 
  id?: number;
}
const ProductCard: FC<ProductCardProps> = ({ book }) => {
  return (
    <Box className="flex-shrink-0 w-[200px] h-[300px] gap-11">
      <Card>
        <Link to={PATH_BOOKS.navigator.details(book?.id)}>
          <CardMedia
            component="img"
            image={book?.picture}
            alt={book?.title}
            className="w-full h-48 object-contain"
          />
        </Link>

        <Box className="flex flex-col">
          <Typography variant="h6" className="w-40">
            {book?.title}
          </Typography>

          <Box className="flex justify-between m-2">
            <Buttonicone book={book} />
            <Box className="flex items-center gap-1">
              <Rating rating={book?.rate} />
              <p>{book?.rate}</p>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductCard;
