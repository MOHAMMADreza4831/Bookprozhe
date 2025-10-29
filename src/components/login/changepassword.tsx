import TextFilePassword from "../ui/OTP/TextFilePassword";
import Typography from "@mui/material/Typography";

export default function ChangePassword() {
  return (
    <div className="">
      <div className="px-4 pt-20 pb-20  ">
        <Typography className="text-white" variant="subtitle1" color="initial">
          رمز جدید را وارد کنید
        </Typography>
        <Typography className="text-white" variant="body1" color="initial">
          رمز عبور جدید را وارد و در جایی یادداشت کنید ک فراموش نکنید
        </Typography>
      </div>
      <div className="">
        <TextFilePassword />
      </div>
    </div>
  );
}
