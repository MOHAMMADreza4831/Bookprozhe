import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import axioshandel from "../login/header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";

type datatype = {
  book: Book;
};

export default function HoverRating({ book }: datatype) {
  const [value, setValue] = React.useState<number | null>(book?.rate ?? null);
  const [hover, setHover] = React.useState<number>(-1);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newData) => axioshandel.get(`/books/rate/${value}/${book.id}`),
    onSuccess: () => {
      console.log("first");
      console.log(value);
    },
  });
  const { data: data } = useQuery<Book[]>({
    queryKey: ["rate"],
    queryFn: () => axioshandel.get("/books").then((res) => res.data.data),
  });
  React.useEffect(() => {
    if (book) {
      setValue(book.rate ?? null);
    }
  }, [book]);

  if (!book) return <div>Loading...</div>;

  return (
    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
      <Rating
        name="hover-feedback"
        className="flex flex-row-reverse"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue !== null) mutation.mutate(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{(hover !== -1 ? hover : value)?.toFixed(2)}</Box>
    </Box>
  );
}
