
const DASHBOARDPATH = (path: string) => '/dashboard' + path;

const SideBarItems = <ISideBarItem[]>[
    { title: 'داشبورد', route: DASHBOARDPATH('/') },
    { title: 'کامپوننت‌ها', route: DASHBOARDPATH('/components') },
    { title: 'فرم', route: DASHBOARDPATH('/form') },
]

export default SideBarItems;