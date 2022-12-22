import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import banner from "../../assets/Pages/About/header/banner.png";
const BannerContainerStyle = styled("section")(({ theme }) => ({
  backgroundImage: `url("${banner}")`,
  // position: "relative",

  // backgroundColor: "#320fa1",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));

const BannerPadding = {
  padding: {
    md: "80px  0px",
    sm: "40px  0px",
    xs: "30px  0px",
  },
};

const Align = {
  textAlign: "center",
};
const FlexHandle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const AutoContainer = styled("div")(({ theme }) => ({
  position: "static",
  maxWidth: "90%",
  width: "1280px",
  margin: "0 auto",
}));

const H1 = styled("h1")(({ theme }) => ({
  marginBottom: "28px",
  color: "black",
  fontSize: "45px",
  lineHeight: "58px",
  fontWeight: "700",
}));

const TopHeader = () => {
  const theme = useTheme();
  return (
    <BannerContainerStyle sx={{ ...BannerPadding }}>
      <AutoContainer>
        <H1 sx={Align}>About</H1>
        <Breadcrumbs sx={FlexHandle} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </AutoContainer>
    </BannerContainerStyle>
  );
};

export default TopHeader;
