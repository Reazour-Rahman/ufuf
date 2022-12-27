import React from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import marketer1 from "../../../assets/Pages/About/marketers/image(1).png";
import marketer2 from "../../../assets/Pages/About/marketers/image(2).png";
import marketer3 from "../../../assets/Pages/About/marketers/image(3).png";
import marketer4 from "../../../assets/Pages/About/marketers/image(4).png";
import marketer5 from "../../../assets/Pages/About/marketers/image(5).png";
import marketer6 from "../../../assets/Pages/About/marketers/image(6).png";
import marketer7 from "../../../assets/Pages/About/marketers/image(7).png";
import marketer8 from "../../../assets/Pages/About/marketers/image(8).png";
import {
  AutoContainer,
  BannerPadding,
} from "../../../themes/customTheme/customTheme";
import Heading from "../../../components/heading/Heading";

const HeaderStyling = {
  textAlign: "center",
  width: {
    md: "60%",
    xs: "90%",
  },
  margin: "0 auto",
};

const ImageSize = {
  width: "150px",
  margin: " 0 auto",
};

const Marketers = () => {
  const theme = useTheme();
  return (
    <Box sx={{ ...BannerPadding }}>
      <AutoContainer>
        <Heading
          head={
            "প্রকৌশলীদের দ্বারা বিশ্বস্ত বিপণনকারীদের উপর নির্ভরশীল এবং নির্বাহীদের দ্বারা প্রিয়"
          }
          title={"ব্র্যান্ড"}
        />

        <Grid
          container
          spacing={8}
          rowSpacing={8}
          sx={{ mt: { xs: 2, sm: 5 } }}
        >
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer1}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer2}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer3}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer4}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer5}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer6}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer7}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <img
              style={{
                ...ImageSize,
              }}
              src={marketer8}
            />
          </Grid>
        </Grid>
      </AutoContainer>
    </Box>
  );
};

export default Marketers;
