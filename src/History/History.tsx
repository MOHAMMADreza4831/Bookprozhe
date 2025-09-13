import { Box, Card, CardMedia } from "@mui/material";
import Buttonicone from "@src/components/buttonIcone/buttonsicone";
import axioshandel from "@src/components/login/header";
import { groupBooksByDate } from "@src/utils/groupedBooks";
import { useQuery } from "@tanstack/react-query";
import { Divider } from "@mui/material";

import { Link,  } from "react-router-dom";
import { Book } from "@src/components/Data/interfaceDATA";
import Rating from "@src/components/buttonIcone/Rating";

export default function History() {
  // const Navigate = useNavigate();
  const {
    data: books,
    isError,
    isLoading,
    error,
  } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: () => axioshandel.get("/book-order").then((res) => res.data.data),
  });

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError) return <p>خطا در بارگذاری: {(error as Error).message}</p>;
  if (!books || books.length === 0) return <p>کتابی موجود نیست</p>;

  const groupedBooks = groupBooksByDate(books);

  return (
    <>
      {/* <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <IoChevronBackOutline
            style={{ color: "white" }}
            className="  rotate-180 size-5 "
          />
          <button
            onClick={() => Navigate(-1)}
            style={{ color: "white" }}
            className="font-bold"
          >
            بازگشت
          </button>
        </div>
      </div> */}
      <div className="">
        {Object.entries(groupedBooks).map(([date, books]) => (
          <div key={date}>
            <div className="pt-4  ">
              <Divider
                textAlign="right"
                className="pr-2"
                sx={{
                  "&::before": {
                    width: 0,
                  },
                  "&::after": {
                    width: "90%",
                  },
                }}
              >
                <h1 className="font-bold">
                  {new Date(date).toLocaleDateString("fa-IR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h1>
              </Divider>
            </div>
            <div className="flex flex-wrap gap-4 pt-10 justify-start pr-4">
              {books.map((book) => (
                <div className="flex-shrink-0  w-[200px] h-[300px] ">
                  <Card style={{ borderRadius: "0 0 10px 10px" }} className=" ">
                    <Link to={`/dashboard/book/${book.id}`} key={book.id}>
                      <CardMedia
                        component="img"
                        image={book.image}
                        alt={book.title}
                        className=" h-48  mb-14 object-top z-10  overflow-visible  "
                      />
                    </Link>
                    <div className=" bg-white  " style={{ opacity: 0.8 }}>
                      <div>{book.title}</div>
                      <Box className=" flex justify-between  w-[180px] ">
                        <Buttonicone book={book} />
                        <Box className="flex  items-center gap-1">
                          <Rating  rating={book.rate} />
                          <p>{book.rate}</p>{" "}
                        </Box>
                      </Box>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
