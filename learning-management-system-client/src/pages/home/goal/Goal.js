import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import { AiFillApple } from "react-icons/ai";
import Boundary from "../../../components/Boundary";

const goals = [
  { title: "প্রোগ্রামিং", sub: "তোমার দক্ষতা বৃদ্ধি করে" },
  { title: "ব্যবসায় শিক্ষা", sub: "ব্যবসা হলে সফল" },
  { title: "মেশিন লার্নিং", sub: "সবকিছু মেশিন" },
  { title: "ওয়েব 3.O ব্লকচেইন", sub: "আধুনিক টেকনোলজি" },
  { title: "হেলথ & ফিটনেস", sub: "স্বাস্থ্য সম্পদ" },
  { title: "ইউআই ইউএক্স ডিসাইন", sub: "ভাল নকশা স্পষ্ট" },
  { title: "3D মডেলিং", sub: "তোমার সৃজনশীলতা দেখাও" },
  { title: "মার্কেটিং এনালাইসিস", sub: "যুক্তি হলো মুক্তি" },
];

const Goal = () => {
  /* use Hooks and states */
  const theme = useTheme();
  /* ::::::::::::::Styles:::::::::::::::: */
  const gridItem = {
    backgroundColor: theme.palette.common.white,
    borderRadius: "15px",
    p: 3,
    textAlign: "center",
  };

  return (
    <Boundary>
      <Box sx={{ mt: { md: 12, sm: 12, xs: 7 } }}>
        <Box>
          <Grid container spacing={3}>
            {goals.map((e, index) => (
              <Grid key={index} item xs={6} sm={4} md={3}>
                <Box sx={{ ...gridItem }}>
                  <AiFillApple style={{fontSize:"26px"}} />
                  <Typography variant="h3">{e.title}</Typography>
                  <Typography variant="subtitle1">{e.sub}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Boundary>
  );
};

export default Goal;
