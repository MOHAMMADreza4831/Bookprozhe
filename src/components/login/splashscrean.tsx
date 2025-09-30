import Righte from "../login/image/Vectorright.png";
import left from "../login/image/Vector.png";
import left2 from "../login/image/Ellipse 1.png";
import logo from "../login/image/Group 160.svg";
import send from "../login/image/.svg";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import gif from "../login/image/Astronaut & Book 2.0 (Reloaded) - Copy.gif";

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
      <div className=" flex items-center justify-center h-screen ">
        <img src={gif} alt="" className="w-52 h-5w-52  " />
      </div>
    );

  return (
    <div className="grid  relative    ">
      <img
        src={Righte}
        className="absolute top-0 right-0 w-28 sm:w-32 md:w-36 "
      />
      <img src={left} className="absolute top-0 left-0 w-32 sm:w-40 md:w-44 " />
      <img
        src={left2}
        className="absolute top-[35vh] left-0 w-14 sm:w-16 md:w-20"
      />

      <header className="  flex flex-row-reverse  items-center  mx-8  mt-[18vh]  md:">
        <div className="flex flex-col items-center  ">
          <h1 className=" sm:text-2xl md:text-3xl md:w-36    font-semibold text-[#95BCCC] ">
            دانلود کتاب
          </h1>
          <h2 className="text-xl sm:text-1xl pb-16 sm:pb-14 font-semibold text-[#F0A9AA] text-left">
            خارجــــــــــی
          </h2>
        </div>
        <img src={logo} alt="" className=" w-56  sm:w-64 md:w-[50vh]  mb-4" />
      </header>
      <div className="">
        <main className="flex flex-col  items-center mt-[17vh]    sm:mt-28  ">
          <div className="flex justify-center">
            <h3 className="text-3xl sm:text-4xl  font-bold  bg-gradient-to-r from-[#39778D] to-[#F0A9AA] bg-clip-text text-transparent self-start ">
              آبان بووک
            </h3>
          </div>
          <p className=" text-[20px] md:text-[20px] py-2 px-4  leading-normal  whitespace-normal text-justify  ">
            یک وب اپلیکیشن ایرانی دانلود کتاب خارجی است که بیش از 5 میلیون کتاب
            شامل خرید کتاب‌های آمازون و گوگل پلی را با قیمت پایین‌تر از این
            فروشگاه‌ها به فروش می‌رساند.
          </p>
        </main>
        <button
          onClick={handelonclick}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #BC7A7F, #9F7F89 ,#39778D)",
          }}
          className="flex   sm:mt-16 w-[55px] h-[55px] justify-center  text-white px-[20px] py-[20px] rounded-[100%] mr-3 "
        >
          <img className="" src={send} alt="" />
        </button>
      </div>
    </div>
  );
}
