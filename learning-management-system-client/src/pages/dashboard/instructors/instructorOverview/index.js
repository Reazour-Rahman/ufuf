import { Grid } from "@mui/material";
import React from "react";
import ActiveStudentChart from "../instructorDetails/ActiveStudentChart";
import TotalEarningCharts from "../instructorDetails/TotalEarningCharts";
import InstructorOverviewHeader from "./InstructorOverviewHeader";
import MyCourses from "./MyCourses";
import StudentFeedback from "./StudentFeedback";
import SupportRequest from "./SupportRequest";

const InstructorOverview = () => {
  return (
    <div>
      <InstructorOverviewHeader />

      <Grid container spacing={2}>
        <Grid item xs={12} md={7} >
          <TotalEarningCharts/>
        </Grid>
        <Grid item xs={12} md={5}>
          <ActiveStudentChart/>
          <ActiveStudentChart/>
        </Grid>
        
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} >
          <MyCourses/>
        </Grid>
        <Grid item xs={12} md={4}>
        <StudentFeedback/>
        </Grid>
        <Grid item xs={12} md={4}>
        <SupportRequest/>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default InstructorOverview;
