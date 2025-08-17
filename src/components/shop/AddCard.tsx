import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
type datasubmit = {
  book_id: number;
  file_id:number[];
};
type TypeDeletecartItem = {
  file_id: number;
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

  const exist =
    Array.isArray(basket) && basket.some((item) => item.book_id === book.id);

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
      console.log(book);
      
  const handelsubmit = (id: number) => {
    const exist =  Array.isArray(basket) && basket.some((item) => item.book_id === book.id);
     const  test = book.files.filter((item) => item.status===2)
     console.log(test);
     
    if (!exist && test.length > 0 ) {

        addcartMutation.mutate({
          book_id: book.id,
          file_id: test.map((item)=> item.id) ,
        });
      }

    const deletecartitem = basket?.find((item) => item.book_id === book.id);

    if (deletecartitem) {
      DeletecartItem.mutate({
        file_id: deletecartitem.file_id,
      });
    }
  };

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
          <Button>
            <ShoppingCartIcon
              className="w-[16px] "
              sx={{ color: "#1f5566", opacity: "1" }}
            />
          </Button>
        ) : (
          <Button disabled>
            <LocalGroceryStoreOutlinedIcon
              className="w-[16px] "
              sx={{ color: "#1f5566", opacity: "1" }}
            />
          </Button>
        )}
      </button>
    </div>
  );
}
