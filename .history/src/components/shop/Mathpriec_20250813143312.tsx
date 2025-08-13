import { Book } from "../Data/interfaceDATA";
import { IoIosAdd } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axioshandel from "../login/header";
type datasubmit = {
  book_id: number;
  file_id: string[];
};

type datatype = { 
    book:Book
}

export default function MathPrice({book}:datatype) {

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



  const handleAddTranslation = (id:number) => {
      
      addcartMutation.mutate({ 
          book_id: book.id,
          file_id: [book.book_files?],
        }
    )
    console.log(addcartMutation);
    
    console.log("test");
  };

  const handleAddSummary = () => {

  };


  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-between w-full">
        <div>خلاصه</div>
        <button className="flex items-center" onClick={handleAddSummary}>
          <IoIosAdd style={{ color: "#DD7475" }} />
          <div>قیمت</div>
        </button>
      </div>

      <div className="flex justify-between w-full mt-2">
        <div>ترجمه</div>
        <button className="flex items-center" onClick={handleAddTranslation}>
          <IoIosAdd style={{ color: "#DD7475" }} />
          <div>قیمت</div>
        </button>
      </div>

      <div style={{ backgroundColor: "#FCDCDC" }} className="flex justify-between pl-2 w-[18em] mt-2">
        <div>قیمت کل کارت</div>
        <div>{}</div>
      </div>
    </div>
  );
}
