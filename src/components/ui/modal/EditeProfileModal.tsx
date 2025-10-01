import { Box, Modal } from "@mui/material";
import ProfileGift from "@src/assets/gif/Profile.gif";
interface PropData {
  Open: boolean;
  setopen: (Open: boolean) => void;
}

const EditeProfileModal = ({ Open }: PropData) => {
  return (
    <>
      <Modal
        open={Open}
        onClose={() => {}}
        disableEscapeKeyDown
        className="flex justify-center items-center  "
      >
        <Box>
          <img src={ProfileGift} alt="" className=" w-[30vh] disabled " />
        </Box>
      </Modal>
    </>
  );
};
export default EditeProfileModal;
