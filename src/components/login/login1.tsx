import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "flowbite-react";
import iconeGoogle from "@src/assets/image/icons8-google (1).svg";
type LoginFormInputs = {
  email: string;
  Password: string;
};

const emailSchema = z.object({
  email: z.string().min(11, "شماره تلفن وارد شده اشتباه است"),
  Password: z.string().min(6, "رمز عبور باید حداقل ۶ رقم باشد"),
});

export default function Login1() {
  const [loading, setloading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  console.log(alert);
  const methods = useForm<LoginFormInputs>({
    resolver: zodResolver(emailSchema),
  });

  const navigate = useNavigate();

  // const onsubmit = async (data: LoginFormInputs) => {
  //   try {
  //     const res = await axioshandel.post("/users/login", {
  //       login: data.email,
  //       password: data.Password,
  //     });

  //     const Token = res.data.data.token;
  //     localStorage.setItem("token", Token);
  //     setloading(false);
  //     setSuccess(true);
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     navigate(PATH_DASHBOARD.navigator.home);
  //   } catch (err) {
  //     console.log(err);
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     setloading(false);
  //     setFailure(true);
  //     await new Promise((resolve) => setTimeout(resolve, 900));
  //     setFailure(false);
  //   }
  // };

  const handelclick = () => {
    navigate("/auth/loginagain");
  };

  return (
    <div className="bg-image h-[100vh] overflow-hidden">
      <div className=" flex flex-col  ">
        <div className="mt-[60vh] flex flex-col  justify-center items-center ">
          <Button className="  border border-white/30   h-14 rounded-[50px] w-[42vh] my-2 bg-black text-white ">
            <p className=" ml-5 font-bold text-[19px]">ورود از طریق گوگل</p>
            <img src={iconeGoogle} />
          </Button>
          <Button
            onClick={() => {
              handelclick();
            }}
            className="flex h-14 rounded-[50px] w-[42vh] my-2 bg-[#2DAA9E] text-white "
          >
            <p className="font-bold text-[20px] ">ورود</p>
          </Button>
          <Button className=" border border-white/30 flex h-14 rounded-[50px] w-[42vh] my-2 bg-black text-white ">
            <p className="text-[18px]">اگر حساب ندارید اینجا کلیک کنید !</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
