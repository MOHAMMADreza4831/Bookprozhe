import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type FormInputsprop = {
  name: string;
  label: string;
  type: string;
};

export default function FormInputs({
  name,
  label,
  type = "text",
}: FormInputsprop) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            className="w-full"
            InputLabelProps={{ shrink: true }}
            type={type}
            error={!!errors[name]}
            helperText={errors[name]?.message?.toString() || ""}
          />
        )}
      />
    </>
  );
}
