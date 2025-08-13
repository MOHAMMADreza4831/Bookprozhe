import { Box } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Addcard from "@src/components/shop/AddCard";
import { Book } from "../Data/interfaceDATA";
type Props = {
  book: Book;
};

export default function Buttonicone({ book }: Props) {
  return (
    <Box className="flex justify-between m-2 ">
      <Box className="flex flex-row-reverse gap-1">
        <div
          className="flex justify-between items-center"
          style={{ height: "100%" }}
        >
          <button
            className=" rounded-full  border  border-dotted border-black"
            style={{
              backgroundColor: "#F0A9AA",
              opacity: "0.7",
              width: "25px",
              height: "25px",
            }}
          >
            <BookmarkIcon
              className="w-[16px]"
              sx={{ color: "#9a0003", opacity: "1" }}
            />
          </button>
        </div>
        <div
          className="flex justify-between items-center"
          style={{ height: "100%" }}
        >
          <button
            className="rounded-full flex justify-center  "
            style={{
              backgroundColor: "#F0A9AA",
              opacity: "0.7",
              width: "25px",
              height: "25px",
            }}
          >
            <FavoriteBorderIcon
              className="w-[16px]"
              sx={{
                color: "#9a0003",
                opacity: "1",
              }}
            />
          </button>
        </div>
        {/* <Addcard book={book}  />{" "} */}
      </Box>
    </Box>
  );
}
