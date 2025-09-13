import { Avatar, Box, Button } from "@mui/material";
import axioshandel from "@src/components/login/header";
import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import DateObject from "react-date-object";
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

export default function Detailprofile() {
  const navigate = useNavigate();
  const [Data, setData] = useState<datatype[]>([]);
  useEffect(() => {
    axioshandel.get("/user").then((res) => {
      setData([res.data.data]);
    });
  }, []);

  return (
    <>
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <button
            onClick={() => navigate(-1)}
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
      <div>
        {Data.map((item) => {
          return (
            <div key={item.id} className="  ">
              <div className=" flex  justify-center flex-col pt-10 w-full gap-5 ">
                <Avatar
                  className="flex mx-[25%] mb-10  items-center"
                  sx={{ width: 200, height: 200 }}
                    src={item.image ? item.image : "/default-avatar.png"}
                />
                <Box className="flex  justify-between mx-5 p-4   rounded-[10px] border border-[#95BCCC]  bg-slate-100 ">
                  <div>نام:</div>
                  <div>{item.first_name}</div>
                </Box>
                <Box className="flex  justify-between mx-5 p-4   rounded-[10px] border border-[#95BCCC] bg-slate-100 ">
                  <div>نام خانوادگی:</div>
                  <div>{item.last_name}</div>
                </Box>
                <Box className="flex  justify-between mx-5 p-4   rounded-[10px] border border-[#95BCCC] bg-slate-100 ">
                  <div>شماره موبایل:</div>
                  <div>{item.phone}</div>
                </Box>
                <Box className="flex  justify-between mx-5 p-4   rounded-[10px] border border-[#95BCCC] bg-slate-100 ">
                  <div>ایمیل:</div>
                  <div> {item.email ? item.email : "ایمیلی وجود ندارد"} </div>
                </Box>
                <Box className="flex  justify-between mx-5 p-4   rounded-[10px] border border-[#95BCCC] bg-slate-100 ">
                  <div>تاریخ تولد:</div>
                  <div>
                    {" "}
                    {item.birth_date
                      ? new DateObject({
                          date: item.birth_date,
                        }).format("YYYY/MM/DD")
                      : "نامشخص"}
                  </div>
                </Box>
              </div>
              <div className="w-full flex flex-row-reverse p-6 ">
                <Button
                  variant="contained"
                  className=" bg-[#95BCCC]"
                  onClick={() => navigate(`/editProfile/${item.id}`)}
                >
                  ویرایش
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
