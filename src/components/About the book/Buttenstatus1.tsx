import { Button } from "@mui/material";
import axioshandel from "../login/header";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";
type datasubmit = {
  book_id: number;
  file_id: string[];
};
type TypeDeletecartItem = {
  file_id: number;
};

type props = {
  book: Book;
};

export default function Buttonstatus1({ book }: props) {
  const queryinvalid = useQueryClient();

  const { data: basket } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data.data),
  });
  console.log(basket);
  const exist =
    Array.isArray(basket) &&
    basket.some((item) => item.book_id === book.id && item.file.status === 0);

  const addcartMutation = useMutation<datasubmit, Error, datasubmit>({
    mutationFn: (newcart: datasubmit) => {
      return axioshandel.post("/basket", newcart);
    },

    onSuccess: () => {
      toast.success("کارت با موفقیت اضافه شد ");
      queryinvalid.invalidateQueries({ queryKey: ["basket"] });
    },

    onError: () => {
      toast.error("عملیات ناموفق بود ");
      console.log("talking server");
    },
  });
  const DeletecartItem = useMutation<
    TypeDeletecartItem,
    Error,
    TypeDeletecartItem
  >({
    mutationFn: (product: TypeDeletecartItem) => {
      return axioshandel.delete(`/basket/Single/${product.file_id}`);
    },
    onSuccess: () => {
      toast.success("کارت با موفقیت از سبد خرید پاک شد  ");
      queryinvalid.invalidateQueries({ queryKey: ["basket"] });
    },

    onError: () => {
      toast.error("عملیات پاک کردن از سبد خرید نا موفق بود   ");
      console.log("talking server");
    },
  });
  const handelsubmit = (id: number) => {
    const exist =
      Array.isArray(basket) && basket.some((item) => item.book_id === book.id&&item.file.status===0);
    const test = book.files.filter((item) => item.status === 0);
    if (!exist && test.length > 0) {
      addcartMutation.mutate({
        book_id: book.id,
        file_id: test.map((item) => item.id.toString()),
        description: "",
      });
    }
    const deletecartitem1 = basket?.find((item) => item.book_id === book.id&&item.file.status===0);

    if (deletecartitem1 &&deletecartitem1.file.status===0 ) {
      DeletecartItem.mutate({
        file_id: deletecartitem1.file_id,
      });
    }
  };

  return (
    <div className="flex bg-[#72a0b3] rounded-[9px] p-3 ">
      <button onClick={() => handelsubmit(book.order_id)}>
        {exist ? <p>پاک کردن ترجمه</p> : <p>اضافه کردن ترجمه</p>}
      </button>
    </div>
  );
}
