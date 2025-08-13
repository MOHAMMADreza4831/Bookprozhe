import Righte from "../login/image/Vectorright.png";
import left from "../login/image/Vector.png";
import left2 from "../login/image/Ellipse 1.png";
// import { SlArrowRight } from "react-icons/sl";
import logo from "../login/image/Group 160.svg";
import send from "../login/image/.svg";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import gif from "../login/image/BOOK WALKING.gif";
export default function Splashscrean() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelonclick = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      navigate("/auth/login");
    }, 1500);
  }, [navigate]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen ">
        <img src={gif} alt="" className="w-[100px] h-[100px]" />
      </div>
    );

  return (
    <div className="relative">
      <div>
        <img src={Righte} alt="" className="absolute top-0 right-0 w-[120px]" />
        <img src={left} alt="" className="absolute top-0 left-0 w-[150px]" />
        <img
          src={left2}
          alt=""
          className="absolute top-[300px] left-0  w-[50px]"
        />
        <img
          src={logo}
          alt=""
          className="absolute top-[150px] right-2 w-[350px] "
        />
      </div>

      <div
        style={{ color: "#95BCCC" }}
        className=" absolute left-8 top-[190px] text-3xl font-semibold"
      >
        دانلود کتاب
      </div>
      <div
        style={{ color: "#F0A9AA" }}
        className=" absolute left-9 top-[230px] text-2xl font-semibold "
      >
        خارجـــــــــــی
      </div>
      <div className="absolute top-[540px] w-full flex flex-col items-center text-center px-4">
        <div
          className="text-[35px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#39778D] via[#CE7C99]  to-[#f0a9aaa1]"
          //   style={{
          //     backgroundImage:
          //       "linear-gradient(to right, #39778D , #F0A9AA )",
          //   }}
        >
          آبان بووک
        </div>
        <p className="max-w-[600px]   font-medium leading-relaxed text-justify text-[18px]">
          یک وب اپلیکیشن ایرانی دانلود کتاب خارجی است که بیش از 5 میلیون کتاب
          شامل خرید کتاب های آمازون و گوگل پلی را با قیمت پایینتر از این فروشگاه
          های کتاب به فروش می‌رساند.
        </p>
      </div>
      <button
        onClick={handelonclick}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #BC7A7F, #9F7F89 ,#39778D)",
        }}
        className="absolute top-[780px]  text-white px-[20px] py-[20px] rounded-[100%] right-3"
      >
        <img src={send} alt="" />
      </button>
    </div>
  );
}
