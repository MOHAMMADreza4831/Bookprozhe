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

  console.log(exist);

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
  const Delete = useMutation<datasubmit, Error, datasubmit>({
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

  // useEffect( () => {
  //   setIcon(exist)
  // console.log(exist);

  // }, [])

  const handelsubmit = async () => {
    const exist = basket?.some((item) => item.book_id === book.id);

    console.log(handelsubmit,"submit");
    
    
    if (exist) {
      toast.info("این کارت قبلا اضافه شده است");

      return;
    } 
      addcartMutation.mutate({
        book_id: book.id,
        file_id: ["2"],
      });
  };

  return (
    <div
      className="flex justify-between items-center "
      style={{ height: "100%" }}
    >
      <button
        onClick={handelsubmit}
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
