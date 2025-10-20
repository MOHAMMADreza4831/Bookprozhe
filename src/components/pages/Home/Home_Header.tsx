import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { Book } from "@src/components/Data/interfaceDATA";
import { genertitle } from "@src/components/Data/ProductData";
import axioshandel from "@src/components/login/header";
import { PATH_BOOKS } from "@src/routes/paths";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home_Header() {
  const [Data, setData] = useState<Book[]>();
  const [Active, setActive] = useState<number>(0);
  useEffect(() => {
    HandelCard(0)
  }, []);
  const HandelCard = (id: number) => {
    axioshandel.get(`/genre/${id}`).then((res) => {
      setData(res.data.data.book);
    });
    if (id === 0) {
      axioshandel.get("/books").then((res) => {
        if (Data) {
          setData([]);
        }
        setData(res.data.data);
      });
    }
  };
  return (
    <>
      <Swiper
        className="mt-8 flex flex-col  "
        slidesPerView={4.5}
        spaceBetween={0}
        initialSlide={0}
        pagination={{
          clickable: true,
        }}
      >
        {genertitle.map((item) => {
          return (
            <>
              <SwiperSlide>
                <Button
                  onClick={() => {
                    HandelCard(item.id);
                    setActive(item.id)
                  }}
                  className={`rounded-full text-[#6a6a6a]  w-16  flex justify-center items-center ${Active === item.id ? "bg-[#e64011] text-white " : ""}`}
                >
                  {item.title}
                </Button>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <Swiper
        className="mt-10 flex flex-col  "
        slidesPerView={2.8}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {Data?.map((item) => {
          return (
            <>
              <SwiperSlide className="h-60 w-36  rounded-full  text-[#6a6a6a] p-2  flex justify-center items-center ">
                <>
                  <Box className="h-full w-full   ">
                    <Link to={PATH_BOOKS.navigator.details(item?.id)}>
                      <CardMedia
                        component="img"
                        image={item?.picture}
                        alt={item?.title}
                        className="w-full rounded-2xl h-48"
                      />
                    </Link>

                    <Box className="bg">
                      <Typography variant="bold16" className="w-full">
                        {item.title}
                      </Typography>
                      <br />
                      <Typography variant="caption" className="w-full">
                        {item.description}
                      </Typography>

                      <Box className="flex justify-between m-2">
                        <Box className="flex items-center gap-1"></Box>
                      </Box>
                    </Box>
                  </Box>
                </>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
