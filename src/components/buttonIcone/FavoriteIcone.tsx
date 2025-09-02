import { FavoriteBorder } from "@mui/icons-material";
import axioshandel from "../login/header";
import { Book } from "../Data/interfaceDATA";
import { useState, useEffect } from "react";

type FavoriteIconProps = {
  book: Book;
};

export default function FavoriteIcon({ book }: FavoriteIconProps) {
  const [liked, setLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const fetchSavedStatus = async () => {
    try {
      const res = await axioshandel.get("/collection-items/نشان شده ها");
      const items = res.data.data || [];
      const exists = items.some((item: any) => item.id === book.id);
      setIsSaved(exists);
      setLiked(exists);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSavedStatus();
  }, []);

  const handleSubmit = async () => {
    try {
      if (isSaved) {
        console.log("این کتاب قبلاً ذخیره شده است.");
        return;
      }

      const res = await axioshandel.post("/collection-items", {
        collection: "1",
        ref_type: "loved",
        ref_id: book.id,
      });
      console.log( book.id);
      
      console.log(res);
      setLiked(true);
      setIsSaved(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center ">
      <div
        className="w-7 h-7 rounded-full flex justify-center"
        style={{ backgroundColor: "#FCDCDCCC" }}
      >
        <button onClick={handleSubmit} className="flex items-center">
          <FavoriteBorder sx={{ color: liked ? "#DD0000" : "#DD7475" }} />
        </button>
      </div>
    </div>
  );
}
