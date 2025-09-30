import { Box, Modal } from "@mui/material";
import LoadingGift from "@src/components/login/image/BOOK WALKING.gif";

interface PropData {
  Open: boolean;
  setopen: (Open: boolean) => void;
}

const LoadingPage = ({ Open  }: PropData) => {
  return (
    <>
      <Modal
        open={Open}
        onClose={() => {}}
        disableEscapeKeyDown
        className="flex justify-center items-center  "
      >
        <Box>
          <img src={LoadingGift} alt="" className=" w-[20vh] disabled " />
        </Box>
      </Modal>
    </>
  );
};
export default LoadingPage;
