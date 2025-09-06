import { Button } from "@mui/material";
import { Book } from "@src/components/Data/interfaceDATA";
import axioshandel from "@src/components/login/header";
import { useQuery } from "@tanstack/react-query";
type datatype = {
  book_id: string;
  file_id: number;
};

export default function Button_index({ item }: datatype) {
  const handleDownload = (data: datatype) => {
    axioshandel
      .post("/book-order/download", {
        book_id: data?.book_id?.toString(),
        file_id: data.file_id,
      })

      .then((res) => {
        const fileUrl = res?.data;
        if (fileUrl) {
          window.open(fileUrl, "_blank");
        } else {
          console.error("❌ fileUrl تعریف نشده");
        }
      })
      .catch((err) => {
        console.error("دانلود موفق نبود", err);
      });
  };

  const {
    data: books,
  } = useQuery<Book[]>({
    queryKey: ["downlod"],
    queryFn: () => axioshandel.get("/book-order").then((res) => res.data.data),
  });
  console.log(books);

  return (
    <>
      <div key={item.book_id} className="w-full">
        <Button
          onClick={() => handleDownload(item)}
          sx={{ backgroundColor: "#95BCCC", color: "white" }}
          className="w-full"
        >
          {item.file.status ===2 ? "نسخه اصلی" :"نسخه فرعی"}
        </Button>
      </div>
    </>
  );
}
