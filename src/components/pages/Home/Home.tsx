import NewCard from "@src/components/Homecomponents/NewCard";
import ShortStoriesCard from "@src/components/Homecomponents/ShortStoriesCard";
import RomanCard from "@src/components/Homecomponents/RomanCard";
import { Link } from "react-router-dom";
import HistoricalCard from "@src/components/Homecomponents/HistoricalCard";
import NavbarHome from "@src/components/Homecomponents/navbarhome";
import { useEffect } from "react";
import queryClient from "@src/utils/queryClient";

const Home = () => {
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["basket"] });
    queryClient.invalidateQueries({ queryKey: ["basket1"] });
    queryClient.invalidateQueries({ queryKey: ["basket2"] });
    queryClient.invalidateQueries({ queryKey: ["basket3"] });
    console.log("salam basket ")
  }, []);

  return (
    <>
      <div className="px-3">
        <NavbarHome />
        <div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "2px",
                paddingBottom: "10px",
              }}
            >
              <h1 className="font-bold">جدید ترین ها </h1>
              <Link
                to="/products/newbook/1"
                style={{ color: "rgba(149, 165, 166,1.0)" }}
              >
                موارد بیشتر
              </Link>
            </div>

            <NewCard />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "2px",
              paddingBottom: "10px",
            }}
          >
            <h1 className="font-bold">کتاب های تاریخی</h1>

            <Link
              to="/products/historicalbook/1"
              style={{ color: "rgba(149, 165, 166,1.0)" }}
            >
              موارد بیشتر
            </Link>
          </div>

          <HistoricalCard />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "2px",
              paddingBottom: "10px",
            }}
          >
            <h1 className="font-bold">کتاب های رمان</h1>
            <Link
              to="/products/newbook/1"
              style={{ color: "rgba(149, 165, 166,1.0)" }}
            >
              موارد بیشتر
            </Link>
          </div>

          <RomanCard />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "2px",
              paddingBottom: "10px",
            }}
          >
            <h1 className="font-bold">داستان های کوتاه</h1>
            <Link
              to="/products/newbook/1"
              style={{ color: "rgba(149, 165, 166,1.0)" }}
            >
              موارد بیشتر
            </Link>
          </div>
          <ShortStoriesCard />
        </div>
      </div>
    </>
  );
};

export default Home;
