import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddRecurringBillDialog from "../../components/forms/AddRecurringBillDialog";
import EditBalanceDialog from "../../components/forms/EditBalanceDialog";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(25000);
  const [balanceDialogOpen, setBalanceDialogOpen] = useState(false);
//   const paidBills = recurringBills
// .filter(x => x.paid)
// .reduce((sum, x) => sum + x.amount, 0);

// const remaining = balance - paidBills;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Current Balance</Typography>
              <Typography variant="h4">₹{balance.toLocaleString()}</Typography>

              <IconButton onClick={() => setBalanceDialogOpen(true)}>
                <EditIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Bills</Typography>

              <Typography variant="h4">₹0</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Remaining</Typography>

              <Typography variant="h4">₹25,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 4 }}>
        <List>
          <ListItem secondaryAction={<Checkbox />}>
            <ListItemText primary="Internet" secondary="Due: 5" />

            <Typography>₹999</Typography>
          </ListItem>
        </List>
      </Paper>

      <Fab
        color="primary"
        sx={{
          position: "fixed",
          right: 20,
          bottom: 20,
        }}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <AddRecurringBillDialog open={open} onClose={() => setOpen(false)} />
      <EditBalanceDialog
        open={balanceDialogOpen}
        value={balance}
        onClose={() => setBalanceDialogOpen(false)}
        onSave={setBalance}
      />
    </Box>
  );
}
