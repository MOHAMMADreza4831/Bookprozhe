import books    from "../login/image/Frame 117.svg";

export default function Login2() {
  return (
    <>
      <div className={"relative "}>
        <div className="absolute top-[140px] w-full flex flex-col items-center ">
          <img src={books  } alt="" className="w-[270px]" />
        </div>
          <div className="absolute right-[35%] top-[500px] w-full   ">رمز{"    "}
             <span className=" font-bold w-[60px]">عبور</span>{"  "}
           خود را وارد کنید.
          </div>
      </div>
    </>
  );
}
