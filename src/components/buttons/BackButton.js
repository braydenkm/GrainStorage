import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(-1)}
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
