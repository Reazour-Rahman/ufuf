import React from "react";
import { Box, Grid } from "@mui/material";
import CourseCard from "../../../components/card/CourseCard";
import Boundary from "../../../components/Boundary";

const Course = () => {
  return (
    <Boundary>
      <Grid container>
        {[0, 0, 0, 0, 0, 0].map((e, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <CourseCard/>
          </Grid>
        ))}
      </Grid>
    </Boundary>
  );
};

export default Course;
