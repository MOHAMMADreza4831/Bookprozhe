import { Form, useNavigate } from "react-router-dom";
import book from "../login/image/Frame 117.svg";
import TextField from "@mui/material/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button } from "@mui/material";
import z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axioshandel from "./header";
import { PATH_DASHBOARD } from "@src/routes/paths";


type LoginFormInputs = {
  email: string;      
  Password: string;   
};

const emailSchema = z.object({
  email: z
    .string()
    .min(11, "شماره تلفن وارد شده اشتباه است"),
  Password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ رقم باشد")
});

export default function Login1() {
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(emailSchema),
  });

  const navigate = useNavigate();

  const handellogin = async (data: LoginFormInputs) => {
    try {
      const res = await axioshandel.post("/users/login", {
        login: data.email,      
        password: data.Password,
      });
      
      const Token = res.data.data.token ; 
      
    
      if (Token) {
        localStorage.setItem( "token",Token );
      }

      setAlert({ type: "success", message: "ورود موفق آمیز بود" });
      setTimeout(() => {
        navigate(PATH_DASHBOARD.navigator.home,);
      }, 2500);
    } catch (err) {
      console.log(err); 
      setAlert({ type: "error", message: "ورود ناموفق بود" });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handellogin)}>
        <div className="relative">
          {alert.message && (
            <Alert severity={alert.type}>{alert.message}</Alert>
          )}  
          <div className="absolute top-[140px] w-full flex flex-col items-center">
            <img src={book} alt="" className="w-[270px]" />
          </div>
          <div className="absolute right-[15%] top-[500px] w-full">
            برای <span className="font-bold">ورود</span> به آبان بووک، شماره تلفن خود را وارد کنید.
          </div>
          <div className="absolute right-[12%] top-[550px] flex flex-col gap-6">
            <TextField
              {...register("email")}
              className="w-[350px]"
              type="text"
              label="شماره تماس"
              error={!!errors.email}
              placeholder="abanBook@gmail.com"
              helperText={errors.email?.message || ""}
              fullWidth
            />
            <TextField
              {...register("Password")}
              className="w-[350px]"
              type="password"
              label="رمز عبور"
              placeholder="******"
              error={!!errors.Password}
              helperText={errors.Password?.message || ""}
              fullWidth
            />
          </div>
          <Button
            type="submit"
            className="w-[400px] absolute right-[5%] p-3 top-[700px]"
            sx={{ backgroundColor: "rgba(149, 188, 204, 1)" }}
            variant="contained"
          >
            ورود
          </Button>
        </div>
      </Form>
    </>
  );
}
