import { Box, Card, Typography } from "@mui/material";
import { Card_detail } from "@src/components/Data/ProductData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type Datatype = {
  title?: string;
};

export default function Cards({ title }: Datatype) {
  const Data = Card_detail.filter((item) => item.Genre === title);
  return (
    <Swiper
      className="pr-5"
      slidesPerView={2.4}
      spaceBetween={40}
      pagination={{
        clickable: true,
      }}
    >
      {Card_detail.map((item) => (
        <SwiperSlide className="" key={item.id}>
          <Box className="flex flex-col  ">
            <Link to={`/book/${item.id}`} className="">
              <img className="w-[200px] h-[250px]" src={item.image} />
            </Link>
            <Box>
              <Typography variant="subtitle1" className="text-white">
                {item.title}
              </Typography>
              <Box className="flex gap-5 ">
                <Box className="text-[#969696] flex">
                  <FaStar /> {item.Rate}
                </Box>
                <Box className="text-[#969696]">{item.price}</Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
