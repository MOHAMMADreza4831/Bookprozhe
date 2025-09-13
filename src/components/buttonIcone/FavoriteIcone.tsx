import { FavoriteBorder } from "@mui/icons-material";
import { Book } from "../Data/interfaceDATA";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Usefaverit } from "@src/hooks/usestateFavorit";

type FavoriteIconProps = {
  book: Book;
};
export default function Favoritesicone({ book }: FavoriteIconProps) {
  const { handleSubmit, isSaved } = Usefaverit(book);

  const [exist, setExist] = useState(isSaved);

  const handleClick = () => {
    handleSubmit();
    setExist((prev) => !prev);
  };

  useEffect(() => {
    setExist(isSaved);
  }, [isSaved]);

  return (
    <div className="flex justify-center">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-dotted border-[#DD7475]"
        style={{ backgroundColor: "#FCDCDCCC" }}
      >
        <button className="flex items-center" onClick={handleClick}>
          {exist ? (
            <FaHeart className="w-4 h-4" style={{ color: "#DD7475" }} />
          ) : (
            <FavoriteBorder className="w-4 h-4" sx={{ color: "#DD7475" }} />
          )}
        </button>
      </div>
    </div>
  );
}
