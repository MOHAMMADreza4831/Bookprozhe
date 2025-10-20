import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book } from "../Data/interfaceDATA";
import axioshandel from "../login/header";
import Back from "../ui/back/back";
import Typography from "@mui/material/Typography";

export default function AboutHistoricalBook() {
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axioshandel
      .get("/books")
      .then((res) => {
        const foundBook = res.data.data.find(
          (b: Book) => b.id.toString() === id
        );
        if (foundBook) setBook(foundBook);
        else setBook(null);
      })
      .catch((err) => console.log("خطا:", err));
  }, [id]);

  if (!book) return <div>کتاب پیدا نشد!</div>;

  return (
    <div className="relative  w-[444px]     ">
      <div className="relative rounded-full">
        <div>
          <div className=" relative flex flex-col   h-[110px]  justify-center items-center">
            <img
              src={book.image}
              alt={book.title}
              className=" relative rounded-3xl h-[350px] w-64 top-[-20vh]  "
            />

            <Typography
              variant="bold20"
              className=" w- relative top-[-150px] "
              color=""
            >
              {book.title}
            </Typography>
            <Typography
              variant="medium12"
              className=" w- relative top-[-150px] "
              color="#9c9c9c"
            >
              {book.author}
            </Typography>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-blue-950 "></div>
    </div>
  );
}
