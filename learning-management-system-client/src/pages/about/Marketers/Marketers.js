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

import marketer1 from "../../../assets/Pages/About/marketers/image(1).png";
import marketer2 from "../../../assets/Pages/About/marketers/image(2).png";
import marketer3 from "../../../assets/Pages/About/marketers/image(3).png";
import marketer4 from "../../../assets/Pages/About/marketers/image(4).png";
import marketer5 from "../../../assets/Pages/About/marketers/image(5).png";
import marketer6 from "../../../assets/Pages/About/marketers/image(6).png";
import marketer7 from "../../../assets/Pages/About/marketers/image(7).png";
import marketer8 from "../../../assets/Pages/About/marketers/image(8).png";

const BannerContainerStyle = styled("section")(({ theme }) => ({
  //   backgroundColor: "#320fa1",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));
const BannerPadding = {
  padding: {
    md: "50px  0px",
    xs: "20px  0px",
  },
};

const AutoContainer = styled("div")(({ theme }) => ({
  position: "static",
  maxWidth: "90%",
  width: "1080px",
  margin: "0 auto",
}));
const H1 = styled("h1")(({ theme }) => ({
  marginBottom: "28px",
  color: "black",
  fontSize: "36px",
  lineHeight: "54px",
  fontWeight: "600",
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
  margin: "10px 0px",
  background: "rgba(94, 45, 237, 0.07)",
  borderRadius: "14px",
  fontWeight: 600,
}));

const Marketers = () => {
  const theme = useTheme();
  return (
    <BannerContainerStyle sx={{ ...BannerPadding }}>
      <AutoContainer>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            width: {
              md: "60%",
              xs: "90%",
            },
            margin: "0 auto",
            color: theme.palette.common.black,
          }}
        >
          Relied on marketers trusted by engineers and beloved by executives
        </Typography>

        <Grid
          container
          spacing={8}
          rowSpacing={8}
          sx={{ mt: { xs: 2, sm: 5 } }}
        >
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer1}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer2}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer3}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer4}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer5}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer6}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer7}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                width: "100%",
              }}
              src={marketer8}
            />
          </Grid>
        </Grid>
      </AutoContainer>
    </BannerContainerStyle>
  );
};

export default Marketers;
