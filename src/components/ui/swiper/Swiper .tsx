import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { useRef } from "react";
// import { products } from "@src/components/Data/ProductData";
import "@src/styles/index.css";
import "swiper/css";
import "swiper/css/pagination";
export default function SwiperHome() {
  const progressCircle = useRef<HTMLDivElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="  ">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="flex items-start justify-start h-[380px] "
        slidesPerView={1}
      >
        {/* {products?.map((item) => (
          <SwiperSlide key={item.id} className="   h-full">
            <Card className="flex items-center  justify-between overflow-auto rounded-xl ">
              <div className="flex flex-col justify-center items-start gap-2">
                <Typography className="break-words text-sm text-gray-600">
                  {item.paragraf}
                </Typography>
                <Typography className="w-[140px]  overflow-hidden text-2xl font-bold">
                  {item.text}
                </Typography>
                <p className="font-medium text-3xl text-[#ea4c13]">
                  {item.discount}%
                </p>
                <Button className="bg-[#ea4c13] text-white px-4 py-2 rounded-full hover:bg-[#c5360f] transition">
                  claim
                </Button>
              </div>
              <div className="w-full    flex justify-center    ">
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  className="object-contain w-full h-[350px]"
                />
              </div>
            </Card>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
}
