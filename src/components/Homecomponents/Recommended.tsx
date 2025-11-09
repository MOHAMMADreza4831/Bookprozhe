import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendedForyou, genre } from "../Data/ProductData";
import { Box, Card, Typography } from "@mui/material";
import "swiper/css";
import { Book } from "../Data/Allbooks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Recommended() {
  const [books, setBooks] = useState<Book[]>([]);
  const filter = genre.map((item) => item.data);
  console.log(filter);
  const navigate = useNavigate();
  return (
    <Box className="px-4">
      <Swiper
        slidesPerView={2.4}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {filter[0].map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="relative w-[150px] h-[100px] overflow-hidden rounded-2xl">
              <Link to={`/genrelist/${item.id}`}>
                <img src={item.image} className="w-full h-full object-cover" />
              </Link>
              <Typography
                variant="subtitle1"
                className="absolute bottom-2 left-2 text-white font-semibold drop-shadow-md"
              ></Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
