import { Book } from "../Data/interfaceDATA";
import { IoChevronBackOutline } from "react-icons/io5";
import { PATH_DASHBOARD } from "@src/routes/paths";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axioshandel from "../login/header";
import { Button, Divider } from "@mui/material";
import { useEffect } from "react";

export default function Shop() {
  const invalid = useQueryClient();
  const {
    data: basket,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data.data),
  });

  console.log(basket)
  
  const addToBasket = useMutation({
    
    mutationFn: () => axioshandel.post("/book-order"),
    onSuccess: () => {
      invalid.invalidateQueries({ queryKey: ["basket"] });
      alert("کتاب با موفقیت خریداری شد!");
    },
    onError: () => {
      alert("عملیات ناموفق بود!");
    },
  });

  useEffect(() => {
    if (basket) {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

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

      <div className="px-2 py-2  bg-slate-100 ">
        {Array.isArray(basket) &&
          basket?.map((book: Book) => (
            <div
              key={book.id}
              className="grid grid-cols-[1fr,3fr]  my-3 h-[150px] gap-2 shadow-lg rounded-b-2xl"
            >
              <div className="     overflow-auto  justify-center items-center    ">
                <img
                  src={book.image}
                  alt={book.title}
                  className="flex    bg-black  object-contain h-full  "
                />
              </div>
              <div>
                <div className="">{book.title} :</div>
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
                <div className="flex justify-center"></div>
                <div
                  style={{ backgroundColor: "#FCDCDC" }}
                  className="flex justify-between pl-2  p-3 rounded-[3px] w-[18em]"
                >
                  <div> قیمت کل</div>
                  <div>
                    قیمت:
                    {book.file?.status === 0 ? book.file.price : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        {basket && basket.length > 0 ? (
          <Button
            onClick={() => addToBasket.mutate()}
            className="w-full py-5  bg-[#95BCCC] "
            sx={{ color: "white" }}
          >
            خرید
          </Button>
        ) : null}
      </div>
    </>
  );
}

// status {1 ترجمه 0 خلاصه 2 اصلی }
