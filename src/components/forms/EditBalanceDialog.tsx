import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
type Props = {
  open: boolean;
  value: number;
  onClose: () => void;
  onSave: (value: number) => void;
};
export default function EditBalanceDialog({
  open,
  value,
  onClose,
  onSave,
}: Props) {
  const [balance, setBalance] = useState(value);
  useEffect(() => {
    setBalance(value);
  }, [value]);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Current Balance</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          type="number"
          label="Current Balance"
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          sx={{ mt: 1 }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={() => {
            onSave(balance);
            onClose();
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
