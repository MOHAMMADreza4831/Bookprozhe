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
import axioshandel from "../login/header";

export default function ProductsPage() {
  const itemsPerPage = 5;

  const { category, pageNumber } = useParams<{ category: string; pageNumber: string }>();
  const navigate = useNavigate();
  const currentPage = parseInt(pageNumber || "1", 10);

  const [books, setBooks] = useState<Book[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  // بارگذاری کتاب‌ها بر اساس دسته
  useEffect(() => {
    if (!category) return;

    axioshandel.get(`/books?category=${category}`).then((res) => {
      setBooks(res.data.data || []);
      const totalItems = res.data.data?.length || 0;
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
    });
  }, [category]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = books.slice(startIndex, endIndex);

  return (
    <>
     
<div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <button
            onClick={() => navigate( PATH_DASHBOARD.navigator.home)}
            style={{ color: "white" }}
            className="font-bold flex "
          >
            <IoChevronBackOutline
              style={{ color: "white" }}
              className="  rotate-180 size-5 "
            />
            بازگشت
          </button>
        </div>
      </div>

     
      <div className="z-0">
        {currentBooks.length === 0 ? (
          <p className="text-center mt-10 font-bold">کتابی برای این دسته یافت نشد</p>
        ) : (
          <div className="flex flex-wrap gap-4 pt-10 justify-start pr-4">
            {currentBooks.map((book: Book) => (
              <ProductCard key={book.id} book={book} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
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
                  if (!category) return;
                  navigate(`/products/${category}/${value}`);
                }}
              />
            </Stack>
          </div>
        )}
      </div>
    </>
  );
}
