import { Book } from "../Data/interfaceDATA";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useFiltersatus } from "../About the book/Filterstatus";
import { useState } from "react";

type Props = {
  book: Book;
};

export default function Addcard({ book }: Props) {
  const [exist, setExist] = useState(false);
  const { handleSubmit } = useFiltersatus(book, [1]);
  const handleClick = () => {
    handleSubmit();
    setExist((prev) => !prev);
  };
  return (
    <div className="flex justify-between  " style={{ height: "100%" }}>
      
      <button
        onClick={()=> handleClick()}
        className="rounded-full flex 
         items-center  justify-center   "
        style={{
          backgroundColor: "#95BCCC",
          opacity: "0.5",
        }}
      >
        {exist ? (
          <ShoppingCartIcon
            className="w-[16px] "
            sx={{ color: "#1f5566", opacity: "1" }}
          />
        ) : (
          <LocalGroceryStoreOutlinedIcon
            className="w-[20px] "
            sx={{ color: "#1f5566", opacity: "1" }}
          />
        )}
      </button>
    </div>
  );
}
