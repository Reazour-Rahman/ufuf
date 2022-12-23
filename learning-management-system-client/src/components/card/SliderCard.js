import React from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PlayCircleOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { GrLocation } from "react-icons/gr";
import { FaBook, FaComment } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import CardMedia from "@mui/material/CardMedia";

const BannerContainerStyle = styled("section")(({ theme }) => ({
  backgroundImage:
    'url("https://20093980.fs1.hubspotusercontent-na1.net/hubfs/20093980/raw_assets/public/saasweb/images/icons/banner-shape-1.jpg")',
  position: "relative",

  backgroundColor: "#320fa1",
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
const LayerOuter = styled("div")(({ theme }) => ({
  position: "absolute",
  right: "0",
  top: "0",
  bottom: "-70px",
  width: "50%",
}));
const LayerImage = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "0",
  top: "100px",
  width: "1057px",
  height: "958px",
  backgroundImage:
    "url(https://f.hubspotusercontent30.net/hubfs/20093980/saasweb/big-shape-10.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
  display: "initial",
}));
const AutoContainer = styled("div")(({ theme }) => ({
  position: "static",
  maxWidth: "90%",
  width: "1280px",
  margin: "0 auto",
}));
const H1 = styled("h1")(({ theme }) => ({
  color: "white",
  marginBottom: "28px",
  fontSize: "45px",
  lineHeight: "58px",
}));
const PlayIcon = {
  padding: "40px",
  textAlign: "center",
  fontSize: "24px",
  color: "#fff",
  backgroundColor: "#e654bd",
  boxShadow: "0px 11px 21.25px 3.75px rgb(45 5 156 / 65%)",
  borderRadius: "50%",
};
const Lay = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: 'space-between',
  gap: "10px",
  textDecoration: "underline",
  color: "white",
  marginTop: "38px",
}));
const Small = styled("small")(({ theme }) => ({
  color: theme.palette.common.white,
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

//course card style start

const CliendImage = {
  width: "60px",
  height: "60px",
  borderRadius: "100%",
  marginRight: "10px",
};

const ClientName = {
  color: "#08151F",
  marginBottom: "0px",
};

const ClientProfession = {
  color: "#9F98B3",
  marginTop: "0px",
};

const DescriptionStyle = {
  color: "rgba(20, 33, 43, 0.7)",
};

const CardContainerStyle = styled("section")(({ theme }) => ({
  width: {
    lg: "570px",
    md: "500px",
    sm: "100%",
  },
  // boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.07)",
  // margin: "0 auto",
  minHeight: "300px",
  borderRadius: "8px",
  background: "#FFFFFF",
  padding: "40px",
}));

const LineThroughStyle = styled("section")(({ theme }) => ({
  textDecorationLine: "line-through",
}));

const CardDataContainerStyle = styled("section")(({ theme }) => ({
  padding: "0px 22px",
}));

const FlexHandle = styled("section")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

//course card style finished

const SliderCard = () => {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          margin: "0px 10px",
        }}
      >
        <CardContainerStyle>
          {" "}
          <FlexHandle
            sx={{
              justifyContent: "space-between",
            }}
          >
            <FlexHandle>
              <img
                src={
                  "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                }
                className=""
                style={CliendImage}
                alt=""
              />

              <div>
                <Typography sx={ClientName} variant="h3">
                  Trending Course
                </Typography>
                <Typography sx={ClientProfession} variant="h6">
                  Ui/Ux Designer
                </Typography>
              </div>
            </FlexHandle>

            <Rating
              className={`mr-2`}
              name="read-only"
              value={5}
              size="small"
              readOnly
            />
          </FlexHandle>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography variant="soft" sx={DescriptionStyle}>
              Mehedii Hassan Ui/Ux Designer The other hand we denounce with
              righteou indg ation men who are so beguiled and demoraliz ed by
              the of the mo ment.Dislike men who are so beguiled and dems ed by
              the charms of pleas ure of the moment. Lorem
            </Typography>
          </Box>
        </CardContainerStyle>
      </div>
    </>
  );
};

export default SliderCard;
