import { useMutation, useQueryClient } from "@tanstack/react-query";
import axioshandel from "@src/components/login/header";
import { toast } from "react-toastify";

type datasubmit = {
  collection: string;
  ref_type: string;
  ref_id: number;
  ref_title: string;
};

export function useAddToSave() {
  const queryClient = useQueryClient();

  const addCartMutation = useMutation<unknown, Error, datasubmit>({
    mutationFn: (newCart) => axioshandel.post("/collection-items", newCart),
    onSuccess: () => {
      toast.success("با موفقیت اضافه شد ✅");
      queryClient.invalidateQueries({ queryKey: ["save"] });
    },
    onError: () => {
      toast.error("خطا در اضافه کردن ❌");
    },
  });

  return addCartMutation;
}
