import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendedForyou } from "../Data/ProductData";
import { Box, Typography } from "@mui/material";
import "swiper/css";

export default function Recommended() {
  return (
    <Box className="px-4">
      <Swiper
        slidesPerView={2.4}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {RecommendedForyou.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[150px] h-[100px] overflow-hidden rounded-2xl">
              <img src={item.image} className="w-full h-full object-cover" />

              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

              <Typography
                variant="subtitle1"
                className="absolute bottom-2 left-2 text-white font-semibold drop-shadow-md"
              >
                {item.Gener}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
