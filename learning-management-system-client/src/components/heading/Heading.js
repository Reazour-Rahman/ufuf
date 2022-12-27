import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Heading = ({ title, head, subHead }) => {
  const theme = useTheme();
  const lay = {
    textAlign: "center",
    marginBottom: "70px",
    color: theme.palette.background.hardPurple,
  };
  return (
    <Box sx={{ ...lay }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="h2">{head}</Typography>
      <Typography variant="h6">{subHead}</Typography>
    </Box>
  );
};

export default Heading;
