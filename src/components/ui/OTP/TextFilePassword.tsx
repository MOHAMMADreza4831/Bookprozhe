import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD } from "@src/routes/paths";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [password1, setpassword1] = React.useState("");
  const [password2, setpassword2] = React.useState("");
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box className=" h-[300px]">
      <div className="w-full  flex flex-col justify-around items-center h-full ">
        <FormControl
          className="w-[80%]"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <InputLabel
            className="text-white   "
            htmlFor="standard-adornment-password"
          >
            Password
          </InputLabel>
          <Input
            sx={{
              color: "white",
              "&:before": { borderBottom: "2px solid " },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "2px solid white",
              },
              "&:after": { borderBottom: "2px solid transparent" },
              "& .MuiInput-input": {
                outline: "none !important",
                boxShadow: "none !important",
              },
            }}
            value={password1}
            onChange={(e) => setpassword1(e.target.value)}
            className="text-white   "
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ color: "white" }} />
                  ) : (
                    <Visibility sx={{ color: "white" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          className="w-[80%]"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <InputLabel
            className="text-white"
            htmlFor="standard-adornment-password"
          >
            Password
          </InputLabel>
          <Input
            sx={{
              color: "white",
              "&:before": { borderBottom: "2px solid " },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "2px solid white",
              },
              "&:after": { borderBottom: "2px solid transparent" },
              "& .MuiInput-input": {
                outline: "none !important",
                boxShadow: "none !important",
              },
            }}
            value={password2}
            onChange={(e) => setpassword2(e.target.value)}
            className="text-white  "
            type={showPassword1 ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword1 ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword1 ? (
                    <VisibilityOff sx={{ color: "white" }} />
                  ) : (
                    <Visibility sx={{ color: "white" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          {password1 &&
            password2 &&
            (password1 === password2 ? (
              <p className="text-green-500 mt-2">✅</p>
            ) : (
              <p className="text-red-500 mt-2">
                رمز دو فیلد بالا یکسان نیست ❌
              </p>
            ))}
        </FormControl>
      </div>
      <Box className="w-full flex justify-center items-center mt-[100px]">
        {" "}
        {password1 && password2 && password1 === password2 ? (
          <Button
            onClick={() => navigate("/auth/loginagain") }
            className=" bg-[#2DAA9E] w-[60%] rounded-[90px] flex justify-center items-center text-white"
          >
            ورود
          </Button>
        ) : (
          <Button
            disabled
            className=" bg-[#124742] w-[60%] rounded-[90px] flex justify-center items-center text-white"
          >
            ورود
          </Button>
        )}
      </Box>
    </Box>
  );
}
