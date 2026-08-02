import {
AppBar,
Toolbar,
Typography,
Container,
} from "@mui/material";
import Dashboard from "./pages/Dasshboard/Dashboard";
function App() {
return (
<>
<AppBar position="static">
<Toolbar>
<Typography variant="h6">
Expense Tracker
</Typography>
</Toolbar>
</AppBar>
  <Container sx={{ mt: 4 }}>
    <Dashboard />
  </Container>
</>

);
}
export default App;