import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Book } from "../Data/interfaceDATA";
import axioshandel from "../login/header";
import { useEffect } from "react";

type TypeDeletecartItem = {
  file_id: number;
};

type datasubmit = {
  book_id: number;
  file_id: string[];
  description: string;
};

export function useFiltersatus(book: Book | undefined, statuses: number[]) {
  const queryClient = useQueryClient();
  const deleteCartItem = useMutation<
    TypeDeletecartItem,
    Error,
    TypeDeletecartItem
  >({
    mutationFn: (product) =>
      axioshandel.delete(`/basket/Single/${product.file_id}`),
    onSuccess: () => {
      toast.success("کارت با موفقیت از سبد خرید پاک شد");
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
    onError: () => {
      toast.error("عملیات پاک کردن از سبد خرید نا موفق بود");
    },
  });

  const addCartMutation = useMutation<datasubmit, Error, datasubmit>({
    mutationFn: (newCart) => axioshandel.post("/basket", newCart),
    onSuccess: () => {
      toast.success("کارت با موفقیت اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
    onError: () => {
      toast.error("عملیات اضافه کردن به سبد خرید ناموفق بود");
    },
  });

  const { data: basket } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data.data),
  });
  const handleSubmit = () => {
    if (!book) return;
    const exist = basket?.some((item) => item.file.status === 1);
    const filteredFiles =
      book.files?.filter((item) => statuses.includes(item.status)) || [];
    if (!exist && filteredFiles.length > 0) {
      addCartMutation.mutate({
        book_id: book.id,
        file_id: filteredFiles.map((item) => item.id.toString()),
        description: "  ",
      });
    }

    const deleteCartItemData = basket?.find(
      (item) => book?.files?.some((file) => file.id === item.file.id) 
    );
    if (deleteCartItemData) {
      deleteCartItem.mutate({ file_id: deleteCartItemData.file_id });
    }
  };
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return { handleSubmit };
}
