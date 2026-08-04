import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import BottomNav from "./navigation/BottomNav";
import Bills from "./pages/Bills/Bills";
import Dashboard from "./pages/Dasshboard/Dashboard";
import Expenses from "./pages/Expenses/Expenses";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Expense Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/bills" element={<Bills/>} />
          <Route path="/expenses" element={<Expenses/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </Container>
      <BottomNav />
    </>
  );
}
export default App;
