import { useQuery } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";






function MathPrice () {
    
    
      const {
    data: basket,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data),
  });
    
    const mathtest = basket?.data.map((item)=>item.book_files)  
  console.log(mathtest,"math");



  return(
    <>
    
    
    </>
  )
}