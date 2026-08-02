import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
type Props = {
  open: boolean;
  onClose: () => void;
};
export default function AddRecurringBillDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Recurring Bill</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField label="Description" fullWidth />

          <TextField label="Amount" type="number" fullWidth />

          <TextField
            label="Due Day"
            type="number"
            slotProps={{ htmlInput: { min: 1, max: 31 } }}
            fullWidth
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
