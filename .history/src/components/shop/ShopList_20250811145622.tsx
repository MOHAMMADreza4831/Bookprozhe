import { Book } from "../Data/interfaceDATA";
import { IoChevronBackOutline } from "react-icons/io5";
import { PATH_DASHBOARD } from "@src/routes/paths";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axioshandel from "../login/header";


export default function Shop() {
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
  //   if (options.translation) total += book.priceTranslation;
  //   if (options.summari) total += book.pricesummari;
  //   return total;
  // };

  const {
    data: basket,
    isLoading,
    isError,
    
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data)
    
  });

  if (isLoading) return <p>...loding</p>;
  if (isError) return <p>Erroe</p>;
  console.log(basket,"salam");
  
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

      <div className="px-2 py-2 bg-slate-100 ">
        { basket?.map((book:Book) => (
          <div
            key={book.id}
            className="grid grid-cols-[1fr,3fr]  my-3  gap-2 shadow-lg rounded-b-2xl"
          >
            <div className="  w-[] h-[100px] justify-center items-center    ">
              <img
                src={book.image}
                alt={book.title}
                className="flex  object-contain w-full h-full p-3"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// status {1 ترجمه 0 خلاصه 2 اصلی }
