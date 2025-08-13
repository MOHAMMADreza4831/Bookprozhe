import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Iconeproduct () {
  return (
    <>
      <Box className="flex gap-4">
        <Box
          className=" rounded-full p-1 "
          sx={{ backgroundColor: "#f0a9aa", opacity: "0.7" }}
        >
          <FavoriteBorderIcon
            className=""
            sx={{ color: "#9a0003", opacity: "1" }}
          />
        </Box>
        <Box
          className=" rounded-full p-1 border border-dotted "
          sx={{ backgroundColor: "rgba(216, 241, 255, 1)"  }}
        >
          <BookmarkIcon className="" sx={{ color: "rgba(149, 188, 204, 1)", opacity: "1" }} />
        </Box>

      </Box>
    </>
  );
}

export default Iconeproduct;
