import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";

type datasubmit = {
  book_id: number;
  file_id: string[];
};

type Props = {
  book: Book;
};

export default function Addcard({ book }: Props) {
  const queryinvalid = useQueryClient()
  const { data: basket } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data.data),
  });
  console.log(basket,"ditail");
  
  const addcartMutation = useMutation<datasubmit, Error, datasubmit>({
    mutationFn: (newcart: datasubmit) => {
      return axioshandel.post("/basket", newcart);
    },

    onSuccess: () => {
      toast.success("کارت با موفقیت اضافه شد ");
      queryinvalid.invalidateQueries({  queryKey: ["basket"]})
    },

    onError: () => {
      toast.error("عملیات ناموفق بود ");
      console.log("talking server");
    },
  });

  const handelsubmit = () => {
    
    const exist = basket?.filter((item) => item.book_id == book.book_id) ;
    
    
    console.log(basket ,"test" );
    console.log(exist);

    if (!exist) {
      toast.info("این کارت قبلا اضافه شده است");
      return;
    }
    addcartMutation.mutate({
      book_id: book.id,
      file_id: ["2"],
    });
    console.log("test");
  };

  return (
    <>
      <button onClick={handelsubmit}>add</button>
    </>
  );
}
