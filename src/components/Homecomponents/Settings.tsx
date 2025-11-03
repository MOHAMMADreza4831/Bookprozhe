import { Box, Typography } from "@mui/material";
import icone1 from "@src/assets/image/icone 1 .png";
import icone2 from "@src/assets/image/icons8-update-50.png";
import icone3 from "@src/assets/image/icons8-profile-50.png";
import { Swiper } from "swiper/react";
import { alarm } from "../Data/ProductData";

export default function Settings_page() {
  return (
    <>
      <Typography
        variant="bold18"
        className=" text-white flex justify-center items-end h-[50px] "
      >
        notification
      </Typography>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="px-3 pt-10"
      >
        {alarm.map((item) => (
          <Box className=" bg-[#080808] my-2 rounded-[20px] w-full  h-[100px] ">
            <Box className="flex  items-center  h-full">
              <img src={item.image} className="size-[40px]" />
              <Box className="flex  h-16 flex-col justify-around">
                <Typography
                  className="pr-4 text-[25px] text-white  "
                  variant="bold18"
                >
                  {item.title}
                </Typography>
                <Typography className="pr-4 text-white  flex " variant="bold18">
                  امروز | 10:00
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Swiper>
    </>
  );
}
