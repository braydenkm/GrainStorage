import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GrassIcon from "@mui/icons-material/Grass";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import InventoryIcon from "@mui/icons-material/Inventory";
import ArticleIcon from "@mui/icons-material/Article";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function BottomNav() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App-bottom-navbar">
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Vehicles"
            value="vehicles"
            icon={<AgricultureIcon />}
            component={Link}
            to="/vehicles"
          />
          <BottomNavigationAction
            label="Fields"
            value="fields"
            icon={<GrassIcon />}
            component={Link}
            to="/fields"
          />
          <BottomNavigationAction
            label="Storage"
            value="storage"
            icon={<InventoryIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Reports"
            value="reports"
            icon={<ArticleIcon />}
            component={Link}
            to="/reports"
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default BottomNav;
