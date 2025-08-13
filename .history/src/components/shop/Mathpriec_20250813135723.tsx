import { useQuery } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";
import axioshandel from "../login/header";




export default function Mathprice () {
    

      const {
    data: basket,
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data),
  });




    return (
        <>




        </>
    ) 
}