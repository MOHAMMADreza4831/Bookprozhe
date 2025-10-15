import { useEffect, useState } from "react";
import AvatarUpload from "../ui/FORM/Avatar";
import MenuHome from "./menu";
import axioshandel from "../login/header";
import { Avatar } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

type datatype = {
  image: string;
  first_name: string;
};

export default function NavbarHome() {
  const [Data, setData] = useState<datatype[]>([]);
  useEffect(() => {
    axioshandel.get("/user").then((res) => {
      setData([res.data.data]);
      console.log(Data);
    });
  }, []);
  const dataimage = Data.map((item) => item.image);
  const Name = Data.map((item) => item.first_name);
  console.log(dataimage, "salam");
  return (
    <div className="flex justify-between   items-center  p-4    ">
      <div className="flex justify-center items-center ">
        <div>
          <button>
            <Avatar sx={{ width: 56, height: 56 }} src={dataimage} />
          </button>
        </div>
        <div className="px-2">
          <p>سلام ,{Name}</p>
        </div>
      </div>
      <div className="flex w-24 justify-between ">
        <div>
          <button className="    rounded-full  p-2  ">
            <FiSearch size={25} style={{}} />
          </button>
        </div>
        <div>
          <div>
            <button className="relative  rounded-full p-2">
              <FiBell size={25} />
              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
