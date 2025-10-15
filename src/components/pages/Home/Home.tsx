import NewCard from "@src/components/Homecomponents/NewCard";
import ShortStoriesCard from "@src/components/Homecomponents/ShortStoriesCard";
import RomanCard from "@src/components/Homecomponents/RomanCard";
import { Link } from "react-router-dom";
import HistoricalCard from "@src/components/Homecomponents/HistoricalCard";
import NavbarHome from "@src/components/Homecomponents/navbarhome";
import { useEffect } from "react";
import queryClient from "@src/utils/queryClient";
import SearchBook from "@src/components/ui/buttons/SearchBook";
import { AnimatePresence, motion } from "framer-motion";
import SwiperHome from "@src/components/ui/swiper/Swiper ";

const Home = () => {
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["basket"] });
    queryClient.invalidateQueries({ queryKey: ["basket1"] });
    queryClient.invalidateQueries({ queryKey: ["basket2"] });
    queryClient.invalidateQueries({ queryKey: ["basket3"] });
  }, []);
  const categories = [
    {
      name: "جدیدترین‌ها",
      path: "/products/newbook",
      component: NewCard,
    },
    {
      name: "کتاب‌های تاریخی",
      path: "/products/historicalbook",
      component: HistoricalCard,
    },
    {
      name: "کتاب‌های رمان",
      path: "/products/roman",
      component: RomanCard,
    },
    {
      name: "داستان‌های کوتاه",
      path: "/products/shortstory",
      component: ShortStoriesCard,
    },
  ];

  return (
    <>
      <div className="px-2">
        <NavbarHome />
        <div>
          {/* <SearchBook /> */}
          <div>
            <div className="flex  flex-col pt-10">
              {/* <p className="font-bold">جدید ترین ها </p> */}
              <SwiperHome />
            </div>
          </div>
        <div>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
