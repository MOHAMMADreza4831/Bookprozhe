import { Box, Typography } from "@mui/material";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type datatype = {
  title: string;
};
export default function SeeMore({ title }: datatype) {
  return (
    <Box className="w-full flex justify-between items-center px-6 pb-5 ">
      <Typography variant="subtitle1" className="text-white text-[24px]">
        {title}
      </Typography>
      <FiArrowLeft className="size-6 " style={{ color: "#2DAA9E" }} />
    </Box>
  );
}
