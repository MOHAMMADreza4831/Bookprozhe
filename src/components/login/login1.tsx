import { Form, useNavigate } from "react-router-dom";
import book from "../login/image/Frame 117.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Container, Grid } from "@mui/material";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { PATH_DASHBOARD } from "@src/routes/paths";
import FormInputs from "../ui/FORM/FormInput";
import axioshandel from "./header";
import LoadingPage from "../ui/modal/Loading";
import SuccessModal from "../ui/modal/SuccessModal";
import FalseModal from "../ui/modal/false";
import { Api } from "@mui/icons-material";

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

  const onsubmit = async (data: LoginFormInputs) => {
    try {
      const res = await axioshandel.post("/users/login", {
        login: data.email,
        password: data.Password,
      });

      const Token = res.data.data.token;
      localStorage.setItem("token", Token);
      setloading(false);
      setSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate(PATH_DASHBOARD.navigator.home);
    } catch (err) {
      console.log(err);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setloading(false);
      setFailure(true);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setFailure(false);
    }
  };

  const handleClick = async () => {
    setloading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setloading(false);
  };
  return (
    <>
      <SuccessModal Open={success} setopen={setSuccess} />
      <FalseModal  Open={failure} setopen={setFailure} />
      <Container maxWidth="sm">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onsubmit)}>
            <div className=" h-[100vh] flex flex-col  justify-evenly items-center ">
              {alert.message && (
                <Alert severity={alert.type}>{alert.message}</Alert>
              )}

              <Grid item xs={12} className="">
                <img src={book} alt="" className="w-[320px]" />
              </Grid>

              <div className="gap">
                <Grid container spacing={3}>
                  <Grid item className="">
                    <div className="">
                      برای <span className="font-bold">ورود</span> به آبان بووک،
                      شماره تلفن خود را وارد کنید.
                    </div>
                  </Grid>
                  <Grid xs={12} item className="w-full">
                    <FormInputs
                      name="email"
                      label=" ایمیل / شماره تلفن را وارد کنید "
                      type="text"
                    />
                  </Grid>
                  <Grid xs={12} item className="w-full">
                    <FormInputs
                      name="Password"
                      label="رمز خود را وارد کنید "
                      type="password"
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="w-full">
                <Button
                  className="rounded-[20px] bg-[#95bccc] w-full "
                  type="submit"
                  onClick={handleClick}
                  sx={{ color: "white" }}
                >
                  ارسال
                </Button>
                <LoadingPage Open={loading} setopen={setloading} />
              </div>

              <div className="">
                <p>
                  ایا حساب کاربری ندارید؟{" "}
                  <a href="register" style={{ color: "#b7d9e5" }}>
                    اینجا کلید کنید{" "}
                  </a>
                </p>
              </div>
            </div>
          </form>
        </FormProvider>
      </Container>
    </>
  );
}
