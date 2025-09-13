import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewCard from "@src/components/Homecomponents/NewCard";
import HistoricalCard from "@src/components/Homecomponents/HistoricalCard";
import RomanCard from "@src/components/Homecomponents/RomanCard";
import ShortStoriesCard from "@src/components/Homecomponents/ShortStoriesCard";
import { IoChevronBackOutline } from "react-icons/io5";
import { PATH_DASHBOARD } from "@src/routes/paths";
import axioshandel from "@src/components/login/header";
import { Book } from "@src/components/Data/interfaceDATA";

type CategoryComponentProps = {
  books: Book[];
};

const categoryMap: Record<string, React.FC<CategoryComponentProps>> = {
  newbook: NewCard,
  historicalbook: HistoricalCard,
  roman: RomanCard,
  shortstory: ShortStoriesCard,
};

export default function ProductList() {
  const { category, page } = useParams<{ category: string; page: string }>();
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    axioshandel
      .get(`/books?category=${category}`)
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setBooks([]);
        setLoading(false);
      });
  }, [category]);

  const CategoryComponent =
    categoryMap[category || ""] || (() => <p>دسته‌ای یافت نشد</p>);

  return (
    <div>
      <div
        className="sticky z-10 w-full h-16 flex items-center"
        style={{ backgroundColor: "#95bccc" }}
      >
        <button
          onClick={() => navigate(PATH_DASHBOARD.navigator.home)}
          style={{ color: "white" }}
          className="font-bold flex items-center px-4"
        >
          <IoChevronBackOutline
            style={{ color: "white" }}
            className="rotate-180"
          />
          بازگشت
        </button>
      </div>

      <div className="px-4 py-6">
        {loading ? (
          <p>در حال بارگذاری...</p>
        ) : books.length > 0 ? (
          <CategoryComponent books={books} key={category} />
        ) : (
          <p>کتابی یافت نشد</p>
        )}
      </div>
    </div>
  );
}
