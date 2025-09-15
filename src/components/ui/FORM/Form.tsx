import { FormProvider, useForm } from "react-hook-form";
import FormInputs from "./FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import ButtonPostRegister from "../buttons/ButtonePostRegister";
import AvatarUpload from "./Avatar";
import { useState } from "react";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD } from "@src/routes/paths";

type Formregisterdata = {
  firstname: string;
  lastname: string;
  login: string;
  image: File | null;
};
const emailSchema = z.object({
  firstname: z.string().min(2, "نام خود را وارد کنیدد ").nonempty(),
  lastname: z.string().min(3, "نام خانوادگی خود را وارد کنی").nonempty(),
  login: z.string().nonempty(),
  image: z.string().nullable(),
});

export default function Formregister() {
  const navigate = useNavigate()
  const [AlertErorr, setAlertErorr] = useState<string | null>(null);
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
      console.log(formData);
      return formData;
    } else {
      return { ...values };
    }
  };

  const onSubmit = (data: Formregisterdata) => {
    console.log("اطلاعات فرم:", data);
  };

  const handelsubmit = (msg: string) => {
    setAlertErorr(msg);
    setTimeout(() => {
      setAlertErorr(null);
    }, 3000);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex justify-center pt-5">
            <AvatarUpload value={avatarFile} onChange={setAvatarFile} />
          </div>
          <div className="flex flex-col gap-4 pt-10">
            <FormInputs name="firstname" label="نام " type="text" />
            <FormInputs name="lastname" label="نام خانوادگی" type="text" />
            <FormInputs name="login" label="شماره موبایل " type="text" />
          </div>
          <div className="flex  justify-center px-3 py-8 ">
            <ButtonPostRegister
              label="ارسال"
              onError={handelsubmit}
              url="/users/register"
              onSuccess={() => {
                navigate(PATH_DASHBOARD.navigator.home);
              }}
              data={() => PropData(methods.getValues(), avatarFile)}
              type="submit"
            />
          </div>
        </form>
      </FormProvider>
      <div className="h-[300px]  ">
        {AlertErorr && (
          <Alert variant="filled" severity="warning">
            {AlertErorr}
          </Alert>
        )}
      </div>
    </>
  );
}
