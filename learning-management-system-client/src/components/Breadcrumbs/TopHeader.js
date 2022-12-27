import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import banner from "../../assets/Pages/About/header/banner.png";
const BannerContainerStyle = styled("section")(({ theme }) => ({
  backgroundImage: `url("${banner}")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));

const BannerPadding = {
  padding: {
    md: "100px 50px  0px",
    xs: "20px  0px",
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


const TopHeader = () => {
  const theme = useTheme();
  return (
    <BannerContainerStyle sx={{ ...BannerPadding }}>
      <AutoContainer>
        <Typography variant="h1" sx={Align}>
          About
        </Typography>
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
