import { Book } from "../Data/interfaceDATA";
import { IoChevronBackOutline } from "react-icons/io5";
import { PATH_DASHBOARD } from "@src/routes/paths";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axioshandel from "../login/header";
import { Divider } from "@mui/material";
import MathPrice from "./Mathpriec";

export default function Shop() {

  const {
    data: basket,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data),
  });  
  if (isLoading) return <p>...loding</p>;
  if (isError) return <p>Erroe</p>;
  return (
    <>
      <div>
        <div
          className="sticky flex-row z-10 w-full h-16"
          style={{ backgroundColor: "#95bccc" }}
        >
          <div className="flex py-4 ">
            <Link to={PATH_DASHBOARD.navigator.home} className="flex">
              <IoChevronBackOutline
                style={{ color: "white" }}
                className="rotate-180 size-5"
              />
            </Link>
            <div className="">
              <span style={{ color: "white" }} className="font-bold  ">
                سبد خرید
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 py-2  -slate-100 ">
        {basket?.data.map((book: Book) => (
          <div
            key={book.id}
            className="grid grid-cols-[1fr,3fr] bg-slate-500  my-3 h-[150px] gap-2 shadow-lg rounded-b-2xl"
          >
            <div className="     justify-center items-center    ">
              <img
                src={book.image}
                alt={book.title}
                className="flex top   bg-black object-contain h-full  "
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
              <Divider variant="middle" className="pt-4" />
                <MathPrice book={book} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// status {1 ترجمه 0 خلاصه 2 اصلی }
