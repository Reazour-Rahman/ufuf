import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Divider, Typography, useTheme } from "@mui/material/";
import Grid from "@mui/material/Grid";
// import LogoSection from 'components/Logo/index';
import { TwitterCircleFilled } from "@ant-design/icons";
import Boundary from "../../../components/Boundary";

const ListTag = styled("p")(({ theme }) => ({
  textAlign: "left",
}));

const UlStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "30px",
  marginTop: "14px",
}));
const iconStyle = {
  fontSize: "23px",
  padding: "8px",
  border: "2px solid",
  borderRadius: "50%",
  // color: 'black'
};
const caption = {
  fontWeight: 600,
  paddingTop: 0,
  marginTop: 0,
};

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#0C0E2A",
        pb: 5,
        pt: 8,
        color: theme.palette.common.white,
      }}
    >
      <Boundary>
        <Grid
          container
          spacing={3}
          columns={{ xs: 12, sm: 12, md: 25, lg: 25 }}
        >
          <Grid item xs={12} sm={12} md={10} lg={10}>
            {/* <LogoSection /> */} <h2>লোগো</h2>
            <Typography sx={{ marginTop: "25px" }}>
              অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম। <br /> যেকানে জনপ্রিয়িও
              কোর্স গুলো পাওয়া যাই এবং নিজের <br /> স্কিল কে এগিয়ে নিয়ে যাওয়া
              যায়।
            </Typography>
            <UlStyled>
              <TwitterCircleFilled style={{ ...iconStyle }} />
              <TwitterCircleFilled style={{ ...iconStyle }} />
              <TwitterCircleFilled style={{ ...iconStyle }} />
              <TwitterCircleFilled style={{ ...iconStyle }} />
            </UlStyled>
          </Grid>
          <Grid item xs={12} sm={4} md={5} lg={5}>
            <ListTag sx={{ ...caption }}>সেবা</ListTag>
            <ListTag>প্রযুক্তিমূলক বাজারজাত</ListTag>
            <ListTag>অ্যাপ ডেভেলপমেন্ট</ListTag>
            <ListTag>ওয়েব ডেভেলপমেন্ট</ListTag>
            <ListTag>UI/Ux ডিজাইন</ListTag>
          </Grid>
          <Grid item xs={12} sm={4} md={5} lg={5}>
            <ListTag sx={{ ...caption }}>লিঙ্ক</ListTag>
            <ListTag>প্রযুক্তিমূলক বাজারজাত</ListTag>
            <ListTag>অ্যাপ ডেভেলপমেন্ট</ListTag>
            <ListTag>ওয়েব ডেভেলপমেন্ট</ListTag>
            <ListTag>UI/Ux ডিজাইন</ListTag>
          </Grid>
          <Grid item xs={12} sm={4} md={5} lg={5}>
            <ListTag sx={{ ...caption }}>যোগাযোগ</ListTag>
            <ListTag>প্রযুক্তিমূলক বাজারজাত</ListTag>
            <ListTag>অ্যাপ ডেভেলপমেন্ট</ListTag>
            <ListTag>ওয়েব ডেভেলপমেন্ট</ListTag>
            <ListTag>UI/Ux ডিজাইন</ListTag>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "30px", marginBottom: "30px" }} />
        <Typography style={{ textAlign: "center" }}>
          2022 Pathak Technologies Bangladesh Ltd.
        </Typography>
      </Boundary>
    </Box>
  );
};

export default Footer;
