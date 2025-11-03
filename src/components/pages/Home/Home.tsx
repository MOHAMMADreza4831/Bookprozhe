import Home_Header from "./Home_Header";
import { Box } from "@mui/material";
import Cards from "@src/components/Homecomponents/Card";
import Grouping_cards from "@src/components/Homecomponents/Grouping_cards";
import Recommended from "@src/components/Homecomponents/Recommended";
import HeaderSwiper from "@src/components/ui/swiper/Swiper ";

const Home = () => {
  return (
    <>
      <Box>
        <Box>
          <Home_Header />
        </Box>
        <Box className="pt-10">
          <HeaderSwiper />
        </Box>
        <Box className="pt-20">
          <Cards />
        </Box>
        <Box className="pt-16">
          <Grouping_cards />
        </Box>
        <Box className="pt-20">
          <Recommended />
        </Box>
        <Box className="pt-20">
          <Cards title="Criminal" />
        </Box>
      </Box>
    </>
  );
};
export default Home;
