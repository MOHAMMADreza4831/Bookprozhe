import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PATH_BOOKS } from "@src/routes/paths";
import { products } from "@src/components/Data/ProductData";
export default function SwiperHome() {
  console.log(products);
  const Todaysdate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(Todaysdate.getDate() - 30);

  return (
    <div className="flex flex-row justify-center items-center px-4 bg-">
      <Swiper
        spaceBetween={0}
        pagination={true}
        modules={[Pagination]}
        className=""
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id} className="px-3  ">
            <Card className=" flex  overflow-hidden rounded-xl">
              <div className="flex flex-col justify-center items">
                <Typography className="break-words  text-sm">
                  {item.paragraf}
                </Typography>
                <Typography className=" w-[140px] overflow-hidden text-2xl  font-bold">
                  {item.text}
                </Typography>
                <p className="font-medium text-3xl text-[#ea4c13]">
                  {item.discount}%
                </p>
                <Button className="bg-[#ea4c13] text-white  w-2 h-5 rounded-f ">
                  clime
                </Button>
              </div>
              <div className="w-[300px] h-[300px] ">
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  className="  object-contain   w "
                />
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
