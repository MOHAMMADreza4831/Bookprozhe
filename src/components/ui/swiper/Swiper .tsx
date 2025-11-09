import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import image1 from "@src/assets/image/arash.png";
import { Card_detail } from "@src/components/Data/ProductData";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const HeaderSwiper = () => {
  return (
    <div className="w-full  bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="w-full  flex items-center"
      >
        {Card_detail.map((item) => (
          <SwiperSlide className="" key={item.id}></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
