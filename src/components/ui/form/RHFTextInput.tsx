import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {  Stack, TextField, TextFieldProps } from "@mui/material";


export interface IProps {
  name: string;
  label?: string;
  helperComponenet?: React.JSX.Element;
}

const RHFTextInput = ({
  name,
  placeholder,
  label,
  helperComponenet,
  type,
  disabled,
  autoFocus,
  ...others
}: IProps & TextFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack gap={2}>
          <TextField
            placeholder={placeholder}
            // textAlign="right"
            error={!!error?.message}
            // helperText={error?.message || ""}
            label={label}
            type={type}
            disabled={disabled}
            autoFocus={autoFocus}
            {...field}
            {...others}
          />
          {helperComponenet}
        </Stack>
      )}
    />
  );
};

export default RHFTextInput;
