import { FC } from "react";
import MuiLoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

const LoadingButton: FC<LoadingButtonProps> = ({
  children,
  loading,
  ...otherProps
}) => {
  return (
    <MuiLoadingButton
      loading={loading}
      loadingPosition="end"
      endIcon={loading}
      {...otherProps}
    >
      {children}
    </MuiLoadingButton>
  );
};

export default LoadingButton;
