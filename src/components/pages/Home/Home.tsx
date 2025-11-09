import Home_Header from "./Home_Header";
import { Box } from "@mui/material";
import Cards from "@src/components/Homecomponents/Card";
import Grouping_cards from "@src/components/Homecomponents/Grouping_cards";
import Recommended from "@src/components/Homecomponents/Recommended";
import SeeMore from "@src/components/Homecomponents/seemore";
// import BottomNavbar from "@src/components/Homecomponents/test";
import HeaderSwiper from "@src/components/ui/swiper/Swiper ";

const Home = () => {
  return (
    <>
      <Box>
        <Box>
          <Home_Header />
        </Box>
        <Box className="pt-10">
          <SeeMore title="کتاب های جدید" />
          <Cards />
        </Box>
        <Box className="pt-5">
          <SeeMore title="ژانر های پر بازدید " />
          <Grouping_cards />
        </Box>
        <Box className="pt-8">
          <SeeMore title="ژانر های پر بازدید " />
          <Recommended />
        </Box>
        <Box className="pt-6">
          <SeeMore title="ژانر های پر بازدید " />
          <Cards title="Criminal" />
        </Box>
      </Box>
    </>
  );
};
export default Home;
