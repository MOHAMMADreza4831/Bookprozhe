import { Book } from "@src/components/Data/interfaceDATA";
import axioshandel from "@src/components/login/header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";
type datasubmit = {
  collection: string;
  ref_type: string;
  ref_id: number;
  ref_title: string;
};

export function usefaverit(book: Book) {
  const { data: love } = useQuery<Book[]>({
    queryKey: ["love"],
    queryFn: () =>
      axioshandel
        .get("/collection-items/علاقه مندی ها ")
        .then((res) => res.data.data),
  });
  const queryClient = useQueryClient();

  const isSaved = !!love?.find((item) => item.ref_id === book.id);

  const deleteCartItem = useMutation<unknown, Error, { id: number }>({
    mutationFn: ({ id }) => axioshandel.delete(`/collection-items/${id}`),
    onSuccess: () => {
      toast.success("کارت با موفقیت پاک شد");
      queryClient.invalidateQueries({ queryKey: ["love"] });
    },
    onError: () => {
      toast.error("عملیات پاک کردن از سبد خرید ناموفق بود");
    },
  });

  const addCartMutation = useMutation   <unknown, Error, datasubmit>({
    mutationFn: (newCart) => axioshandel.post("/collection-items", newCart),
    onSuccess: () => {
      toast.success("کارت با موفقیت اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["love"] });
    },
    onError: () => {
      toast.error("عملیات اضافه کردن به سبد خرید ناموفق بود");
    },
  });

  const handleSubmit = () => {
    if (!book || !love) return;

    const exist = love.find((item) => item.ref_id === book.id);

    if (!exist) {
      addCartMutation.mutate({
        collection: "نشان شده ها",
        ref_type: "love",
        ref_id: book.id,
        ref_title: book.title,
      });
    } else {
      deleteCartItem.mutate({ id: exist.id });
    }
  };

  useEffect(() => {
    if (love) {
      localStorage.setItem("love", JSON.stringify(love));
    } else {
      localStorage.removeItem("save");
    }
  }, [love]);

  return { handleSubmit, isSaved };
}
