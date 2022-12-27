import React from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BsArrowRight, BsStopwatch } from "react-icons/bs";
import LearningImage from "../../../assets/Pages/About/learningCenter.png";
import ExperienceImage from "../../../assets/Pages/About/experience.png";

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
  width: "1280px",
  margin: "0 auto",
}));

const Lay = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: 'space-between',
  gap: "10px",
  color: "#68666C",
  margin: "35px 0px",
}));

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
const ExperienceImageStyle = {
  height: "60px",
  width: "50px",
};

const LearningImageStyle = {
  width: "100%",
};
const Learning = () => {
  const theme = useTheme();
  return (
    <>
      <BannerContainerStyle sx={{ ...BannerPadding }}>
        <AutoContainer>
          <Grid container spacing={5} rowSpacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img
                style={{
                  ...LearningImageStyle,
                }}
                src={LearningImage}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <AboutUsStylingButton>About Us</AboutUsStylingButton>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.common.black,
                }}
              >
                অনলাইন শিক্ষা কেন্দ্রে স্বাগতম
              </Typography>
              <Typography variant="soft">
                স্টার্টআপ প্রকল্পগুলির কার্যকারিতা সর্বাধিক করার জন্য অনুশীলন
                এবং বিশ্লেষণ একত্রিত করার সবচেয়ে নমনীয় উপায়।
              </Typography>
              <Lay>
                <img
                  src={ExperienceImage}
                  style={{
                    ...ExperienceImageStyle,
                  }}
                />
                <Typography variant="soft">
                  <strong>এই গেমটিতে 10 বছরের অভিজ্ঞতা, </strong> <br /> মানে
                  পণ্য ডিজাইনিং
                </Typography>
              </Lay>
              <Typography variant="soft">
                আমি ইউজার এক্সপেরিয়েন্স এবং ইউজার ইন্টারফেস ডিজাইনিং এ কাজ করতে
                ভালোবাসি। কারণ আমি ডিজাইনের সমস্যা সমাধান করতে এবং এটি সমাধানের
                জন্য সহজ এবং আরও ভাল সমাধান খুঁজে পেতে পছন্দ করি। আমি সর্বদা
                সর্বোত্তম ব্যবহারকারীর অভিজ্ঞতার সাথে ভাল ইউজার ইন্টারফেস তৈরি
                করার জন্য যথাসাধ্য চেষ্টা করি। আমি একজন ইউএক্স ডিজাইনার হিসেবে
                কাজ করছি
              </Typography>

              <MoreAboutButton>
                আরও সম্পর্কে <BsArrowRight />
              </MoreAboutButton>
            </Grid>
          </Grid>
        </AutoContainer>
      </BannerContainerStyle>
    </>
  );
};

export default Learning;
