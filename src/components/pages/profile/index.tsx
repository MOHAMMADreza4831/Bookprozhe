import { Avatar, ButtonBase, TextField } from "@mui/material";
import * as React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "dayjs/locale/fa";
import "dayjs/locale/fa";
import axioshandel from "@src/components/login/header";
import { Button } from "@mui/material";
import DatePicker, { DateObject } from "react-multi-date-picker";
import EditeProfileModal from "@src/components/ui/modal/EditeProfileModal";

type datatype = {
  id: number;
  email: string;
  firstname: string;
  birth_date: string | null;
  lastname: string;
  image: string;
  phone: string;
};

const emailSchema = z.object({
  firstname: z.string().min(2, "نام خود را وارد کنیدد ").optional(),
  lastname: z.string().min(3, "نام خانوادگی خود را وارد کنی").optional(),
  phone: z.string(),
  image: z.string().optional().nullable(),
  birth_date: z.any(),
});

export default function EditProfile() {
  const [Modaledit, setModaledit] = React.useState(false);

  const [datadate, setdatadate] = React.useState<DateObject | null>(null);
  const [avatarFile, setAvatarFile] = React.useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<datatype>({
    resolver: zodResolver(emailSchema),
  });

  React.useEffect(() => {
    axioshandel.get("/user").then((res) => {
      const user = res.data.data;
      reset({
        firstname: user.first_name,
        lastname: user.last_name,
        phone: user.phone,
        birth_date: user.birth_date,
        email: user.email,
        image: user.image,
      });
      if (user.birth_date) {
        setdatadate(
          new DateObject({
            date: user.birth_date,
            format: "YYYY-MM-DD",
          })
        );
      }
    });
  }, [reset]);

  const [Avatardata, setAvatardata] = React.useState<string | undefined>(
    undefined
  );
  const navigate = useNavigate();

  const handeladdavatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setAvatardata(reader.result as string);
        setValue("image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = async (data: datatype) => {
    const formData = new FormData();
    formData.append("_method", "put");

    formData.append("first_name", data.firstname || "");
    formData.append("last_name", data.lastname || "");
    formData.append("phone", data.phone);
    formData.append(
      "birth_date",
      datadate ? datadate.format("YYYY-MM-DD") : ""
    );
    if (avatarFile) {
      formData.append("image", avatarFile);
    }

    try {
      await axioshandel.post("/user/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setModaledit(true);
      setTimeout(() => {
        setModaledit(false);
        navigate(-1);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <EditeProfileModal Open={Modaledit} setopen={setModaledit} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="sticky to flex-row z-10  w-full h-16  "
          style={{ backgroundColor: "#95bccc" }}
        >
          <div className="flex      py-4 ">
            <button
              onClick={() => navigate(-1)}
              style={{ color: "white" }}
              className="font-bold flex "
            >
              <IoChevronBackOutline
                style={{ color: "white" }}
                className="  rotate-180 size-5 "
              />
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
            label="نام "
            InputLabelProps={{ shrink: true }}
            type="text"
            error={!!errors.firstname}
            helperText={errors.firstname?.message || ""}
            autoComplete="current-password"
          />
          <TextField
            {...register("lastname")}
            label="نام خانوادگی"
            InputLabelProps={{ shrink: true }}
            type="text"
            error={!!errors.lastname}
            helperText={errors.lastname?.message || ""}
            autoComplete="current-password"
          />
          <TextField
            {...register("phone")}
            label="شماره موبایل "
            InputLabelProps={{ shrink: true }}
            InputProps={{ readOnly: true }}
            type="text"
            error={!!errors.phone}
            helperText={errors.phone?.message || ""}
            autoComplete="current-password"
          />
          <DatePicker
            format="YYYY-MM-DD"
            value={datadate}
            onChange={setdatadate}
          />
          <div className="felx justify-center  "></div>
        </div>
        <div className="felx justify-center px-3 py-8 ">
          <Button
            type="submit"
            className="w-full "
            fullWidth
            style={{ backgroundColor: "rgba(149, 188, 204, 1)" }}
          >
            ذخیره
          </Button>
        </div>
      </form>
    </>
  );
}
