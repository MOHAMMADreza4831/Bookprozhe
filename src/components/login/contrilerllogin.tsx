import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button, TextField } from "@mui/material";

type FormData = {
  login: string;
  password: string;
};

const schema = z.object({
  Login: z.string().min(1, "وارد کردن ایمیل الزامی است "),
  password: z.string().min(5,"رمز باید حداقل باید دارای 5 کاراکتر باشه "),
});

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="login"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="ایمیل یا نام کاربری"
            error={!!errors.login}
            helperText={errors.login?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="رمز عبور"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />
        )}
      />
      <Button type="submit" variant="contained" fullWidth>
        ورود
      </Button>
    </form>
  );
}
