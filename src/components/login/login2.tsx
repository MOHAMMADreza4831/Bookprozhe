import { Divider, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import logo from "@src/assets/image/wave.png";
import facebook from "@src/assets/image/icons8-facebook-logo-48.png";
import google from "@src/assets/image/icons8-google (1).svg";
import apple from "@src/assets/image/icons8-apple-64 (1).png";
import { useNavigate } from "react-router-dom";
import Buttoneauth from "../ui/buttons/buttonauth";
import { useEffect, useState } from "react";
import { Dataemail } from "../Data/ProductData";
import { PATH_DASHBOARD } from "@src/routes/paths";

export default function Login2() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = () => {
    const user = Dataemail.find(
      (item) => item.email === email && item.password === Number(password)
    );
    if (user) {
      setError("");
      alert("ورود موفق بود 🎉");
      navigate(PATH_DASHBOARD.navigator.home);
    } else {
      setError("ایمیل یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="bg-black h-full   ">
      <div className="h-[8%] flex px-2 pt-2 gap-3 ">
        <Typography variant="bold16" className="text-white text-2xl  ">
          سلام خوش اومدی
        </Typography>
        <img src={logo} className="size-8" />
      </div>
      <div>
        <Typography className="text-[#AEAEAE]">
          لطفا ایمیل و رمز خود را ک قبلا با ان لاگین کردین را وارد کنید{" "}
        </Typography>
      </div>
      <div className="flex flex-col mt-[100px] h-[20%] bg- justify-between  ">
        <TextField
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            "& .MuiInputBase-input": { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
          }}
          label="ایمیل"
          className="text-white  "
          variant="standard"
        />
        <TextField
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            "& .MuiInputBase-input": { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "#FFFFFF" },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
          }}
          label="رمز عبور "
          className="text-white  "
          variant="standard"
        />
      </div>
      <Divider
        textAlign="center"
        sx={{
          border: "1px solid #E6E6E",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            borderColor: "white",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        ></Typography>
      </Divider>
      <div>
        <Typography
          onClick={() => navigate("/auth/forgotpassword")}
          sx={{ color: "#2DAA9E" }}
          className=" cursor-pointer flex  justify-center w-full mt-6"
        >
          ایا رمز خود را فراموش کردید?
        </Typography>
      </div>
      <div className="flex justify-center gap-9 mt-10  ">
        <div className="rounded-full bg-[#1b1b1b] flex  items-center justify-center w-20 h-10">
          <button>
            <img src={facebook} className="size-8" />
          </button>
        </div>
        <div className="rounded-full bg-[#1b1b1b] flex  items-center justify-center w-20 h-10">
          <button>
            <img src={apple} className="size-8" />
          </button>
        </div>
        <div className="rounded-full bg-[#1b1b1b] flex  items-center justify-center w-20 h-10">
          <button>
            <img src={google} className="size-8" />
          </button>
        </div>
      </div>
      <div className="mt-[34vh] flex justify-center items-center w-full">
        <Buttoneauth
          onClick={() => navigate(PATH_DASHBOARD.navigator.home)}
          text="ورود"
        />
      </div>
    </div>
  );
}
