import { Box } from "@mui/material";
import Addcard from "@src/components/shop/AddCard";
import { Book } from "../Data/interfaceDATA";
import FavoriteIcon from "./FavoriteIcone";
import Saveicone from "./Saveicone";
// import SaveIcon from "./Saveicone";
type Props = {
  book: Book;
};

export default function Buttonicone({ book }: Props) {
  return (
    <Box className="flex justify-between flex-row m-2 ">
      <Box className="flex flex-row-reverse gap-1">
        {/* <SaveIcon book={book} /> <FavoriteIcon book={book} /> */}
        <Addcard book={book} />
      </Box>
    </Box>
  );
}
