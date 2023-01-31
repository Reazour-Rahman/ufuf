import React from "react";
import { Box, Grid } from "@mui/material";
import CourseCard from "../../../components/card/CourseCard";
import Boundary from "../../../components/Boundary";
import Heading from "../../../components/heading/Heading";

const Course = () => {
  return (
    <Box sx={{ pt: { md: 16, sm: 13, xs: 9 }, pb: { md: 12, sm: 12, xs: 7 } }}>
      <Boundary>
        <Heading
          title={"আমাদের বিষয়"}
          head={"দারুণ সব অ্যানিমেটেড উদাহরণের ভিডিও লেসনে শেখা হবে আরও সহজ"}
          subHead={
            "সেরা মেন্টরদের তৈরি চমৎকার সব অ্যানিমেটেড উদাহরণ দিয়ে সাজানো ভিডিও লেসন দেখে সহজেই শিখে ক্লাসে-পরীক্ষায় এগিয়ে যাও"
          }
        />
        <Grid container spacing={4}>
          {[0, 0, 0, 0, 0, 0].map((e, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index} sx={{display:"flex", justifyContent:"center"}}>
              <CourseCard />
            </Grid>
          ))}
        </Grid>
      </Boundary>
    </Box>
  );
};

export default Course;
