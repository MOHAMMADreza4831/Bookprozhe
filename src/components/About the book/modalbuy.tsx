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
  const [sub, setsub] = useState(false);
  const handelsub = () => {
    setsub(!sub);
  };

  const { handleSubmit: handleSubmit1 } = useFiltersatus(book, [1]);
  const { handleSubmit: handleSubmit2 } = useFiltersatus(book, [2]);

  return (
    <>
      <Button
        className="w-full"
        sx={{ backgroundColor: "#b7d9e5", color: "#578b9f" }}
        onClick={handleOpen}
      >
        خرید کتاب
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-backdrop ">
          <div
            className="modal-content   rounded-full "
            style={{ backgroundColor: "#b7d9e5" }}
          >
            <div className=" flex items-center  justify-around  h-[50%]">
              <Button
                className="rounded-full "
                sx={{ backgroundColor: "#2e697c" }}
                onClick={() => {
                  handleSubmit1(); handelsub();
                }}
              />
              <p>ترجمه</p>
            </div>
            <div className="flex justify-around items-center">
              <Button
                className="rounded-full"
                sx={{ backgroundColor: "#2e697c" }}
                onClick={handleSubmit2}
              />
              <p>خلاصه</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
