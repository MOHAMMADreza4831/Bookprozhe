import { Book } from "../Data/interfaceDATA";
import { IoChevronBackOutline } from "react-icons/io5";
import { PATH_DASHBOARD } from "@src/routes/paths";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axioshandel from "../login/header";
import { Divider } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Shop() {
  const [total, settotal] = useState<number|null>(0)
  const [summary, setsummary] = useState<number|null>(0)
  const [Translation, setTranslation] = useState<number|null>(0)
  // const [shoplist, setshoplist] = useState<Book[]>([]);
  // const [selectedOptions, setSelectedOptions] = useState<{
  //   [id: string]: { translation: boolean; summari: boolean };
  // }>({});

  // useEffect(() => {
  //   const saved = localStorage.getItem("cart");
  //   try {
  //     const parsed: Book[] = saved ? JSON.parse(saved) : [];
  //     setshoplist(parsed);

  //     const initialOptions: {
  //       [id: string]: { translation: boolean; summari: boolean };
  //     } = {};
  //     parsed.forEach((book: Book) => {
  //       initialOptions[book.id] = { translation: false, summari: false };
  //     });
  //     setSelectedOptions(initialOptions);
  //   } catch {
  //     setshoplist([]);
  //   }
  // }, []);

  // const test = (bookId: string  ) => {
  //   const book = shoplist.find((b) => b.id === bookId);
  //   const options = selectedOptions[bookId];

  //   if (!book || !options) return 0;

  //   let total = book.price;
  //   if (options.translation) total += book.priceTranslation; /لامنهعتخذغابلدذئوتاککننااتاذربی
  //   if (options.summari) total += book.pricesummari;
  //   return total;
  // };
  const {
    data: basket,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data),
  });




useEffect(() => {
  if (!basket) return;
  settotal(basket.data.map(book.price ));
}, [basket]);



  const handelMAth = ()=> {
  let summari = 0;

  basket?.data.forEach(item => {
  item.book_files.forEach(file => {
    if (file.status === 2) {
      summari += file.price;
      setsummary(summari)
    }
  });
});

total+=summari

}
  
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
              <div className="flex flex-col w-full items-center">
                <div className="flex justify-between   w-full">
                  <div>خلاصه</div>
                  <button className="flex ">
                    <div>قیمت</div>
                    <div className="flex items-center">
                      <IoIosAdd style={{ color: "#DD7475" }} />
                    </div>
                  </button>
                </div>
                {/* ================================================================= */}
                <div className="flex justify-between   w-full">
                  <div>ترجمه</div>
                  <div className="flex ">
                    <div>قیمت{summary}</div>
                    <button onClick={handelMAth} className="flex items-center">
                      <IoIosAdd style={{ color: "#DD7475" }} />
                    </button>
                  </div>
                </div>
                  {/* ================================================================= */}

                <div style={{backgroundColor:"#FCDCDC"}} className="flex justify-between pl-2  w-[18em]">
                  <div> قیمت کل</div>
                  <div> قیمت:{total}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// status {1 ترجمه 0 خلاصه 2 اصلی }
