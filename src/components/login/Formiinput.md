```jsx
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Stack, TextField, TextFieldProps, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export interface IProps {
  name: string;
  label?: string;
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
  inputLableShrink?: boolean;
  helperComponenet?: React.JSX.Element;
  type?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

const FormInputs = ({
  name,
  placeholder,
  label,
  maxRows,
  minRows,
  multiline = false,
  helperComponenet,
  disabled,
  autoFocus,
  inputLableShrink,
}: IProps & TextFieldProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack gap={2}>
          <TextField
            placeholder={placeholder}
            error={!!error?.message}
            helperText={error?.message || ""}
            label={label}
              type={name === 'password' && !showPassword ? 'password' : 'text'}
            slotProps={{
              inputLabel: {
                shrink: inputLableShrink,
              },
            }}
            maxRows={maxRows}
            minRows={minRows}
            multiline={multiline}
            disabled={disabled}
            autoFocus={autoFocus}
            {...field}
            InputProps={name === 'password' ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            } : {}}
          />
          {helperComponenet}
        </Stack>
      )}
    />
  );
};

export default FormInputs;
