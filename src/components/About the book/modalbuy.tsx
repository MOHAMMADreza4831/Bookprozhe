import { Button, Modal } from "@mui/material";
import { useState } from "react";
import "@src/styles/index.css";
import { useFiltersatus } from "./Filterstatus";
import { Book } from "../Data/interfaceDATA";

type Props = {
  book: Book;
};
export default function ModalBUY({ book }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit: handleSubmit1 } = useFiltersatus(book, [1]);
  const { handleSubmit: handleSubmit2 } = useFiltersatus(book, [2]);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-backdrop">
          <div className="modal-content ">
            <div className="bg-slate-400 flex items-center  h-[50%]">
              <Button onClick={handleSubmit1} />
              <p>ترجمه</p>
            </div>
            <div className="flex items-center">
              <Button onClick={handleSubmit2} />
              <p>خلاصه</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
