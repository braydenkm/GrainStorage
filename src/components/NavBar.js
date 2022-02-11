import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { BackButton, MenuButton } from "./index";
import { Box } from "@mui/system";

function NavBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BackButton />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <MenuButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
