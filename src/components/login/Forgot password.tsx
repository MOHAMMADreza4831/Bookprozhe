import { TextField, Typography } from "@mui/material";
import Buttoneauth from "../ui/buttons/buttonauth";

export default function Forgotpassword() {
  return (
    <div className=" ">
      <div className="mx-9 pt-36">
        <Typography variant="h6" className="text-white py-3">
          رمز خود را فراموش کردید
        </Typography>
        <Typography className=" text-[#AEAEAE]  ">
          ایمیل خود را وارد کنید و در ادامه رمز ارسال شده برای ایمیل را در بخش
          پایین وارد کنید و وارد مرحله بعد شوید
        </Typography>
      </div>
      <div className=" flex justify-center items-center">
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
          className="text-white w-[80%] mt-20 "
          variant="standard"
        />
      </div>
      <div className="mt-36 flex justify-center items-center w-full">
        <Buttoneauth text="ارسال" />
      </div>
    </div>
  );
}
