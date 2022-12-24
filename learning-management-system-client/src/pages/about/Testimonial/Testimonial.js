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
import {
  AutoContainer,
  BannerPadding,
} from "../../../themes/customTheme/customTheme";

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

const items = [
  { id: 1, title: "item #1" },
  { id: 2, title: "item #2" },
  { id: 3, title: "item #3" },
  { id: 4, title: "item #4" },
  { id: 5, title: "item #5" },
];

const AlignCenter = {
  margin: "0 auto",
};

const HeaderStyling = {
  textAlign: "center",
  marginBottom: "20px",
};

const Testimonial = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const theme = useTheme();
  return (
    <>
      <Box sx={{ ...BannerPadding }}>
        <AutoContainer>
          <AboutUsStylingButton
            sx={{
              ...AlignCenter,
            }}
          >
            Course List
          </AboutUsStylingButton>

          <Typography
            sx={{
              ...HeaderStyling,
              color: theme.palette.common.black,
            }}
            variant="h1"
          >
            ক্লায়েন্ট প্রশংসাপত্র
          </Typography>

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
      </Box>
    </>
  );
};

export default Testimonial;
