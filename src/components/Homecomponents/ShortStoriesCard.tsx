import StarIcon from "@mui/icons-material/Star";
import StyleIcons from "./styleIconeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Book } from "../Data/interfaceDATA";
import { useQuery } from "@tanstack/react-query";
import axioshandel from "../login/header";
import { PATH_BOOKS } from "@src/routes/paths";
import Rating from "../buttonIcone/Rating";
import Buttonicone from "../buttonIcone/buttonsicone";
function ShortStoriesCard() {

//   const [books, setbooks] = useState<Book[]>([]);

//   useEffect(() => {
//     axios
//       .get("http://10.10.50.76:8001/api/books")
//       .then((res) => {
//         const add = res.data.data;
//         setbooks(add);
//       })

//       .catch((error) => {
//         console.log("خطا در دریافت  اطلاعات", error);
//         alert("خطا در دریافت  اطلاعات");
//       });
//   }, []);

// const shortbooks = books.filter((book:Book)=>
//   book.genre?.some((g)=>g.title==="جنایی")
// )
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

  const romanbooks = books?.filter((book: Book) =>
    book.genre?.some((g) => g.title === "جنایی")
  );

  const FirstPageCart = romanbooks?.slice(0, 6);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.8} 

      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {FirstPageCart?.map((book) => (
        <SwiperSlide
          key={book.id}
          className=" w-[200px] h-[300px] flex  static z-20"
        >

          <Card className="static z-10 ">
            <Link to={PATH_BOOKS.navigator.details(book.id)} >
              <CardMedia
                component="img"
                image={book.image}
                alt={book.title}
                className="w-full h-48 object-contain"
              />
            </Link>

            <Box className="flex flex-col">
              <Typography variant="h6" className="w-40">
                {book.title}
              </Typography>

              <Box className="flex justify-between m-2 ">
                <Buttonicone book={book} />
                <Box className="flex items-center gap-1">
                  <Rating rating={book.rate} />
                </Box>
              </Box>
            </Box>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ShortStoriesCard;
