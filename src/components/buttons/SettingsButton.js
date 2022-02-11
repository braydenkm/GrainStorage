import * as React from "react";
import { Link } from "react-router-dom";
import { Settings } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";

function SettingsButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccount = () => {
    <Link to="/account"></Link>;
    handleClose();
  };
  const handleSettings = () => {
    <Link to="/settings"></Link>;
    handleClose();
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Settings />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAccount}>
          <Link to="/account">Account</Link>
        </MenuItem>
        <MenuItem onClick={handleSettings}>
          <Link to="/settings">Settings</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SettingsButton;
