import { Controller, useFormContext } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";

type datatype = {
  birth_date: DateObject | null;
};

export default function DatePickerregister() {
  
  
  const { control } = useFormContext<datatype>();
    return (
    <Controller
      name="birth_date"
      control={control}
      defaultValue={null}
      render={({ field }) => (
        <DatePicker
          {...field}
          value={field.value}
          onChange={(date) => field.onChange(date)}
          format="YYYY-MM-DD"
        />
      )}
    />
  );
}
