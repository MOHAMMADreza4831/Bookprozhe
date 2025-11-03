// src/components/About the book/basecard.jsx
import { useParams, Link } from "react-router-dom";
import { Card_detail } from "@src/components/Data/ProductData";
import { Box, Divider, Typography, Button } from "@mui/material";
import { FiBookmark } from "react-icons/fi";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

export default function Basecard() {
  const { id } = useParams();
  const bookId = Number(id);
  const book = Card_detail.find((b) => b.id === bookId);
  const [active, setactive] = useState(false);

  if (!book) {
    return (
      <div className="p-6 text-center">
        <p>❌ کتاب پیدا نشد</p>
        <Link to="/Shop" className="text-blue-500">
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  const handelsubmit = () => {
    setactive(!active);
  };

  return (
    <Box className="">
      <Box
        sx={{
          zIndex: 1,
          position: "relative",
          backgroundImage: `url(${book.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        />
        <Box
          sx={{ position: "relative", zIndex: 2 }}
          className="flex flex-col justify-center items-center h-[600px] "
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-[200px] h-[270px] rounded-xl shadow-lg mx-auto mb-4"
          />
          <Typography className="text-white text-[20px] font-bold">
            {book.title}
          </Typography>
          <Typography className="text-white" variant="caption">
            {book.Author}
          </Typography>
          <Box className="flex justify-center items-center mt-4  gap-10 bg-[rgb(0,0,0,0.2)] w-[300px]  p-2 rounded-[7px]">
            <Box className=" flex flex-col justify-center items-center w-[20px] ">
              <Typography variant="caption" className="text-white">
                {book.Language}
              </Typography>
              <Typography variant="caption" className="text-white text-nowrap">
                زبان{" "}
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box className=" flex flex-col justify-center items-center w-[20px] ">
              <Typography variant="caption" className="text-white">
                {book.numberpage}
              </Typography>
              <Typography variant="caption" className="text-white text-nowrap">
                تعداد صفحه{" "}
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box className=" flex flex-col justify-center items-center w-[20px] ">
              <Typography variant="caption" className="text-white">
                {book.Rate}
              </Typography>
              <Typography variant="caption" className="text-white text-nowrap">
                امتیاز{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="scroll-mx-10  h-[100px] mx-5 mt-5">
            <Typography variant="bold18" className="text-white scroll-mx-10">
              درباره کتاب
            </Typography>
            <p className="h-[150px] overflow-y-auto custom-scrollbar ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              aperiam deleniti ipsum labore cupiditate, ratione pariatur velit
              aliquid magnam nihil, quis dignissimos nisi amet dolorem delectus
              porro similique mollitia eveniet! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste accusamus alias doloribus
              laborum id expedita sint numquam omnis ducimus! Praesentium ipsa
              eaque modi, inventore aliquam consectetur deleniti sequi ex
              eveniet?
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="fixed bottom-5 h-[60px]">
        <Button className="mx-8 w-[300px] rounded-[10px] text-white p-4 bg-[#2DAA9E]  ">
          شروع ب خواندن
        </Button>
        <Button
          onClick={() => handelsubmit()}
          sx={{
            width: "40px",
            height: "10px",
            borderRadius: "10px",
            backgroundColor: "#2DAA9E",
            minWidth: 0,
          }}
          className=" bg-[#2DAA9E]  h-[10px] rounded-[10px] text-white "
        >
          {active ? <FaBookmark className="" /> : <FiBookmark />}
        </Button>
      </Box>
    </Box>
  );
}
