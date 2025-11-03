import { Box } from "@mui/material";
import logo from "@src/assets/image/book-open-svgrepo-com (1).svg";
import { Button } from "flowbite-react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

export default function Home_Header() {
  const navigate = useNavigate();
  return (
    <>
      <Box className="flex justify-around pt-9 ">
        <Box className="flex justify-between w-16 items-center   ">
          <Button onClick={() => navigate("/Settings_page")}>
            <FaBell className="text-white size-5 " />
          </Button>
          <Box>
            <IoMdSearch className="text-white size-5 " />
          </Box>
        </Box>
        <Box className="flex justify-center items-center">
          <Box className="text-white pl-2">AbanBook</Box>
          <Box>
            <img className="size-8" src={logo} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
