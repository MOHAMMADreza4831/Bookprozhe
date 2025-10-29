import { useEffect, useState } from "react";
import OTPInput from "../ui/OTP/OTP";
import Typography from "@mui/material/Typography";
import Buttoneauth from "../ui/buttons/buttonauth";
import { useNavigate } from "react-router-dom";

export default function Setpassword() {
  const navigate = useNavigate();

  const [Data, setData] = useState<number>();

  return (
    <div>
      <div className="pt-36 px-3 ">
        <Typography variant="h6" className="text-white">
          برای ایمیل شما کدی ارسال شد
        </Typography>
        <Typography variant="body2" className="text-white">
          کدی چهار رقمی برای ایمیل شما ارسال شده لطفا کد را در فیلد زیر قرار
          دهید
        </Typography>
      </div>
      <div className="pt-10">
        <OTPInput />
      </div>

    </div>
  );
}
