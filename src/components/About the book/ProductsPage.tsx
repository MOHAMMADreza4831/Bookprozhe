import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Data/Bookspage";
import { IoChevronBackOutline } from "react-icons/io5";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationItem } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "@src/routes/paths";
import { Book } from "../Data/interfaceDATA";
import axios from "axios";

export default function ProductsPage() {
  const itemsPerPage = 5; 
  const { pageNumber } = useParams();
  const Navigate = useNavigate();
  const currentPage = parseInt(pageNumber || "1", 10);

  const [books, setBooks] = useState<Book[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    axios.get(`http://10.10.50.76:8001/api/books`).then((res) => {
      setBooks(res.data.data);
      const totalItems = res.data.data.length;
      const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(calculatedTotalPages);
    });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = books.slice(startIndex, endIndex);

  return (
    <>
      <div className="sticky z-10 w-full h-16 bg-[#95bccc]">
        <div className="flex py-4">
          <Link to={PATH_DASHBOARD.navigator.home} className="flex">
            <IoChevronBackOutline
              style={{ color: "white" }}
              className="rotate-180 size-5"
            />
            <span style={{ color: "white" }} className="font-bold">
              بازگشت
            </span>
          </Link>
        </div>
      </div>

      <div className="z-0">
        <div className="flex flex-wrap gap-4 pt-10 justify-start pr-4 ">
          {currentBooks.map((book) => (
            <ProductCard
              key={book.id}
              id={book.id}
              title={book.title}
              description={book.description}
              img={book.image}
              type={book.type}
              rating={book.rate}
            />
          ))}
        </div>

        <div className="flex justify-center  mt-6">
          <Stack dir="rtl">
            <Pagination
              count={totalPages}
              page={currentPage}
              variant="outlined"
              color="primary"
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: KeyboardArrowRightIcon,
                    next: KeyboardArrowLeftIcon,
                  }}
                  {...item}
                />
              )}
              onChange={(_, value) => {
                Navigate(`/products/newbook/${value}`);
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
}
