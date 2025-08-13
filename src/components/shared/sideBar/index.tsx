import { Box, Divider, Drawer, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material"
import SideBarItems from "@src/constants/sideBarItems";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";



const SideBar = () => {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    // const [isClosing, setIsClosing] = useState(false);
    const location = useLocation(); // Get the current location object

    const handleDrawerClose = () => {
        // setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        // setIsClosing(false);
    };

    // const handleDrawerToggle = () => {
    //     if (!isClosing) {
    //         setMobileOpen(!mobileOpen);
    //     }
    // };


    const isActive = (path: string) => location.pathname === path;

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="bold20">سایدبار</Typography>
            </Toolbar>
            <Divider />
            <List>
                {SideBarItems.map((item) => (
                    <ListItem key={item.title} disablePadding >
                        <ListItemButton sx={{ p: 0 }}>
                            <Link to={item.route} className={`rounded-[5px] w-full h-full p-2 bg-${isActive(item.route) ? 'primary-main' : 'white'}`} >
                                <Typography className={`text-${isActive(item.route) ? 'white' : 'black'}`}>{item.title}</Typography>
                            </Link>
                        </ListItemButton>

                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window.document.body : undefined;



    return (
        <Box
            component="nav"
            sx={{ width: { sm: '250px' }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px' },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px' },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>

    )
}

export default SideBar;