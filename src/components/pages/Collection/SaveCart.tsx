import { Box, Card, CardMedia } from "@mui/material";
import Buttonicone from "@src/components/buttonIcone/buttonsicone";
import Rating from "@src/components/buttonIcone/Raring";
import { Book } from "@src/components/Data/interfaceDATA";
import axioshandel from "@src/components/login/header";
import { useQuery } from "@tanstack/react-query";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function SaveCart(book:Book) {

  const navigate = useNavigate();
  const {
    data: Save,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["save"],
    queryFn: () =>
      axioshandel
        .get("/collection-items/نشان شده ها  ")
        .then((res) => res.data.data),
  });

const filteredSave = Save?.filter(
  (item) => item.ref !== null && item.id !== book.id
);

  if (isLoading) return <p>...loding</p>;
  if (isError) return <p>Erroe</p>;

  return (
    <>
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <IoChevronBackOutline
            style={{ color: "white" }}
            className="  rotate-180 size-5 "
          />
          <button
            onClick={() => navigate("/profile")}
            style={{ color: "white" }}
            className="font-bold"
          >
            بازگشت
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 pt-10 justify-start pr-4">
        {filteredSave?.map((book:Book) => (
          <div className="flex-shrink-0  w-[200px] h-[300px] ">
            <Card style={{ borderRadius: "0 0 10px 10px" }} className=" ">
              <Link to={`/dashboard/book/${book.id}`} key={book.id}>
                <CardMedia
                  component="img"
                  image={book.image}
                  alt={book.title}
                  className=" h-48  mb-14 object-top z-10  overflow-clip  "
                />
              </Link>
              <div className=" bg-white  " style={{ opacity: 0.8 }}>
                <div>{book.title}</div>
                <Box className=" flex justify-between  w-[180px] ">
                  <Buttonicone book={book} />
                  <Box className="flex  items-center gap-1">
                    <Rating rating={book.rate} /> <p>{book.rate}</p>
                  </Box>
                </Box>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
