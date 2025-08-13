// date picker imports
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { Stack, TextField, useTheme } from "@mui/material";
// import { AtomSettingState } from "stateManagement/atoms/settingAtom";
// import { useAtomValue } from "jotai";

const RHFDatePicker = ({ name, label }: { label: string; name: string }) => {
  // const { language } = useAtomValue(AtomSettingState);
  const { control } = useFormContext();
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const adapter: any = isRTL ? AdapterDateFnsJalali : AdapterDateFns;;
  // TODO should work on datepicker anchor when picker want to close go in wrong position left top screen coroner
  return (
    <Stack
      sx={{ width: 400 }}

    >
      <LocalizationProvider dateAdapter={adapter}>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, ref, name, value },
            fieldState: { error },
          }) => (
            <DatePicker
              maxDate={new Date("2005-01-01")}
              minDate={new Date("1970-01-01")}
              label={label}
              value={new Date(value)}
              inputRef={ref}
              ref={ref}
              onChange={onChange}
              slots={{
                textField: (params: any) => <TextField {...params} />
              }}
              slotProps={{
                textField: {
                  name,
                  label,
                  error: !!error,
                  helperText: error?.message,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default RHFDatePicker;
