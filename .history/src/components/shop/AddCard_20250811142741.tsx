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

    onSuccess: (data) => {
      console.log("talking server", data);
      toast.success("کارت با موفقیت اضافه شد ");
      queryaclient.invalidateQueries(["basket"])
    },

    onError: (error) => {
      toast.error("عملیات ناموفق بود ");
      console.log("talking server", error.message);
    },
  });

  const handelsubmit = (book: Book,newbooks:Book) => {


    const exist = books?.some(book=>book.book_id===newbooks.  )
    
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
