import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ImCross } from "react-icons/im";
import { Typography, useTheme } from "@mui/material";
import PinkButton from "../../../components/button/PinkButton";
import PurpleButton from "../../../components/button/purpleButton";
import { AiOutlineMenuFold } from 'react-icons/ai';
// import { NavLink } from "react-router-dom";

const navItems = [
  { title: "হোম", link: "home" },
  { title: "কোর্স", link: "all-course" },
  { title: "আমাদের সম্পর্কে", link: "about-us" },
  { title: "ডকুমেন্টেশন", link: "doc" },
];

export default function MobileNav() {
  const theme = useTheme();
  const [state, setState] = React.useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const listStyle = {
    width: "auto",
    backgroundColor: theme.palette.background.defaultPurple,
    height: "100vh",
  };
  const lay = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const list = (anchor) => (
    <Box
      sx={{ ...listStyle }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ mt: 6.5 }}>
        <Box
          sx={{
            textAlign: "end",
            mr: 5,
            color: theme.palette.common.white,
            mb: 2,
          }}
        >
          <ImCross />
        </Box>
        {navItems.map((text, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
          >
            <ListItemButton>
              <Typography
                variant="h4"
                sx={{ color: theme.palette.common.white }}
                // as={NavLink}
                // to={text.link}
              >
                {text.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
          <Box sx={{mx: 3, mt: 2}}><PinkButton wdt={"100%"}>সাইন ইন</PinkButton></Box>

          <Box sx={{mx: 3, mt: 2}}><PurpleButton wdt={"100%"}>ফ্রি শুরু করুন</PurpleButton></Box>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer("top", true)}><AiOutlineMenuFold style={{fontSize:"25px", color: theme.palette.text.heading}}/></Button>
      <SwipeableDrawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {list("top")}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
