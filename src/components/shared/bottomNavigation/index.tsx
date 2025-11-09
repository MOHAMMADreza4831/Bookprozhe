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
  if (location.pathname.startsWith("/genrelist")) {
    return null;
  }
  return (
    <Stack
      className="z-10   "
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0, 
        background: "",
      }}
    >
      <Container
        maxWidth="xs"
        className=""
        sx={{
          borderTop: "solid px #eee",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          className=" mb-3 flex justify-around  rounded-t-[16px] h-[70px]"
        >
          {BottomNavigationItems.map((item, index) => {
            return (
              <BottomNavigationBtn
                key={item.title + index}
                title={item.title}
                route={item.route}
                Icon={item.Icon}
              />
            );
          })}
        </BottomNavigation>
      </Container>
    </Stack>
  );
};

export default BottomNavigator;

const BottomNavigationBtn = ({ title, route, Icon }: INavigationItem) => {
  // const [Active, setActive] = useState(false);
  const location = useLocation();
  const active = location.pathname === route;

  let content;

  if (active) {
    content = (
      <div className="flex  items-center justify-center ">
        <div
          className={`w-[90px] h-10 rounded-[20px] flex items-center justify-center gap-2 transition-all duration-700 ease-out
    ${active ? "bg-[#2daa9e] translate-[18px] shadow-xl" : "bg-gray-200 shadow-sm"}
  `}
        >
          <Icon className={`${active ? "text-white" : "text-gray-500"}`} />
          <Typography
            className={`text-sm ${active ? "text-white" : "text-gray-500"}`}
          >
            {title}
          </Typography>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="flex items-center justify-center">
        <Icon className="text-gray-400" />
      </div>
    );
  }

  return (
    <Link className="flex justify-center items-center" to={route}>
      {content}
    </Link>
  );
};
