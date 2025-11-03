import { AccessTime, Search } from "@mui/icons-material";
import { INavigationItem } from "@src/models/navigation";
import { PATH_DASHBOARD } from "@src/routes/paths";
import HomeIcon from "@mui/icons-material/Home";
import GetAppIcon from "@mui/icons-material/GetApp";

const BottomNavigationItems = <INavigationItem[]>[
  {
    title: "خانه",
    Icon: HomeIcon,
    route: PATH_DASHBOARD.navigator.home,
    iconProps: {},
  },
  { title: "جستجو", Icon: Search, route: PATH_DASHBOARD.navigator.search },
  { title: "دانلود", Icon: GetAppIcon, route: PATH_DASHBOARD.root },
  {
    title: "تاریخچه",
    Icon: AccessTime,
    route: PATH_DASHBOARD.navigator.profile,
  },
];

export default BottomNavigationItems;
