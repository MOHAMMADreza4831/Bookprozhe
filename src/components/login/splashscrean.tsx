import logo from "@src/assets/image/book-open-svgrepo-com (1).svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Spinner } from "flowbite-react";

export default function Splashscrean() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelckick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/auth/login");
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className="flex flex-col "
      style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
    >
      <div className="  flex flex-col mt-28    justify-center items-center  h-[50vh] w-full">
        <img src={logo} className=" h-[80vh] w-[200px]" />
        <Typography
          variant="h4"
          sx={{ fontFamily: "Righteous, sans-serif", color: "white" }}
        >
          ABAN BOOK
        </Typography>
      </div>
      <div className="flex justify-center items-center mt-28 ">
        {loading ? (
          <Button pill color="alternative" className="w-[300px] p-[12px]">
            در حال بارگذاری
            <Spinner
              size="sm"
              aria-label="Info spinner example"
              className="mx-7 text-black  text-5xl "
              light
            />
          </Button>
        ) : (
          <Button
            onClick={handelckick}
            color="alternative"
            pill
            className="w-[300px] p-[12px] "
          >
            Alternative
          </Button>
        )}
      </div>
    </div>
  );
}
