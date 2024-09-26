import { Button, Typography, useTheme } from "@mui/material";
import React from "react";

const PurpleButton = ({ children, wdt }) => {
  const theme = useTheme();

  /* Style */
  const buttonStyle = {
    backgroundColor: theme.palette.background.defaultPurple,
    "&:hover": {
      backgroundColor: theme.palette.background.hardPurple,
    },
    color: "white",
    padding: "12px 24px",
    borderRadius: "15px",
    width: wdt === undefined ? "auto" : wdt,
    boxShadow: 1
  };

  return (
    <Button sx={{ ...buttonStyle }}>
      <Typography variant="subtitle1">{children}</Typography>
    </Button>
  );
};

export default PurpleButton;
