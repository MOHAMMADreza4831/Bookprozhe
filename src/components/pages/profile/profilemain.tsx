import { Avatar, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IoChevronBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axioshandel from "@src/components/login/header";
import { PATH_DASHBOARD } from "@src/routes/paths";
type datatype = {
  id: number;
  first_name: string;
  last_name: string;
  login: number;
  address: string;
  birthdate: Date;
  image: string;
  email: string;
  phone: string;
  birth_date: string;
};

export default function Profilemain() {
  const navigate = useNavigate();
  const [Data, setData] = useState<datatype[]>([]);
  useEffect(() => {
    axioshandel.get("/user").then((res) => {
      setData([res.data.data]);
    });
  }, []);
  const dataimage = Data.map((item) => item.image);
  return (
    <>
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <button
            onClick={() => navigate(PATH_DASHBOARD.navigator.home)}
            style={{ color: "white" }}
            className="font-bold flex "
          >
            <IoChevronBackOutline
              style={{ color: "white" }}
              className="  rotate-180 size-5 "
            />
            بازگشت
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center gap10 ">
        <div className="flex flex-col w-full  items-center mt-5 md:mt-10">
          <Avatar
            alt="Remy Sharp"
            src={dataimage}
            sx={{ width: 200, height: 200 }}
          />
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
            onClick={() => navigate("/favorites")}
            className="p-4 flex bg-gray-200 justify-start items-center gap-1"
            variant="outlined"
          >
            <FavoriteBorderIcon />
            علاقه مندی{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
