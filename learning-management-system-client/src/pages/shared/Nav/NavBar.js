import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import PinkButton from "../../../components/button/PinkButton";
import PurpleButton from "../../../components/button/purpleButton";
import LogoSection from "../../../components/logo";
// import LogoSection from "../../../components/Logo/Logo";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const theme = useTheme();
  const navItems = [
    { title: "হোম", link: "home" },
    { title: "কোর্স", link: "all-course" },
    { title: "আমাদের সম্পর্কে", link: "about-us" },
    { title: "ডকুমেন্টেশন", link: "doc" },
  ];
  const container = {
    backgroundColor: theme.palette.common.white,
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    py: 1.5,
    zIndex: 999, 
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  };
  const lay = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  /* Responsive */
  const mysteryDekstop = {
    display: {
      md: "block",
      sm: "none",
      xs: "none",
    },
    ...container,
  };
  const mysteryMobile = {
    display: {
      md: "none",
      sm: "flex",
      xs: "flex",
    },
    alignItems:"center",
    justifyContent:"space-between",
    px: 2.5
  };
  return (
    <>
      <Box sx={{ ...mysteryDekstop }}>
        <Grid container>
          <Grid item md={4} sx={{ ...lay }}>
            {/* <LogoSection/> */}
            {/* <Typography >লোগো</Typography> */}
            <LogoSection/>
          </Grid>
          <Grid item md={4} sx={{ ...lay }}>
            {navItems.map((item, index) => (
              <Button key={index}>
                <Typography variant="soft">{item.title}</Typography>
              </Button>
            ))}
          </Grid>
          <Grid item md={4} sx={{ ...lay, gap: 2 }}>
            <PinkButton>সাইন ইন</PinkButton>
            <PurpleButton>ফ্রি শুরু করুন</PurpleButton>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ ...mysteryMobile, ...container }}>
        {/* <LogoSection/> */}LOGO
        <MobileNav />
      </Box>
    </>
  );
};

export default NavBar;
