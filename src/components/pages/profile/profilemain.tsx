import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Profilemain() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center gap10 ">
      <div className="flex flex-col w-full  items-center mt-36">
        <Avatar alt="Remy Sharp" src="" sx={{ width: 200, height: 200 }} />
      </div>
      <div className="flex mx-7 gap-10  flex-col mt-10 ">
        <Button
          onClick={() => navigate("/detailprofile")}
          className="p-4 flex bg-gray-200 justify-start"
          variant="outlined"
        >
          حساب کاربری
        </Button>
        <Button
          onClick={() => navigate("/savecard")}
          className="p-4 flex bg-gray-200 justify-start items-center gap-1"
          variant="outlined"
        >
          <BookmarkBorderOutlinedIcon />
          نشان شده ها
        </Button>
        <Button
          onClick={() => navigate("/like")}
          className="p-4 flex bg-gray-200 justify-start items-center gap-1"
          variant="outlined"
        >
          <FavoriteBorderIcon />
          علاقه مندی{" "}
        </Button>
      </div>
    </div>
  );
}
