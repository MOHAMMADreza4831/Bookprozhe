import { useState } from "react";
import { BottomNavigation, Container, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { INavigationItem } from "@src/models/navigation";
import BottomNavigationItems from "@src/constants/bottomNavigationItems";
import "@src/styles/index.css";
const BottomNavigator = () => {
  const [value, setValue] = useState();
  const location = useLocation();
  if (location.pathname.startsWith("/book/")) {
    return null;
  }
  return (
    <Stack
      className="z-10  "
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "",
      }}
    >
      <Container
        className=""
        maxWidth="xs"
        sx={{
          backgroundColor: "",

          borderTop: "solid px #eee",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => setValue(newValue)}
          className="rounded-t-[16px] h-[70px] "
        >
          {BottomNavigationItems.map((item, index) => (
            <BottomNavigationBtn
              key={item.title + index}
              title={item.title}
              route={item.route}
              Icon={item.Icon}
            />
          ))}
        </BottomNavigation>
      </Container>
    </Stack>
  );
};

export default BottomNavigator;

const BottomNavigationBtn = ({ title, route, Icon }: INavigationItem) => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Link
      to={route}
      className={` flex flex-1  flex-col items-center justify-center   `}
    >
      <div
        className={`rounded-2xl flex flex-1  flex-col items-center  justify-center gap-2 `}
      >
        <Icon
          className={`text-3xl  text-${isActive(route) ? "primary-main" : "black"}`}
        />
        <Typography
          className={`text-sm text-${isActive(route) ? "primary-main" : "black"}`}
        >
          {title}
        </Typography>
      </div>
    </Link>
  );
};
