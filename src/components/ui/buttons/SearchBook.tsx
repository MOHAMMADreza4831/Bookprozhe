import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axioshandel from "@src/components/login/header";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion"; 
import { Book } from "@src/components/Data/interfaceDATA";
import Divider from "@mui/material/Divider";

export default function SearchBook() {
  const invalid = useQueryClient();

  const [searchField, setSearchField] = useState<"title" | "author">("title");
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setsearch] = useState("  ");
  const [check, setcheck] = useState(false);
  const [isActive, setisActive] = useState(false);
  const mutation = useMutation({
    mutationFn: (searchValue: string) =>
      axioshandel.get(
        `/books?search=${JSON.stringify([{ field: searchField, value: searchValue }])}`
      ),
    onSuccess: (data) => {
      setBooks(data.data.data);
      console.log(books);
    },
  });
  const isref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (isActive && isref.current) {
      isref.current.focus();
    }
  }, [isActive]);

  const placeholderText =
    searchField === "title"
      ? "نام کتاب را وارد کنید"
      : "نام نویسنده را وارد کنید";
  return (
    <div className="relative  flex flex-col items-center justify-center w-full ">
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-10"
              onClick={() => setisActive(false)}
            />

            <div
              style={{
                maxHeight: "400px",
                overflowY: "auto",
              }}
              className=" books-container fixed top-[100px] left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-[450px] bg-white rounded-xl shadow-lg p-4"
            >
              {books.length > 0 ? (
                books.map((item) => (
                  <>
                    <Divider sx={{ backgroundColor: "#636e72" }} />
                    <div
                      key={item.id}
                      className="grid grid-cols-[1fr,3fr]    my-3 h-[150px] gap-2 shadow-xl mx-5  rounded-b-2xl"
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
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراح
                        </div>
                        <div>نویسنده:{item.author}</div>
                        <div>قیمت : 220 تومان </div>
                        <div className="flex w-full    justify-center gap-3 ">
                          ّ
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">
                  نتیجه‌ای پیدا نشد
                </p>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={isActive ? { y: "-50px", scale: 1.1 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="z-20 w-[100%] sm:w-[95%]"
      >
        <Paper
          elevation={isActive ? 5 : 3}
          className="flex items-center px-4 py-2 rounded-2xl transition-all duration-300"
        >
          <Box className="px-2">
            <InputBase
              inputRef={isref}
              onFocus={() => setisActive(true)}
              className="flex-1   text-gray-800 "
              onChange={(e) => {
                const value = e.target.value;
                setsearch(value);

                if (value.trim() !== "") {
                  mutation.mutate(value);
                } else {
                  setBooks([]);
                }
              }}
              sx={{ ml: 5, flex: 1 }}
              placeholder={placeholderText}
            />

            <select
              value={searchField}
              onChange={(e) =>
                setSearchField(e.target.value as "title" | "author")
              }
            >
              <option value="title">عنوان کتاب</option>
              <option value="author">نویسنده</option>
            </select>
          </Box>
          <IconButton
            type="submit"
            sx={{ p: "1px" }}
            className="rounded-full p-[8px] bg-[#6798ed]"
            aria-label="search"
          >
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          ></IconButton>
        </Paper>
      </motion.div>
    </div>
  );
}
