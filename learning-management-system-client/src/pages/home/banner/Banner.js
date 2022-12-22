import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import PinkButton from "../../../components/button/PinkButton";
import PurpleButton from "../../../components/button/purpleButton";
import { styled } from "@mui/material/styles";
import bannerImg from "../../../assets/Hero_area.png";
import Boundary from "../../../components/Boundary";

const BannerContainerStyle = styled("section")(({ theme }) => ({
  backgroundImage: `url(${bannerImg})`,
  backgroundColor: "#320fa1",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  //   overflow: "hidden",
}));
const mystery = {
  margin: {
    xs: 0,
    sm: 0,
    md: "0px 50px",
  },
  borderRadius: {
    xs: 0,
    sm: 0,
    md: "15px",
  },
};
const Layer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  //   justifyContent: "space-between",
}));

const Banner = () => {
  const theme = useTheme();
  const short = theme.palette;

  const caption = {
    color: theme.palette.background.defaultMunsell,
    marginBottom: "16px",
  };
  const lay = {
    display: "flex",
    alignItems: "center",
    gap: {
      md: 3,
      sm: 2,
      xs: 1,
    },
    mt: 4,
    justifyContent: {
      md: "start",
      sm: "center",
      xs: "center",
    },
  };
  const media = {
    textAlign: {
      md: "start",
      sm: "center",
      xs: "center",
    },
  };
  const parentGrid = {
    display: "flex",
    alignItems: "center",
    py: { md: 7, sm: 3, xs: 7 },
  };
  return (
    <Box sx={{mt: 11}}>
    <BannerContainerStyle sx={{ ...mystery }}>
      <Boundary>
        <Grid container spacing={2} sx={{ ...parentGrid }}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ ...media }}>
            <Typography variant="subtitle1" sx={{ ...caption }}>
              স্কিলের সমাধান
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: short.common.white, marginBottom: "16px" }}
            >
              Biddaloi একাডেমিক প্রোগ্রাম <br /> SSC-HSC’ র A+ প্রস্তুতি এখানেই
            </Typography>
            <Typography
              variant="light"
              sx={{ color: theme.palette.common.white, marginBottom: "16px" }}
            >
              নবম থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের সারাবছর <br />
              পড়ালেখার কমপ্লিট সল্যুশন
            </Typography>
            <br />
            <Box sx={{ ...lay }}>
              <PinkButton>একাডেমিক প্রোগাম দেখো</PinkButton>
              <PurpleButton>জনপ্রিয় কোর্স সমূহ</PurpleButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img
              src="https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/c_scale,w_717/v1671372534/voqfh9ytswfrohzzjxje.png"
              alt="hero"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Boundary>
    </BannerContainerStyle>
    </Box>
  );
};

export default Banner;
