import { Box } from "@mui/material";
import Addcard from "@src/components/shop/AddCard";
import { Book } from "../Data/interfaceDATA";
import Saveicone from "./Saveicone";
import Favoritesicone from "./FavoriteIcone";
type Props = {
  book: Book;
};

export default function Buttonicone({ book }: Props) {
  return (
    <Box className="flex justify-between flex-row m-2 ">
      <Box className="flex flex-row-reverse gap-1">
        
        <Saveicone book={book} /> <Favoritesicone book={book} />
        <Addcard book={book} />
      </Box>
    </Box>
  );
}
