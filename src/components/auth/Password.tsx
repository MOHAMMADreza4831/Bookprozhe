import {
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import RHFTextInput from "../ui/form/RHFTextInput";
import FormProvider from "@src/providers/FormProvider";
interface IProps {

  setStep: (data: number) => void

}
export default function Password({ setStep }: IProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const passwordSchema = z.object({
    password: z.string().min(7, ('رمز  عبور باید  بیشتر از 7 کاراکتر  باشد')),

  })
  const methods = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  const {
    handleSubmit,
    formState: { errors }
  } = methods;

  const handleSaveInfo = (_data: any) => {
    setStep(3)
  }
  const handleGetNumber = () => {
    setStep(1)
  }





  return (
    <div className={"w-full flex flex-col items-center"}>
      <div className={"flex gap-1 mt-14"}>

        <Typography className={"text-gray-900 text-sm font-bold"}>رمز عبور </Typography>
        <Typography className={"text-gray-700 text-sm font-medium"}>خود را وارد کنید .</Typography>
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleSaveInfo)} className={"mt-10 w-full"}>

        <RHFTextInput
          type={showPassword ? "text" : "password"}
          name={"password"}
          helperText={errors.password?.message}
          label={"رمز عبور"}
          placeholder=" مثال : *******"
          className={"mt-10"}
          InputProps={{
            startAdornment: (
              <InputAdornment
                className={"flex text-base text-gray-500 gap-2"}
                position="start"
              >
                <LockOutlined />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography onClick={handleGetNumber} className={"text-left text-primary-800 text-xs mt-2 mb-6"}>تغییر شماره موبایل</Typography>

        <Button variant={"contained"} fullWidth size={"large"} className={"mt-4"} type={"submit"}>
          ورود
        </Button>
      </FormProvider>
    </div>
  )
}