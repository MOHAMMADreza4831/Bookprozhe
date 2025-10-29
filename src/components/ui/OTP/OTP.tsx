import * as React from "react";
import { Input as BaseInput } from "@mui/base/Input";
import { Box, styled } from "@mui/system";
import Buttoneauth from "../buttons/buttonauth";
import { Alert, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function OTP({
  separator,
  length,
  value,
  onChange,
}: {
  separator: React.ReactNode;
  length: number;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputRefs = React.useRef<HTMLInputElement[]>(
    new Array(length).fill(null)
  );

  const focusInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    currentIndex: number
  ) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        event.preventDefault();
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex < length + 1) focusInput(currentIndex - 1);
        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex > 0) focusInput(currentIndex - 1);
        break;
      case "Delete":
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });

        break;
      case "Backspace":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentIndex: number
  ) => {
    const currentValue = event.target.value;
    const lastValue = currentValue[currentValue.length - 1];

    if (!/^\d$/.test(lastValue)) return;

    onChange((prev) => {
      const otpArray = prev.split("");
      let indexToEnter = length - 1;
      while (indexToEnter >= 0 && otpArray[indexToEnter]) {
        indexToEnter -= 1;
      }
      if (indexToEnter >= 0) {
        otpArray[indexToEnter] = lastValue;
      }
      return otpArray.join("");
    });

    if (currentIndex > 0) {
      focusInput(currentIndex - 1);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    currentIndex: number
  ) => {
    selectInput(currentIndex);
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
    currentIndex: number
  ) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (
          inputRefs.current[indexToEnter].value &&
          indexToEnter < currentIndex
        ) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? " ";
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        gap: 1,
        alignItems: "center",
      }}
    >
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <BaseInput
            slots={{
              input: InputElement,
            }}
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: (ele) => {
                  inputRefs.current[index] = ele!;
                },
                onKeyDown: (event) => handleKeyDown(event, index),
                onChange: (event) => handleChange(event, index),
                onClick: (event) => handleClick(event, index),
                onPaste: (event) => handlePaste(event, index),
                value: value[index] ?? "",
                inputMode: "numeric", // فقط عدد
                pattern: "[0-9]*",
              },
            }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

export default function OTPInput() {
  const [otp, setOtp] = React.useState("");
  const navigate = useNavigate();
  const handelclickbutton = () => {
    if (otp === "1234") {
      navigate("/auth/ChangePassword");
    }
  };
  const [timeLeft, setTimeLeft] = React.useState(60);
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    if (!isRunning) return;

    if (timeLeft === 0) {
      setIsRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isRunning]);

  const handleClick = () => {
    setTimeLeft(60);
    setIsRunning(true);
  };
  return (
    <Box className="w-full flex justify-center flex-col items-center ">
      <OTP separator={<span></span>} value={otp} onChange={setOtp} length={4} />
      <div className=" my-10 flex flex-col justify-center items-center pt-10">
        <Typography className="text-white"> کدی ارسال نشد؟!</Typography>
        {timeLeft > 0 ? (
          <h6 className="text-white">
            زمان باقی‌مانده:
            <span style={{ color: " #2DAA9E" }}> {timeLeft} ثانیه</span>
          </h6>
        ) : (
          <h6
            onClick={handleClick}
            style={{ cursor: "pointer", color: "#2DAA9E" }}
          >
            ارسال دوباره ایمیل
          </h6>
        )}
      </div>
      <Buttoneauth onClick={() => handelclickbutton()} text="ارسال" />
    </Box>
  );
}

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputElement = styled("input")(
  ({ theme }) => `
  width: 60px;
  height: 60px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 3vh;
  font-weight: 400;
  line-height: 2.5;
  padding: 8px 0;
  border-radius: 8px;
  text-align: center;
  color: ${theme.palette.mode === "light" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "light" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "light" ? grey[700] : grey[200]};



  /* firefox */
  &:focus-visible {
    outline: 0;
  }
`
);
