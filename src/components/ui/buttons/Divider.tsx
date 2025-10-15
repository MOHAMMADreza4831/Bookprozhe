import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function FlexDivider() {
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handellogout = () => {
    localStorage.removeItem("token");
    Navigate("/auth/login");
  };
  return (
    <Box
      sx={{
        display: "inline-flex",
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "#292d36",
        color: "text.secondary",
        "& svg": {
          m: 2,
        },
      }}
      className="flex items-center justify-center w-17 "
    >
      <button
        onClick={() => {
          handleClose();
          Navigate("/shop");
        }}
        className="gap-1 flex items-center flex-row-reverse "
      >
        <MdOutlineShoppingCart />
        سبد خرید
      </button>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ marginTop: 4, marginBottom: 4, borderColor: "#e8ebf2" }}
      />
      <button
        onClick={() => Navigate("/profile")}
        className="p-4 items-center flex flex-row-reverse justify-start"
      >
        <FiUser />
        پروفایل
      </button>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ marginTop: 4, marginBottom: 4, borderColor: "#e8ebf2" }}
      />
      <button
        onClick={() => {
          handellogout();
          handleClose();
        }}
        className="flex flex-row-reverse items-center "
      >
        <LuSquareArrowOutUpRight style={{ color: "", fontSize: "15px" }} />
        خروج از حساب
      </button>
    </Box>
  );
}
