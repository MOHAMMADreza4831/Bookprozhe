import { Button } from "@mui/material";
import axioshandel from "@src/components/login/header";
import { useState } from "react";

type Buttondata = {
  data: any | (() => any);
  url: string;
  label: string;
  type: "button" | "submit" | "reset";
  onError?: (msg: string) => void;
  onSuccess?: (res: any) => void;
};

export default function ButtonPostRegister({
  data,
  url,
  label,
  onSuccess,
  type,
  onError,
}: Buttondata) {
  const [loading, setLoading] = useState(false);

  const handelsubmit = async () => {
    setLoading(true);
    try {
      const payload = typeof data === "function" ? data() : data;
      console.log(url)
      let res;
      if (payload instanceof FormData) {
        res = await axioshandel.post(url, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        res = await axioshandel.post(url, payload);
      }

      const Token = res.data.data?.token;
      if (Token) {
        localStorage.setItem("token", Token);
      }
      if (onSuccess) {
        onSuccess(res.data);
      }
      console.log("ارسال موفق!");
    } catch (error: any) {
      const errMsg = error.status;
      if (onError) {
        onError(errMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="rounded-[20px] bg-[#95bccc] w-full"
      type={type}
      onClick={handelsubmit}
      disabled={loading}
      >
      {loading ? "درحال ارسال..." : label}
    </Button>
  );
}
