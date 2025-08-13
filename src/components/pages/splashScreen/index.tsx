import { Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
export default function SplashScreen(){

  return(

   <div className={"flex flex-col py-10 px-1 h-screen relative"}>
     <img src="/assets/images/splash.png" alt="image" />
     <div className={"flex mt-7 items-center gap-0.5 "}>
     <Typography className={"text-base font-bold text-primary-800"}>آبان کالر</Typography>
     <Typography  className={"text-sm  text-gray-900"}>برای تماس های ورودی و خروجی در تلفن همراه شما،</Typography>
     </div>
     <Typography  className={"text-sm  text-gray-900"}>مشخصات کامل فرد تماس گیرنده و یا فرد تماس دهنده را با استفاده از شماره تلفن، به شما نمایش می‌دهد.</Typography>
      <div className={"flex flex-col absolute bottom-8 "}>
     <Button component={Link} to={'/auth'} className={"w-12 h-16 bg-gradient-to-t from-primary-900 to-primary-main rounded-full shadow-2xl shadow-gray-500 mt-10 flex justify-center  items-center"}>
           <ArrowForwardIosIcon className={"text-white"} />
     </Button>
      </div>

   </div>

  )
}