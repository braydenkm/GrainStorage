import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

function BackButton() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="back"
      sx={{ mr: 2 }}
    >
      <ArrowBack />
    </IconButton>
  );
}

export default BackButton;
