import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";
import axioshandel from "../login/header";
import { PATH_BOOKS } from "@src/routes/paths";
import Rating from "../buttonIcone/Raring";
import Buttonicone from "../buttonIcone/buttonsicone";

function NewCard() {

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: () => axioshandel.get("/books").then((res) => res.data.data),
  });

  if (isLoading) return <p>...loding</p>;
  if (isError) return <p>Erroe</p>;

  const Firstpagecart = books?.slice(0, 6);

  return (
    <Swiper spaceBetween={20} slidesPerView={1.8}>
      {Firstpagecart?.map((item) => (
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
                  <p>{item.rate}</p>
                </Box>
              </Box>
            </Box>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NewCard;
