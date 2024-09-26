import { Button, Typography, useTheme } from "@mui/material";
import React from "react";

const PinkButton = ({ children, wdt }) => {
  const theme = useTheme();

  /* Style */
  const buttonStyle = {
    backgroundColor: theme.palette.background.defaultPink,
    "&:hover": {
      backgroundColor: theme.palette.background.hardPink,
    },
    color: "white",
    padding: "12px 24px",
    borderRadius:"15px",
    width: wdt === undefined ? "auto" : wdt,
    boxShadow: 1
  };
  console.log(wdt);

  return (
    <Button sx={{ ...buttonStyle }}>
      <Typography variant="subtitle1">{children}</Typography>
    </Button>
  );
};

export default PinkButton;
