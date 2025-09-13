import { Box, Card, CardMedia } from "@mui/material";
import Rating from "@src/components/buttonIcone/Rating";
import { Book } from "@src/components/Data/interfaceDATA";
import axioshandel from "@src/components/login/header";
import queryClient from "@src/utils/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoHeartDislikeSharp } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Favorites(book: Book) {
  const navigate = useNavigate();

  const deleteCartItem = useMutation<unknown, Error, { id: number }>({
    mutationFn: ({ id }) => axioshandel.delete(`/collection-items/${id}`),
    onSuccess: () => {
      toast.success("کارت با موفقیت پاک شد");
      queryClient.invalidateQueries({ queryKey: ["love"] });
    },
    onError: () => {
      toast.error("عملیات پاک کردن از سبد خرید ناموفق بود");
    },
  });
  const {
    data: love,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["love"],
    queryFn: () =>
      axioshandel
        .get("/collection-items/علاقه مندی ها  ")
        .then((res) => res.data.data),
  });
  const filteredSave = love?.filter(
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
        {filteredSave?.map((book: Book) => (
          <div className="flex-shrink-0  w-[200px] h-[300px] ">
            <Card style={{ borderRadius: "0 0 10px 10px" }} className=" ">
              <Link to={`/dashboard/book/${book.ref_id}`} key={book.id}>
                <CardMedia
                  component="img"
                  image={book.ref.picture}
                  alt={book.ref.title}
                  className=" h-48  mb-14 object-top z-10  overflow-clip  "
                />
              </Link>
              <div className=" bg-white  " style={{ opacity: 0.8 }}>
                <div>{book.title}</div>
                <div className=" flex justify-between rounded-sm items-center  w-[180px] ">
                  <button
                    onClick={() => deleteCartItem.mutate({ id: book.id })}
                    className="w-[100px] h-[30px] bg-[#dd7475]"
                  >
                    <IoHeartDislikeSharp
                      className=""
                      style={{ color: "#790006" }}
                    />
                  </button>
                  <Box className="flex  items-center gap-1">
                    <Rating rating={book.ref.rate} /> <p>{book.ref.rate}</p>
                  </Box>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
