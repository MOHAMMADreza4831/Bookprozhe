import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { MdShoppingCart } from "react-icons/md";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";
import { error } from "console";
import { string } from "zod";


type datasubmit= { 
  book_id:string 
  file_id:string[]
}

export default function Addcard(book:Book){ 

  const queryaclient = useQueryClient() ; 

   const addcartMutatiom = useMutation<datasubmit,Error,datasubmit>({

    mutationFn:(book_id : , file_id)=>{ 
      return axioshandel.post("/basket", {
        book_id : book_id,
        file_id
      });
      // console.log(newcart,"newcart");
      
      

    }, 

    onSuccess:(data) =>{
      console.log("talking server", data);
      toast.success("کارت با موفقیت اضافه شد ")
      
    },
    
    onError:(error)=>{
      toast.error("عملیات ناموفق بود ") ;
              console.log("talking server",error.message);

    }
   }) 

   const handelsubmit = (bookId:string)=>{
    addcartMutatiom.mutate({
      book_id:bookId,
      file_id:["2"]
    })
    console.log(addcartMutatiom,"test");
    
   }

  return (
<>

<button onClick={()=>handelsubmit(book.id)}>
add
</button>


</>
  )
}
