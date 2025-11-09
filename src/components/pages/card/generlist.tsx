import { Box, Card, Stack, Typography } from "@mui/material";
import { genre } from "@src/components/Data/ProductData";
import "@src/styles/index.css";
import { Link, useLocation, useParams } from "react-router-dom";
import BG1 from "@src/assets/image/BG1.png";

interface genretype {}

export default function Genrelist() {
  const { id } = useParams();
  const generID = Number(id);
  console.log(id);
  const filter = genre.map((item) => item.data);
  // const booklist = filter.flat();
  const booklist = filter
    .flat()
    .filter((item) => item.id === generID)
    .flatMap((item) => item.book);
  console.log(booklist);
  return (
    <Box
      className=" bg-center w-full h-screen flex items-start  " 
      style={{ backgroundImage: `url(${BG1})` }}
    >
      <Box className="flex flex-wrap justify-center  ">
        {/* {booklist.map((item) => (
          <Box className=" w-[200px]  flex ">
            <Box className="">
              <Lin to={`/book/${item.id}`}>
                <img className="" src={item.picture} />
              </Lin k>
            </Box>
            <Box className=""> */}
              {/* <Typography variant="subtitle1" className="text-white">
                {item.title}
              </Typography> */}
              {/* <Box className="">
                <Box className="text-[#969696] flex">
                  <FaStar /> {item.}
                </Box>
              </Box> */}
            {/* </Box>
          </Box> */}
        {/* ))} */}
      </Box>
    </Box>
  );
}
