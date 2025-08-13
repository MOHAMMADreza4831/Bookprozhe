import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, InputAdornment, Typography } from "@mui/material";
import FormProvider from "@src/providers/FormProvider.tsx";
import RHFTextInput from "@src/components/ui/form/RHFTextInput.tsx";
import { PhoneOutlined } from "@mui/icons-material";

interface IProps {
  setStep: (data: number) => void;
  setPhone: (phone: string) => void;
}

export default function GetNumber({ setStep, setPhone }: IProps) {
  const numberSchema = z.object({
    phone: z.string().regex(/^09\d{9}$/, {
      message: "شماره تلفن وارد شده اشتباه است",
    }),
  });
  const methods = useForm<z.infer<typeof numberSchema>>({
    defaultValues: {
      phone: "",
    },
    resolver: zodResolver(numberSchema),
  });

  const {
    handleSubmit,
  } = methods;

  const handleSaveInfo = (data: any) => {
    setPhone(data.phone)
    setStep(2);
  };

  const handleSentCode = () => {
    setStep(3)

  }


  return (
    <div className={"w-full flex flex-col items-center"}>
      <div className={"flex gap-1 mt-14"}>
        <Typography className={"text-gray-700 text-sm font-medium"}>برای</Typography>
        <Typography className={"text-gray-900 text-sm font-bold"}>ورود</Typography>
        <Typography className={"text-gray-700 text-sm font-medium"}> به آبان کالر ، شماره تلفن خود را وارد
          کنید.</Typography>
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleSaveInfo)} className={"mt-10 w-full"}>
        <RHFTextInput
          name={"phone"}
          label={'شماه موبایل'}
          placeholder="مثال : 09151112345"
          InputProps={{
            startAdornment: (
              <InputAdornment
                className={"flex text-base text-gray-500 gap-2"}
                position="start"
              >
                <PhoneOutlined />
              </InputAdornment>
            ),
          }}
        />
        <Button variant={"contained"} fullWidth size={"large"} className={"mt-4"} type={"submit"}>
          ورود
        </Button>
      </FormProvider>
      <Typography onClick={handleSentCode} className={"text-gray-600 text-sm mt-6"}>ورود با رمز عبور یکبار
        مصرف</Typography>
    </div>
  );
}