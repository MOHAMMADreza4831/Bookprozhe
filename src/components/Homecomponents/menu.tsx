import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiMenuAlt2 } from "react-icons/hi";
import { Box } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function MenuHome() {
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <HiMenuAlt2 style={{ fontSize: "30px", color: "white" }} />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "130px",
            height: "130px",
          },
        }}
        slotProps={{
          list: {
            "aria-labelledby": "fade-button",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleClose} className="gap-1">
          <IoPersonOutline />
          پروفابل
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            Navigate("/shop");
          }}
          className="gap-1"
        >
          <MdOutlineShoppingCart />
          سبد خرید
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LuSquareArrowOutUpRight style={{ fontSize: "15px" }} />
          خروج از حساب
        </MenuItem>
      </Menu>
    </Box>
  );
}
