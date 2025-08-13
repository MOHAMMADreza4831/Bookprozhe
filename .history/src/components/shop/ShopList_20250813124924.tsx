import { Book } from "../Data/interfaceDATA";
import { IoChevronBackOutline } from "react-icons/io5";
import { PATH_DASHBOARD } from "@src/routes/paths";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axioshandel from "../login/header";
import { Divider } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import { useState, useEffect } from "react";

export default function Shop() {
  const [cartExtras, setCartExtras] = useState<{
    [bookId: string]: { summary: boolean; translation: boolean; extraPrice: number };
  }>({});

  const { data: basket, isLoading, isError } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data),
  });

  const addExtra = (bookId: string, type: "summary" | "translation", price: number) => {
    setCartExtras(prev => {
      const current = prev[bookId] ?? { summary: false, translation: false, extraPrice: 0 };
      if (current[type]) return prev; // قبلاً اضافه شده
      return {
        ...prev,
        [bookId]: { ...current, [type]: true, extraPrice: current.extraPrice + price }
      };
    });
  };




  if (isLoading) return <p>...loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <div>
        <div className="sticky flex-row z-10 w-full h-16" style={{ backgroundColor: "#95bccc" }}>
          <div className="flex py-4">
            <Link to={PATH_DASHBOARD.navigator.home} className="flex">
              <IoChevronBackOutline style={{ color: "white" }} className="rotate-180 size-5" />
            </Link>
            <div>
              <span style={{ color: "white" }} className="font-bold">
                سبد خرید
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 py-2 -slate-100">
        {basket?.data.map(book => {
          const extra = cartExtras[book.id]?.extraPrice ?? 0;
          const totalCardPrice = book.price + extra;

          return (
            <div key={book.id} className="grid grid-cols-[1fr,3fr] bg-slate-500 my-3 h-[150px] gap-2 shadow-lg rounded-b-2xl">
              <div className="justify-center items-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="flex top bg-black object-contain h-full"
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1em",
                    display: "flex",
                    width: "19em",
                    whiteSpace: "pre",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراح
                </div>
                <Divider variant="middle" className="pt-4" />
                <div className="flex flex-col w-full items-center">
                  {/* خلاصه */}
                  <div className="flex justify-between w-full">
                    <div>خلاصه</div>
                    <button
                      className="flex items-center"
                      onClick={() => {
                        const price = book.book_files
                          .filter(f => f.status === 0)
                          .reduce((acc, f) => acc + f.price, 0);
                        addExtra(book.id, "summary", price);
                      }}
                    >
                      <IoIosAdd style={{ color: "#DD7475" }} />
                      <div>قیمت</div>
                    </button>
                  </div>

                  {/* ترجمه */}
                  <div className="flex justify-between w-full mt-2">
                    <div>ترجمه</div>
                    <button
                      className="flex items-center"
                      onClick={() => {
                        const price = book.book_files
                          .filter(f => f.status === 1)
                          .reduce((acc, f) => acc + f.price, 0);
                        addExtra(book.id, "translation", price);
                      }}
                    >
                      <IoIosAdd style={{ color: "#DD7475" }} />
                      <div>قیمت</div>
                    </button>
                  </div>

                  <div style={{ backgroundColor: "#FCDCDC" }} className="flex justify-between pl-2 w-[18em] mt-2">
                    <div>قیمت کل کارت</div>
                    <div>{totalCardPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </>
  );
}

// status {0: خلاصه, 1: ترجمه, 2: اصلی}
