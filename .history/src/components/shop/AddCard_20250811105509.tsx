import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { MdShoppingCart } from "react-icons/md";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";
import { error } from "console";


type

export default function Addcard(){ 

  const queryaclient = useQueryClient() ; 

   const addcartMutatiom = useMutation<Book[]>({

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

   const handelsubmit = ()=>{



   }

  return (
<>

salam


</>
  )
}
