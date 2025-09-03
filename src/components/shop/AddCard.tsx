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
        onClick={() => handleClick()}
        className="rounded-full w-8 h-8 flex items-center justify-center border-2 border-dotted border-[#1f5566]"
        style={{
          backgroundColor: "#95BCCC",
          opacity: "0.5",
        }}
      >
        {exist ? (
          <ShoppingCartIcon
            className="w-[16px]  border-2 border-dotted border-black"
            sx={{ color: "#1f5566", opacity: "1" }}
          />
        ) : (
          <LocalGroceryStoreOutlinedIcon
            className="w-6 h-6"
            sx={{ color: "#1f5566", opacity: "1" }}
          />
        )}
      </button>
    </div>
  );
}
