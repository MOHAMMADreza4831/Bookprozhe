import { FormProvider, useForm } from "react-hook-form";
import FormInputs from "./FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import ButtonPostRegister from "../buttons/ButtonePostRegister";
import AvatarUpload from "./Avatar";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD } from "@src/routes/paths";
import SuccessModal from "../modal/SuccessModal";
import FalseModal from "../modal/false";

type Formregisterdata = {
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  image: File | null;
};

const emailSchema = z
  .object({
    firstname: z.string().min(2, "نام خود را وارد کنید").nonempty(),
    lastname: z.string().min(3, "نام خانوادگی خود را وارد کنید").nonempty(),
    login: z.string().nonempty(),
    image: z.string().nullable(),
    password: z.string().min(6, "حداقل ۶ کاراکتر"),
    confirmPassword: z.string().min(6, "حداقل ۶ کاراکتر"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن باید یکسان باشند",
    path: ["confirmPassword"],
  });

export default function Formregister() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  // const [AlertErorr, setAlertErorr] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const methods = useForm<Formregisterdata>({
    resolver: zodResolver(emailSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const PropData = (values: Formregisterdata, file: File | null) => {
    if (file) {
      const formData = new FormData();
      formData.append("firstname", values.firstname);
      formData.append("lastname", values.lastname);
      formData.append("login", values.login);
      formData.append("password", values.password);
      return formData;
    } else {
      return { ...values };
    }
  };

  const onSubmit = (data: Formregisterdata) => {
    console.log("اطلاعات فرم:", data);
  };

  const handelsubmit = () => {
    setFailure(true);
    setTimeout(() => {
      setFailure(false);
    }, 900);
  };

  const handelSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate(PATH_DASHBOARD.navigator.home);
    }, 1500);
  };

  return (
    <>
      <SuccessModal Open={success} setopen={setSuccess} />
      <FalseModal Open={failure} setopen={setFailure} />

      <Container maxWidth="sm">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex justify-center pt-5">
              <AvatarUpload value={avatarFile} onChange={setAvatarFile} />
            </div>
            <Grid container spacing={3} className="pt-8 flex justify-center  ">
              <Grid item xs={12}>
                <FormInputs name="firstname" label="نام" type="text" />
              </Grid>
              <Grid item xs={12}>
                <FormInputs name="lastname" label="نام خانوادگی" type="text" />
              </Grid>
              <Grid item xs={12}>
                <FormInputs name="login" label="شماره موبایل" type="text" />
              </Grid>
              <Grid item xs={12}>
                <FormInputs name="password" label="رمز عبور" type="password" />
              </Grid>
              <Grid item xs={12}>
                <FormInputs
                  name="confirmPassword"
                  label="تکرار رمز عبور"
                  type="password"
                />
              </Grid>
            </Grid>

            <div className="flex justify-center px-3 py-8">
              <ButtonPostRegister
                label="ارسال"
                onError={handelsubmit}
                url="/users/register"
                onSuccess={handelSuccess}
                data={() => PropData(methods.getValues(), avatarFile)}
                type="submit"
              />
            </div>
          </form>
        </FormProvider>

        {/* {AlertErorr && (
          <div className="h-[300px]">
            <Alert variant="filled" severity="warning">
              {AlertErorr}
            </Alert>
          </div>
        )} */}
      </Container>
    </>
  );
}
