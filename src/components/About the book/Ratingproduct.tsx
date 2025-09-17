import Rating from "@mui/material/Rating";
import { Book } from "../Data/interfaceDATA";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axioshandel from "../login/header";
import { Box } from "@mui/material";

type datatype = {
  book: Book;
};

export default function HoverRating({ book }: datatype) {
  const [checkRating, setcheckRating] = useState<boolean>(false);
  const [value, setValue] = useState<number | null>(null);
  const mutation = useMutation({
    mutationFn: (newData) => axioshandel.get(`/books/rate/${value}/${book.id}`),
    onSuccess: () => {},
  });
  const { data: data } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: () => axioshandel.get("/books").then((res) => res.data.data),
  });
  useEffect(() => {
    if (book) {
      setValue(book.rate ?? null);
    }
  }, [book]);

  const { data: userRating } = useQuery<number>({
    queryKey: ["books", book.id],
    queryFn: () =>
      axioshandel
        .get(`/books/rates/user/${book.id}`)
        .then((res) => res.data.data),
  });
console.log(userRating)

  return (
    <>
      <Box className="flex  " >
        <Rating
          name="simple-uncontrolled"
          className="flex flex-row-reverse  "
          precision={1}
          onChange={(event, newValue) => {
            setcheckRating(true);
            setValue(newValue);
            if (newValue !== null) mutation.mutate(newValue);
          }}
          defaultValue={2}
        />
        <Box  className="flex items-center " >{userRating}</Box>
      </Box>
    </>
  );
}
