import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaymentsIcon from "@mui/icons-material/Payments";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useLocation, useNavigate } from "react-router-dom";
const routes = ["/", "/bills", "/expenses", "/reports", "/settings"];
export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const value = routes.indexOf(location.pathname);
  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <BottomNavigation
        value={value === -1 ? 0 : value}
        onChange={(_, newValue) => navigate(routes[newValue])}
      >
        <BottomNavigationAction label="Home" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Bills" icon={<ReceiptLongIcon />} />

        <BottomNavigationAction label="Expenses" icon={<PaymentsIcon />} />

        <BottomNavigationAction label="Reports" icon={<BarChartIcon />} />

        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
