import GetCode from "@src/components/auth/GetCode.tsx";
import { useState } from "react";
import GetNumber from "@src/components/auth/GetNumber.tsx";
import Password from "@src/components/auth/Password.tsx";



  export default function Login() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const renderStep = () => {
      switch (step) {
        case 1:
          return <GetNumber setStep={setStep} setPhone={setPhone} />;
        case 2:
          return <Password setStep={setStep}  />;
        case 3:
          return <GetCode setStep={setStep} phone={phone}  />;
        default:
          return null;
      }
    };


  return (
    <div className={"relative "}>
      <div className={"flex flex-col items-center py-[143px]"}>
        <div className={"flex flex-col  w-1/2 justify-center"}>
          <img src="/assets/images/login/headerLogin.png" alt="image" />
        </div>
        {renderStep()}
      </div>
      {step > 1 &&
      <div className={"absolute left-0 -bottom-[190px] w-8/12"}>
        <img src="/assets/images/login/mobile.png" alt="image" />
      </div>
      }
    </div>
  );
}