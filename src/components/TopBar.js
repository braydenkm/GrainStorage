import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { BackButton, SettingsButton } from "./index";
import { Box } from "@mui/system";

function TopBar(props) {
  return (
    <div className="App-topbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" elevation={0}>
          <Toolbar>
            <BackButton />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {props.title}
            </Typography>
            <SettingsButton />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default TopBar;
