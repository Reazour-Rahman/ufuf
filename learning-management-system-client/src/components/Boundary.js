import { Box } from "@mui/material";
import React from "react";

const Boundary = ({ children }) => {
  const bound = {
    width: "1280px",
    maxWidth: "99%",
    margin: "0 auto",
  };
  return <Box sx={{ ...bound }}>{children}</Box>;
};

export default Boundary;
