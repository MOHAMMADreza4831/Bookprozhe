import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";
import { MdShoppingCart } from "react-icons/md";

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
  console.log(basket, "ditail");

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

  const handelsubmit = async () => {
    const exist = await basket?.some((item) => item.book_id === book.id);

    if (exist) {
      toast.info("این کارت قبلا اضافه شده است");
      return;
    }
    await addcartMutation.mutate({
      book_id: book.id,
      file_id: ["2"],
    });
  };

  return (
    <>
        <div
          className="flex justify-between items-center"
          style={{ height: "100%" }}
        >
          <button
            className="rounded-full flex justify-center  "
            style={{
              backgroundColor: "#F0A9AA",
              opacity: "0.7",
              width: "25px",
              height: "25px",
            }}
          >
            <MdShoppingCart
              className="w-[16px]"
              sx={{
                color: "#9a0003",
                opacity: "1",
              }}
            />
          </button>
        </div>    </>
  );
}
