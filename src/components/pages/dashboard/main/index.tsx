import { Button } from "@mui/material";
import { Book } from "@src/components/Data/interfaceDATA";
import axioshandel from "@src/components/login/header";
import { PATH_DASHBOARD } from "@src/routes/paths";
import { useQuery } from "@tanstack/react-query";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button_index from "./button_index";

type datatype = {
  book_id: string;
  file_id: number;
};

function Download() {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["downlod"],
    queryFn: () => axioshandel.get("/book-order").then((res) => res.data.data),
  });
  console.log(books);

  if (isLoading) return <p>...loding</p>;
  if (isError) return <p>Erroe</p>;

  return (
    <>
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <Link to={PATH_DASHBOARD.navigator.home}>
          <div className="flex      py-4 ">
            <IoChevronBackOutline
              style={{ color: "white" }}
              className="  rotate-180 size-5 "
            />
            <button style={{ color: "white" }} className="font-bold">
              بازگشت
            </button>
          </div>
        </Link>
      </div>
      <div className="flex flex-col pt-10">
        {books?.map((item) => (
          
          <div
            key={item.id}
            className="grid grid-cols-[1fr,3fr]  my-3 h-[150px] gap-2 shadow-lg mx-5  rounded-b-2xl"
          >
            <div className="     justify-center items-center    ">
              <img
                src={item.image}
                alt={item.title}
                className="flex top    object-contain h-full  "
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: " 1em",
                  display: " flex ",
                  width: "19em",
                  whiteSpace: "pre",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
                className=""
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراح
              </div>
              <div>نویسنده:{item.author}</div>
              <div>قیمت : 220 تومان </div>
              <div className="flex w-full    justify-center gap-3 ">ّ
                <Button_index item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Download;
