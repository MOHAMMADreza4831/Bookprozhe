import { Box } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Addcard from "../shop/AddCard";
import { Book } from "../Data/interfaceDATA";
type StyleIconsProps = {
  book: Book;
};
function StyleIcons({book}:StyleIconsProps) {
  return (
    <>
      <Box className="flex flex-row-reverse gap-1">
        <button
          className=" rounded-full  border  border-dotted border-black"
          style={{
            backgroundColor: "#F0A9AA",
            opacity: "0.7",
            width: "40px",
            height: "40px",
          }}
        >
          <BookmarkIcon className="" sx={{ color: "#9a0003", opacity: "1" }} />
        </button>
        <button
          className=" rounded-full  "
          style={{
            backgroundColor: "#F0A9AA",
            opacity: "0.7",
            width: "40px",
            height: "40px",
          }}
        >
          <FavoriteBorderIcon
            className=""
            sx={{ color: "#9a0003", opacity: "1" }}
          />
        </button>

          <Addcard book={book}  />


      </Box>
    </>
  );
}

export default StyleIcons;
