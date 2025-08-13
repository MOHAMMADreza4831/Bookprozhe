import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { MdShoppingCart } from "react-icons/md";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";
import { error } from "console";


type datasubmit= { 
  book_id:string 
  file_id:string[]
}

export default function Addcard(book:Book){ 

  const queryaclient = useQueryClient() ; 

   const addcartMutatiom = useMutation<datasubmit,Error,datasubmit>({

    mutationFn:(newcart)=>{ 
      return axioshandel.post("/basket",newcart);

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
      file_id:[]
    })

   }

  return (
<>

<button onClick={()=>handelsubmit(book.id)}>
add
</button>


</>
  )
}
