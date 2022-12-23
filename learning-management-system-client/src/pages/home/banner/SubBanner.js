import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import Boundary from "../../../components/Boundary";

const SubBanner = () => {
  const theme = useTheme();
  const materials = [
    {
      title: "২৫ লক্ষ+",
      subTitle: "শিক্ষার্থী",
      color: theme.palette.background.defaultPink,
    },
    {
      title: "২৫ লক্ষ+",
      subTitle: "অ্যাপ ডাউনলোড",
      color: theme.palette.background.defaultPurple,
    },
    {
      title: "২৫ লক্ষ+",
      subTitle: "লার্নিং ম্যাটেরিয়াল",
      color: theme.palette.background.defaultMunsell,
      isMobile: "no",
    },
    {
      title: "২৫ লক্ষ+",
      subTitle: "অভিজ্ঞ মেন্টর",
      color: theme.palette.background.defaultPink,
      isBorder: "no",
    },
  ];
  /* Grid Item Rendered */
  const Items = materials.map((e, index) => (
    <Grid
      item
      xs={6}
      sm={3}
      key={index}
      sx={{
        textAlign: "center",
        borderRight: {
          sm:
            e.isBorder === undefined
              ? `1px solid ${theme.palette.text.secondary}`
              : "0px",
          xs: "none",
        },
      }}
    >
      <Typography variant="h2" sx={{ color: e.color }}>
        {e.title}
      </Typography>
      <Typography variant="soft">{e.subTitle}</Typography>
    </Grid>
  ));
  const container = {
    backgroundColor: theme.palette.common.white,
    p: 2,
    boxShadow: 1,
    borderRadius: "15px"
  };
  return (
    <Boundary>
      <Grid container spacing={1} sx={{ ...container }}>
        {Items}
      </Grid>
    </Boundary>
  );
};

export default SubBanner;
