import { useQuery } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";
import axioshandel from "../login/header";




function Mathprice () {
    

      const {
    data: basket,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data),
  });


  const handelMAth = ()=> {
  let summari = 0;

  basket?.data.forEach(item => {
  item.book_files.forEach(file => {
    if (file.status === 2) {
      summari += file.price;
      setsummary(summari)
    }
  });
});

total+=summari

}


    return (
        <>
        </>
    ) 
}