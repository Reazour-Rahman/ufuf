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
import SliderCard from "../../../components/card/SliderCard";
import Carousel from "react-elastic-carousel";

const BannerContainerStyle = styled("section")(({ theme }) => ({
  //   backgroundColor: "#320fa1",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));
const BannerPadding = {
  padding: {
    md: "135px 0px",
    sm: "115px 0px",
    xs: "100px 0px",
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
  margin: "10px 0px",
  background: "rgba(94, 45, 237, 0.07)",
  borderRadius: "14px",
  fontWeight: 600,
}));

const data = [
  {
    name: "name",
    data: "ravo",
  },
  {
    name: "name",
    data: "ravo",
  },
  {
    name: "name",
    data: "ravo",
  },
  {
    name: "name",
    data: "ravo",
  },
  {
    name: "name",
    data: "ravo",
  },
];

const items = [
  { id: 1, title: "item #1" },
  { id: 2, title: "item #2" },
  { id: 3, title: "item #3" },
  { id: 4, title: "item #4" },
  { id: 5, title: "item #5" },
];

const Testimonial = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const theme = useTheme();
  return (
    <>
      <BannerContainerStyle sx={{ ...BannerPadding }}>
        <AutoContainer>
          <AboutUsStylingButton
            sx={{
              margin: "0 auto",
            }}
          >
            Course List
          </AboutUsStylingButton>
          <H1
            sx={{
              textAlign: "center",
            }}
          >
            Client Testimonial
          </H1>

          {/* <SliderCard /> */}

          <Carousel
            breakPoints={[
              { width: 400, itemsToShow: 1 },
              { width: 600, itemsToShow: 1 },
              { width: 900, itemsToShow: 2 },
            ]}
            itemsToShow={4}
            showArrows={true}
            enableAutoPlay={false}
            autoPlaySpeed={3000}
            pagination={false}
          >
            {items.map((item) => (
              <SliderCard />
            ))}
          </Carousel>
        </AutoContainer>
      </BannerContainerStyle>
    </>
  );
};

export default Testimonial;
