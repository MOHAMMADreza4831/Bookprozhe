import React, { FC, ReactNode } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogProps,
  IconButton,
  styled,
} from "@mui/material";

import ModalTitle from "./ModalTitle";
import LoadingButton from "../buttons/LoadingButton";
import { LoadingButtonProps } from "@mui/lab/LoadingButton";
import {
  Close
} from '@mui/icons-material';

interface IProps extends DialogProps {
  closeButton?: boolean;
  hasNext?: boolean;
  hasPrevious?: boolean;
  nextTitle?: string | boolean;
  previousTitle?: string | boolean;
  loading?: boolean;
  disableBackdropClick?: boolean;
  previousVariant?: LoadingButtonProps["variant"];
  previousColor?: LoadingButtonProps["color"];
  nextVariant?: LoadingButtonProps["variant"];
  nextColor?: LoadingButtonProps["color"];
  nextDisabled?: boolean;
  next?: () => void;
  previous?: () => void;
  onClose: () => void;
}

const Modal: FC<IProps> = ({
  open,
  maxWidth = "sm",
  closeButton = true,
  hasNext = true,
  hasPrevious = true,
  nextTitle,
  previousTitle,
  loading = false,
  disableBackdropClick = false,
  previousVariant = "outlined",
  previousColor = "secondary",
  nextVariant = "contained",
  nextColor = "primary",
  nextDisabled = false,
  next,
  previous,
  children,
  onClose,
  ...rest
}) => {
  let modalTitle: ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === ModalTitle) {
      modalTitle = child;
    }
  });

  const filteredChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type !== ModalTitle
  );

  const handleClose: DialogProps["onClose"] = (_, reason) => {
    if (disableBackdropClick && reason && reason === "backdropClick") return;
    onClose();
  };

  return (
    <Dialog
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      disableRestoreFocus
      {...rest}
    >
      {closeButton && (
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
      )}

      {!!modalTitle && modalTitle}
      <ContentBox>{filteredChildren}</ContentBox>

      <ActionsBox>
        {hasPrevious && (
          <Button
            variant={previousVariant}
            color={previousColor}
            sx={{ mr: 3 }}
            onClick={previous}
          >
            {!!previousTitle ? previousTitle : "لغو"}
          </Button>
        )}
        {hasNext && (
          <LoadingButton
            variant={nextVariant}
            color={nextColor}
            type={"submit"}
            loading={loading}
            disabled={nextDisabled}
            onClick={next}
          >
            {!!nextTitle ? nextTitle : "بعدی"}
          </LoadingButton>
        )}
      </ActionsBox>
    </Dialog>
  );
};

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 24,
  right: 12,
  transform: "translate(0, -50%)",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.stroke.active}`,
  boxShadow:
    "0px 3px 6px -3px rgba(0, 0, 0, 0.05), 0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 1px 2px -1px rgba(0, 0, 0, 0.05)",
  ":hover": {
    backgroundColor: theme.palette.background.paper,
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
}));

const ActionsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  borderTop: `1px solid ${theme.palette.stroke?.inactive}`,
  backgroundColor: theme.palette.back?.subdude,
  borderBottomLeftRadius: theme.spacing(4),
  borderBottomRightRadius: theme.spacing(4),
}));

export default Modal;
