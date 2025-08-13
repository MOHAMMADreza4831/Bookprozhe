import { useState } from "react";
import { BottomNavigation, Container, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { INavigationItem } from "@src/models/navigation";
import BottomNavigationItems from "@src/constants/bottomNavigationItems";

const BottomNavigator = () => {
  const [value, setValue] = useState();

  return (
    <Stack
      className="z-10"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#333",
      }}
    >
      <Container
        className=" "
        maxWidth="xs"
        sx={{
          backgroundColor: "white",

          borderTop: "solid 1px #eee",
        }}
      >
        <BottomNavigation
          showLabels
          className="h-[80px]  "
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
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
  const isActive = (path: string) => location.pathname === path;

  return (
    <Link
      to={route}
      className={`flex flex-1  flex-col items-center justify-center  `}
    >
      <div
        className={`rounded-2xl flex flex-1  flex-col items-center justify-center gap-2 `}
      >
        <Icon
          className={`text-3xl text-${isActive(route) ? "primary-main" : "black"}`}
        />
        <Typography
          className={`text-xs text-${isActive(route) ? "primary-main" : "black"}`}
        >
          {title}
        </Typography>
      </div>
    </Link>
  );
};
