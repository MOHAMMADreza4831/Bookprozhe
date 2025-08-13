import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import OtpInput from 'react-otp-input';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface IProps {
  phone:string;
  setStep:(data:number)=>void

}
export default function GetCode({setStep,phone}:IProps){
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(120);
  const numInputs = 5;
  const fixedOtp = "12345";
  const otpSchema = z.object({
    otp: z
      .string()
      .length(5, "رمز عبور باید دقیقا 5 رقم باشد.")
      .refine((value) => value === fixedOtp, "رمز وارد شده اشتباه است."),
  });


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });
  const handleChange = (value: string) => {
    setOtp(value);
    setValue("otp", value);
  };
  const handleGetNumber=()=>{
    setStep(1)
  }
  const onSubmit = (_data: { otp: string }) => {
    alert("رمز صحیح است!");
  };
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  return(
    <div className={"w-full flex flex-col items-center"}>
    <div className={"flex items-center gap-1 mt-6 mb-12"}>
      <Typography className={"text-sm font-medium text-gray-600"} >رمز عبور یکبار مصرف به شماره</Typography>
      <Typography className={"text-sm font-medium text-primary-800"}> {phone}</Typography>
      <Typography className={"text-sm font-medium text-gray-600 "}> پیامک شد.</Typography>
   </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <OtpInput
        {...register('otp')}
        value={otp}
        onChange={handleChange}
        numInputs={5}
        containerStyle={"flex gap-3"}
        inputStyle={
          `w-14 h-14 rounded-[8px] border text-center text-gray-900 focus:outline-none 
          focus:ring-2 focus:ring-primary-800 transition-all duration-200 ${
            otp.length === numInputs ? "bg-blue-50 border-primary-800" : "border-gray-300"
          }  ${
            errors.otp ? "border-red-500 bg-white" : "border-gray-300"
          }`
        }
        renderInput={(props) => <input {...props} />}
      />
        {errors.otp && (
          <Typography className={"text-red-500 text-sm mt-2"}>
            {errors.otp.message}
          </Typography>
        )}
      <div className={"mt-6 mb-12 flex justify-between w-full"} >
        <Typography className={"flex text-gray-500 text-xs"}>
          {countdown > 0
            ? `تا دریافت مجدد کد: ${Math.floor(countdown / 60)}:${String(countdown % 60).padStart(2, "0")}`
            : "دریافت مجدد کد امکان‌پذیر است."}
        </Typography>
        <Typography onClick={handleGetNumber} className={"flex text-primary-800 text-xs "}>تغییر شماره موبایل</Typography>
      </div>

      <Button variant={"contained"} fullWidth size={"large"}  type={"submit"}>
        ورود
      </Button>
      </form>
    </div>
  )
}