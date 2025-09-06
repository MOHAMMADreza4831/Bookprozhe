import { Button } from "@mui/material";
import axioshandel from "../login/header";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";
import { useEffect } from "react";
import queryClient from "@src/utils/queryClient";
type datasubmit = {
  book_id: number;
  file_id: string[];
  description: string;
};
type TypeDeletecartItem = {
  file_id: number;
};

type props = {
  book: Book;
};

export default function Buttonstatus2({ book }: props) {
  const queryinvalid = useQueryClient();
    useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["basket"] });
    queryClient.invalidateQueries({ queryKey: ["basket2"] });
    console.log("salam basket ")
  }, []);

  const { data: basket } = useQuery<Book[]>({
    queryKey: ["basket2"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data.data),
    refetchOnMount: "always",
  });
  console.log(basket);
  const exist =
    Array.isArray(basket) && basket.some((item) => item.book_id === book.id);

  const addcartMutation = useMutation<datasubmit, Error, datasubmit>({
    mutationFn: (newcart: datasubmit) => {
      return axioshandel.post("/basket", newcart);
    },

    onSuccess: () => {
      toast.success("کارت با موفقیت اضافه شد ");
      queryinvalid.invalidateQueries({ queryKey: ["basket2"] });
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
      queryinvalid.invalidateQueries({ queryKey: ["basket2"] });
    },

    onError: () => {
      toast.error("عملیات پاک کردن از سبد خرید نا موفق بود   ");
      console.log("talking server");
    },
  });
  console.log(book);
  const handelsubmit = (id: number) => {
    const exist =
      Array.isArray(basket) && basket.some((item) => item.book_id === book.id);
    const test = book.files.filter((item) => item.status === 1);
    console.log(book);
    if (!exist && test.length > 0) {
      addcartMutation.mutate({
        book_id: book.id,
        file_id: test.map((item) => item.id.toString()),
        description: " ",
      });
    }
    const deletecartitem1 = basket?.find((item) => item.book_id === book.id);

    const hasStatus2 = deletecartitem1?.book_files?.some((f) => f.status === 1);


    if (deletecartitem1 && hasStatus2) {
      DeletecartItem.mutate({
        file_id: deletecartitem1.file_id,
      });
    }
  };

  return (
    <>
      <button onClick={() => handelsubmit(book.order_id)}>
        {exist ? <p>پاک کردن خلاصه</p> : <p>اضافه کردن خلاصه</p>}
      </button>
    </>
  );
}
