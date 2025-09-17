import { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Book } from "../Data/interfaceDATA";
import { useSavestatus } from "@src/hooks/useSavestatus";

type Props = {
  book: Book;
};

export default function SaveIcon({ book }: Props) {
  const { handleSubmit, isSaved } = useSavestatus(book);

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
        className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-dotted border-[#1f5566]"
           style={{
          backgroundColor: "#95BCCC",
          opacity: "0.5",
          width: "25px",
          height: "25px",
        }}
      >
        <button className="flex items-center" onClick={handleClick}>
          {exist ? (
            <BookmarkIcon className="w-4 h-4 " sx={{ color: "#1f5566" }} />
          ) : (
            <BookmarkBorderIcon className="w-4 h-4 " sx={{ color: "#1f5566" }} />
          )}
        </button>
      </div>
    </div>
  );
}
