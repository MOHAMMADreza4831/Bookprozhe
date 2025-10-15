import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface datatype {
  rating: number;
  disable: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSubmit: () => void;
}

export default function ButtonModal({
  rating,
  disable,
  open,
  onOpen,
  onClose,
  onSubmit,
}: datatype) {
  return (
    <>
      <Button disabled={disable} variant="contained" onClick={onOpen}>
        ثبت رأی
      </Button>

      <Dialog open={open} onClose={onClose}>
        <DialogTitle>شما تنها یک بار اجازه ثبت نظر دارید</DialogTitle>
        <DialogContent>شما {rating} ستاره دادید.</DialogContent>
        <DialogActions>
          <Button onClick={onClose}>بستن</Button>
          <Button
            variant="contained"
            onClick={() => {
              onSubmit();
              onClose();
            }}
          >
            اقدام
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
