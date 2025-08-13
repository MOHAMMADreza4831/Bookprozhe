import { Book } from "../Data/interfaceDATA";
import { IoIosAdd } from "react-icons/io";
import { useMutation, useQuery } from "@tanstack/react-query";
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


  const { data: basket } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data.data),
  });



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



  const handleAddTranslation = () => {
          console.log(addcartMutation,"plus");

      addcartMutation.mutate({ 
          book_id: book.id,
          file_id: ["1"],
        }
    )
    
    
  };

  const handleAddSummary = () => {
      addcartMutation.mutate({ 
          book_id:book.id,
          file_id: [``],
        }
    )

  };


  return (
           <div className="flex flex-col w-full items-center">
                <div className="flex justify-between   w-full">
                  <div>خلاصه</div>
                  <button className="flex " onClick={handleAddSummary}>
                    <div>قیمت</div>
                    <div className="flex items-center">
                      
                      <IoIosAdd style={{ color: "#DD7475" }} />
                      
                    </div>
                  </button>
                </div>
                <div className="flex justify-between   w-full">
                  <div>ترجمه</div>
                  <div className="flex ">
                    <div>قیمت</div>
                    <button  className="flex items-center" onClick={handleAddTranslation}>
                      <IoIosAdd style={{ color: "#DD7475" }} />
                    </button>
                  </div>
                </div>
                <div style={{backgroundColor:"#FCDCDC"}} className="flex justify-between pl-2  w-[18em]">
                  <div> قیمت کل</div>
                  <div> قیمت:{book.total}</div>
                </div>
              </div>
  );
}
