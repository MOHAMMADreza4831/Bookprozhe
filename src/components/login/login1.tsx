import { Form, useNavigate } from "react-router-dom";
import book from "../login/image/Frame 117.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Container, Grid } from "@mui/material";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { PATH_DASHBOARD } from "@src/routes/paths";
import FormInputs from "../ui/FORM/FormInput";
import ButtonPostRegister from "../ui/buttons/ButtonePostRegister";
import axioshandel from "./header";

type LoginFormInputs = {
  email: string;
  Password: string;
};

const emailSchema = z.object({
  email: z.string().min(11, "شماره تلفن وارد شده اشتباه است"),
  Password: z.string().min(6, "رمز عبور باید حداقل ۶ رقم باشد"),
});

export default function Login1() {
  const [AlertErorr, setAlertErorr] = useState<string | null>(null);
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
      navigate(PATH_DASHBOARD.navigator.home);
    } catch (err) {
      console.log(err);
      setAlert({ type: "error", message: "ورود ناموفق بود" });
    }
  };

  return (
    <>
      <Container maxWidth="xs">
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

              <Button
                className="rounded-[20px] bg-[#95bccc] w-full "
                type="submit"
                sx={{ color: "white" }}
              >
                ارسال
              </Button>

              <div className="">
                <p>
                  ایا حساب کاربری ندارید؟{" "}
                  <a href="register" style={{ color: "#b7d9e5" }}>
                    {" "}
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
