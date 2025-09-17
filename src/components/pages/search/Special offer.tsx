import { Book } from "@src/components/Data/interfaceDATA";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PATH_BOOKS } from "@src/routes/paths";
import Buttonicone from "@src/components/buttonIcone/buttonsicone";
import Rating from "@src/components/buttonIcone/Rating";
import axios from "axios";

export default function Specialoffer() {
  const [Data, setData] = useState<Book[]>([]);
  useEffect(() => {
    axios
      .get("http://10.10.50.76:8002/api/books")
    .then((res) => {
      if (Array.isArray(res.data.data)) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    })
}, []);
  return (
    <>
      <Swiper spaceBetween={20} slidesPerView={1.8}>
        {Data?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex-shrink-0  w-[200px] h-[300px] gap-11"
          >
            <Card>
              <Link to={PATH_BOOKS.navigator.details(item.id)}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
              </Link>

              <Box className="flex flex-col">
                <Typography variant="h6" className="w-40">
                  {item.title}
                </Typography>

                <Box className="flex justify-between m-2 ">
                  <Buttonicone book={item} />
                  <Box className="flex items-center gap-1">
                    <Rating rating={item.rate} />
                    
                  </Box>
                </Box>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </>
  );
}
