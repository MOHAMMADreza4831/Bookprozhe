import { Box, Card, CardMedia, Grid } from "@mui/material";
import Rating from "@src/components/buttonIcone/Rating";
import { Book } from "@src/components/Data/interfaceDATA";
import axioshandel from "@src/components/login/header";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import queryClient from "@src/utils/queryClient";

interface collection_ref {
  description: string;
  id: number;
  picture: string;
  rate: number;
  title: string;
}

export default function SaveCart(book: collection_ref) {
  const navigate = useNavigate();

  const deleteCartItem = useMutation<unknown, Error, { id: number }>({
    mutationFn: ({ id }) => axioshandel.delete(`/collection-items/${id}`),
    onSuccess: () => {
      toast.success("کارت با موفقیت پاک شد");
      queryClient.invalidateQueries({ queryKey: ["save"] });
    },
    onError: () => {
      toast.error("عملیات پاک کردن از سبد خرید ناموفق بود");
    },
  });

  const {
    data: Save,
    isLoading,
    isError,
  } = useQuery<Book[]>({
    queryKey: ["save"],
    queryFn: () =>
      axioshandel
        .get("/collection-items/نشان شده ها  ")
        .then((res) => res.data.data),
  });
  console.log(Save);
  const filteredSave = Save?.filter(
    (item) => item.ref !== null && item.id !== book.id
  );
  const data = filteredSave?.map((item) => item.ref);
  if (isLoading) return <p>...loding</p>;
  if (isError) return <p>Erroe</p>;

  return (
    <>
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <IoChevronBackOutline
            style={{ color: "white" }}
            className="  rotate-180 size-5 "
          />
          <button
            onClick={() => navigate("/profile")}
            style={{ color: "white" }}
            className="font-bold"
          >
            بازگشت
          </button>
        </div>
      </div>

      <div className="flex flex-wrap    w-full gap-4 pt-10 justify-start px-2">
        <Grid container spacing={2}>
          {data?.map((ref: collection_ref) => (
            <Grid item className="   flex-shrink-0  " xs={6} sm={6}>
              <Card
                className="my- bg-red-950 "
                style={{ borderRadius: "0 0 10px 10px" }}
              >
                <Link to={`/dashboard/book/${ref.id}`} key={ref.id}>
                  <CardMedia
                    component="img"
                    image={ref.picture}
                    alt={ref.title}
                    className=" h-28  sm:h-40 mb-14 object-top z-10  overflow-clip  "
                  />
                </Link>
                <div className=" bg-white  " style={{ opacity: 0.8 }}>
                  <div>{ref.title}</div>
                  <div className=" flex justify-between rounded-sm items-center  w-[180px] ">
                    {/* <button
                    onClick={() => deleteCartItem.mutate({ id: ref.id })}
                    className="w-[100px] h-[30px] bg-[#dd7475]"
                    >
                    <TiDocumentDelete
                    className=""
                    style={{ color: "#790006" }}
                    />
                    </button> */}
                    <Box className="flex  items-center gap-1">
                      <Rating rating={ref.rate} />
                    </Box>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
