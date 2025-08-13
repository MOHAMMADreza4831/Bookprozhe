import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";

type datasubmit = {
  book_id: number;
  file_id: string[];
};

type Props = {
  book: Book;
  basket:Book[];
};

export default function Addcard({ book,basket }: Props) {
  const queryaclient = useQueryClient();

  const addcartMutation = useMutation<datasubmit, Error, datasubmit>({
    mutationFn: (newcart: datasubmit) => {
      return axioshandel.post("/basket", newcart);
    },


    onSuccess: () => {
      toast.success("کارت با موفقیت اضافه شد ");

    },

    onError: () => {
      toast.error("عملیات ناموفق بود ");
      console.log("talking server");
    },
  });

  const handelsubmit = (book: Book) => {

    const exist = basket?.some(item=>item.id===book.id)
    if (exist) {
      toast.info("این کارت قبلا اضافه شده است")
      return
    }
    
    addcartMutation.mutate({
      book_id: book.id,
      file_id: ["2"],
    });
    console.log("test");
  };

  return (
    <>
      <button onClick={() => handelsubmit(book)}>add</button>
    </>
  );
}
