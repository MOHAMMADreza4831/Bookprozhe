import { Box, Modal } from "@mui/material";
import FalseGift from "@src/components/login/image/VMC-EQUIS.gif";
interface PropData {
  Open: boolean;  setopen: (Open: boolean) => void;
}

const FalseModal = ({ Open }: PropData) => {
  return (
    <>
      <Modal
        open={Open}
        onClose={() => {}}
        disableEscapeKeyDown
        className="flex justify-center items-center  "
      >
        <Box>
          <img src={FalseGift} alt="" className=" w-[20vh] disabled " />w{" "}
        </Box>
      </Modal>
    </>
  );
};
export default FalseModal;
