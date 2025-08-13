import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
type datasubmit = {
  book_id: number;
  file_id: string[];
};
type TypeDeletecartItem = {
  order_id: number;
  id: number;
};
type Props = {
  book: Book;
};

export default function Addcard({ book }: Props) {
  const queryinvalid = useQueryClient();
  const { data: basket } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data.data),
  });
  const exist = basket?.some((item) => item.book_id === book.id);

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
  const DeletecartItem = useMutation<Error>({
    mutationFn: (order_id: number, id: number) => {console.log(order_id);
    
      return axioshandel.delete(`/basket/Single/${order_id}/${id}`);
    },
    onSuccess: () => {
      toast.success("کارت با موفقیت از سبد خرید پاک شد  ");
    },

    onError: () => {
      toast.error("عملیات پاک کردن از سبد خرید نا موفق بود   ");
      console.log("talking server");
    },
  });

  const handelsubmit = (id: number) => {
    const exist = basket?.some((item) => item.book_id === book.id);

    if (!exist) {
      addcartMutation.mutate({
        book_id: book.id,
        file_id: ["2"],
      });
    }

    console.log(book.id, "salam");

    const deletecartitem = basket?.find((item) => item.book_id === book.id);
    console.log(deletecartitem);

    if (deletecartitem) {
      console.log("dorost ");

      DeletecartItem.mutate({
        order_id: deletecartitem.order_id,
        id: deletecartitem.file?.id,
      });
    }
  };

  console.log(basket);

  return (
    <div
      className="flex justify-between items-center "
      style={{ height: "100%" }}
    >
      <button
        onClick={() => handelsubmit(book.order_id)}
        className="rounded-full flex  justify-center   "
        style={{
          backgroundColor: "#95BCCC",
          opacity: "0.5",
          width: "25px",
          height: "25px",
        }}
      >
        {exist ? (
          <ShoppingCartIcon
            className="w-[16px] "
            sx={{ color: "#1f5566", opacity: "1" }}
          />
        ) : (
          <LocalGroceryStoreOutlinedIcon
            className="w-[16px] "
            sx={{ color: "#1f5566", opacity: "1" }}
          />
        )}
        {/* <LocalGroceryStoreOutlinedIcon
          className="w-[16px] "
          style={{
            color: "#1f5566",
            opacity: "1",
          }}
        /> */}
      </button>
    </div>
  );
}
