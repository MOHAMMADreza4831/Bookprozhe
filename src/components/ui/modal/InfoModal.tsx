import { Dispatch, FC, SetStateAction } from "react";
import { Box, styled, Typography } from "@mui/material";

import Modal from "@src/components/ui/modal";

interface IProps {
  open: boolean;
  loading?: boolean;
  changeOpen: Dispatch<SetStateAction<boolean>>;
  confirm: () => void;
  title: string;
  message: string;
  nextTitle?: string;
}

const InfoModal: FC<IProps> = ({
  open,
  changeOpen,
  loading = false,
  confirm,
  title,
  message,
  nextTitle = "حذف",
}) => {
  const modalPrevious = () => {
    changeOpen(false);
  };

  return (
    <Modal
      open={open}
      maxWidth="xs"
      previousTitle="بازگشت"
      nextTitle={nextTitle}
      loading={loading}
      nextColor="info"
      previous={modalPrevious}
      next={confirm}
      onClose={() => changeOpen(false)}
    >
      <MainBox>
        {/* <Image
          src="/images/icons/danger-circle.svg"
          alt="danger"
          width={24}
          height={24}
        /> */}
        <Typography variant="bold20" sx={{ mt: 2 }}>
          {title}
        </Typography>
        <Typography variant="regular14" sx={{ mt: 1 }}>
          {message}
        </Typography>
      </MainBox>
    </Modal>
  );
};

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export default InfoModal;
