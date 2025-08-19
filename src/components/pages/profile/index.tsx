import { Avatar, Button, ButtonBase, TextField } from "@mui/material";
import { PATH_DASHBOARD } from "@src/routes/paths";
import * as React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Form, useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "dayjs/locale/fa";
import "dayjs/locale/fa";
import axioshandel from "@src/components/login/header";
import { DatePicker } from "jalaali-react-date-picker";

type datatype = {
  id: number;
  email: string;
  firstname: string;
  birth_date: string;
  lastname: string;
  image: string;
};

const emailSchema = z.object({
  // phone: z
  //   .string()
  //   .regex(/^(?:\+98|0098|0)?9[0-9]{9}$/, "شماره تلفن وارد شده اشتباه است ")
  //   .min(11, "شماره تلفن وارد شده اشتباه است"),

  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),

  firstname: z.string().min(2, "نام خود را وارد کنیدد "),
  lastname: z.string().min(3, "نام خانوادگی خود را وارد کنی"),
});

export default function EditProfile() {

  // const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<datatype>({
    resolver: zodResolver(emailSchema),
  });

  const onsubmit = async (data: datatype) => {
    try {
      await axioshandel.put("/user/update", {
        first_name: data.firstname,
        last_name: data.lastname,
        email: data.email,
        image: data.image,
        birth_date: data.birth_date,
      });
      await navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const [Avatardata, setAvatardata] = React.useState<string | undefined>(
    undefined
  );
  const navigate = useNavigate();

  const handeladdavatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatardata(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onsubmit)} encType="multipart/form-data">
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <IoChevronBackOutline
            style={{ color: "white" }}
            className="  rotate-180 size-5 "
          />
          <button
            onClick={() => navigate(PATH_DASHBOARD.navigator.home)}
            style={{ color: "white" }}
            className="font-bold"
          >
            بازگشت
          </button>
        </div>
      </div>
      <div className="flex justify-center items-end   h-20  ">
        <h1 className="font-bold ">حساب کاربری</h1>
      </div>
      <div>
        <ButtonBase
          component="label"
          role={undefined}
          tabIndex={-1}
          className="flex "
          aria-label="Avatar image"
          sx={{
            borderRadius: "40px",
            "&:has(:focus-visible)": {
              outline: "2px solid",
              outlineOffset: "2px",
            },
          }}
        >
          <Avatar
            alt="Upload new avatar"
            className=""
            style={{ width: "200px ", height: "200px " }}
            src={Avatardata}
          />
          <input
            name="image"
            type="file"
            accept="image/*"
            style={{
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
              width: "1px",
            }}
            onChange={handeladdavatar}
          />
        </ButtonBase>
      </div>
      <div className="flex flex-col justify-center gap-4 mt-5 mx-10">
        <TextField
          {...register("firstname")}
          id="outlined-password-input"
          label="نام "
          type="text"
          error={!!errors.firstname}
          helperText={errors.firstname?.message || ""}
          autoComplete="current-password"
        />
        <TextField
          {...register("lastname")}
          id="outlined-password-input"
          label="نام خانوادگی"
          type="text"
          error={!!errors.lastname}
          helperText={errors.lastname?.message || ""}
          autoComplete="current-password"
        />
        {/* <TextField
          {...register("phone")}
          id=""
          error={!!errors.phone}
          helperText={errors.phone?.message || ""}
          label="شماره موبایل"
          type="number"
          autoComplete=""
        /> */}
        <TextField
          {...register("email")}
          id="outlined-password-input"
          label="ایمیل"
          type="text"
          error={!!errors.email}
          helperText={errors.email?.message || ""}
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="اینستاگرام"
          type="text"
          autoComplete=""
        />
        <div className="felx justify-center  ">
          <DatePicker />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa"> 
            <DatePicker
              label="تاریخ تولد"
              value={birthdate}
              onChange={(newValue) => {
                setBirthdate(newValue); 
              }}
              slotProps={{
                textField: {
                  helperText: "تاریخ تولد خود را انتخاب کنید",
                },
              }}
            /> 
         </LocalizationProvider> */}
        </div>
      </div>
      <div className="felx justify-center px-3 py-8 ">
        <Button
          type="submit"
          className="w-full "
          sx={{ backgroundColor: "rgba(149, 188, 204, 1)" }}
          variant="contained"
        >
          ذخیره
        </Button>
      </div>
    </Form>
  );
}
