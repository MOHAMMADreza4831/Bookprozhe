import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axioshandel from "@src/components/login/header";
import { motion, AnimatePresence } from "framer-motion"; // برای انیمیشن نرم
import MultipleSelect from "./Select";
// import { Box } from "@mui/material";
type Book = {
  id: number;
  title: string;
  author: string;
};

export default function SearchBook() {
  const [searchField, setSearchField] = useState<"title" | "author">("title");
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setsearch] = useState("  ");
  const [isActive, setisActive] = useState(false);
  const mutation = useMutation({
    mutationFn: (searchValue: string) =>
      axioshandel.get(
        `/books?search=${JSON.stringify([{ field: searchField, value: searchValue }])}`
      ),
    onSuccess: (data) => {
      console.log(data.data);
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed  inset-0 bg-black backdrop-blur-sm z-10 "
            onClick={() => setisActive(false)}
          />
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
          <InputBase
            inputRef={isref}
            placeholder="جستجوی کتاب..."
            onFocus={() => setisActive(true)}
            className="flex-1 text-gray-800 "
          />
          <IconButton className="">
            <div>

            </div>
            <div>
              <SearchIcon className="text-[#6798ed]" />
            </div>
          </IconButton>
        </Paper>
      </motion.div>
    </div>
  );
}
