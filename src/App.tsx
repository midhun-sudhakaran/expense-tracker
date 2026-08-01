import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useEffect } from "react";
import { seedDatabase } from "./db/seed";
function App() {
  useEffect(() => {
    seedDatabase();
  }, []);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Expense Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Total Spent</Typography>

              <Typography variant="h4">₹0.00</Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography color="text.secondary">Pending Payments</Typography>

              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
export default App;

