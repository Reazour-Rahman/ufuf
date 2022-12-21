import React from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PlayCircleOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { GrLocation } from "react-icons/gr";
import { FaBook, FaComment } from "react-icons/fa";
import { BsArrowRight, BsStopwatch } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import CardMedia from "@mui/material/CardMedia";

const BannerContainerStyle = styled("section")(({ theme }) => ({
  //   backgroundColor: "#320fa1",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));
const BannerPadding = {
  padding: {
    md: "185px 0 0px",
    sm: "145px 0 0px",
    xs: "130px 0 0px",
  },
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
const PlayIcon = {
  padding: "40px",
  textAlign: "center",
  fontSize: "24px",
  color: "#fff",
  backgroundColor: "#e654bd",
  //   boxShadow: "0px 11px 21.25px 3.75px rgb(45 5 156 / 65%)",
  borderRadius: "50%",
};
const Lay = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: 'space-between',
  gap: "10px",
  color: "#68666C",
  margin: "35px 0px",
}));
const PTag = styled("p")(({ theme }) => ({
  color: "#68666C",
  fontSize: "16px",
}));

const mystery = {
  display: {
    md: "block",
    sm: "none",
    xs: "none",
  },
};
const mysteryActive = {
  display: {
    md: "none",
    sm: "block",
    xs: "block",
  },
};

const CardImage = {
  zIndex: "500",
  position: "absolute",
  width: "470px",
  ...mystery,
};
const CardImageMobile = {
  width: "70%",
  ...mysteryActive,
};

const MoreAboutButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 0px",
  cursor: "pointer",
  width: "170px",
  color: "white",
  gap: "10px",
  margin: "35px 0px",
  background: "#5F2DED",
  borderRadius: "2px",
}));

const AboutUsStylingButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5x 0px",
  cursor: "pointer",
  width: "100px",
  color: "#5F2DED",
  margin: "35px 0px",
  background: "rgba(94, 45, 237, 0.07)",
  borderRadius: "14px",
  fontWeight: 600,
}));

const Learning = () => {
  const theme = useTheme();
  return (
    <>
      <BannerContainerStyle sx={{ ...BannerPadding }}>
        <AutoContainer>
          <Grid
            container
            spacing={2}
            rowSpacing={8}
            // sx={{ pb: { xs: 8, sm: 20 } }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <AboutUsStylingButton>About Us</AboutUsStylingButton>
              <H1>Welcome To The Online Learning Center</H1>
              <PTag>
                The most flexible way of combine practice and analyzing startup
                projects to maximize its effectiveness.
              </PTag>
              <Lay>
                <IconButton style={{ ...PlayIcon }} aria-label="play">
                  <PlayCircleOutlined />
                </IconButton>
                <PTag>
                  <strong>10 Years Experience </strong> In this game, Means{" "}
                  <br /> Product Designing
                </PTag>
              </Lay>
              <PTag>
                I love to work in User Experience & User Interface designing.
                Because I love to solve the design problem and find easy and
                better solutions to solve it. I always try my best to make good
                user interface with the best user experience. I have been
                working as a UX Designer
              </PTag>

              <MoreAboutButton>
                More About <BsArrowRight />
              </MoreAboutButton>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}></Grid>
          </Grid>
        </AutoContainer>
      </BannerContainerStyle>
    </>
  );
};

export default Learning;
