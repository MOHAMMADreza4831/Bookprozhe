import { FC, ReactNode } from "react";
import { Box, styled } from "@mui/material";

interface IProps {
  children: ReactNode;
}

const ModalTitle: FC<IProps> = ({ children }) => {
  return <TitleBox>{children}</TitleBox>;
};

const TitleBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  borderBottom: `1px solid ${theme.palette.stroke?.inactive}`,
}));

export default ModalTitle;
