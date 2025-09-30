import { Box, Modal } from "@mui/material";
import SuccessGift from "@src/components/login/image/Success.gif";
interface PropData {
  Open: boolean;
  setopen: (Open: boolean) => void;
}

const SuccessModal = ({ Open }: PropData) => {
  return (
    <>
      <Modal
        open={Open}
        onClose={() => {}}
        disableEscapeKeyDown
        className="flex justify-center items-center  "
      >
        <Box>
          <img src={SuccessGift} alt="" className=" w-[20vh] disabled " />
        </Box>
      </Modal>
    </>
  );
};
export default SuccessModal;
