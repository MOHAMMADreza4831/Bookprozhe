import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">جنسیت </FormLabel>
      <RadioGroup defaultValue="female" name="">
        <FormControlLabel value="female" control={<Radio />} label="زن" />
        <FormControlLabel value="male" control={<Radio />} label="مرد" />
        <FormControlLabel value="other" control={<Radio />} label="سفارشی" />
      </RadioGroup>
    </FormControl>
  );
}
