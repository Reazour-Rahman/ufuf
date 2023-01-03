import {
  Box,
  Tooltip,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { FaEdit, FaChartBar, FaCommentDots, FaFileVideo } from "react-icons/fa";
import React from "react";
import MaxControlsMune from "./MaxControlsMune";
const items = [
  {
    icon: <FaEdit />,
    title: "Details",
  },
  { icon: <FaChartBar />, title: "Analytics" },
  { icon: <FaCommentDots />, title: "Comments" },
  { icon: <FaFileVideo />, title: "View" },
];
const CardsControls = ({ isEmailSubmitted, row }) => {
  const iconStyle = {
    fontSize: "26px",
    marginLeft: "7px",
    cursor: "pointer",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CardMedia
        component='img'
        sx={{ width:95 }}
        image='https://cdn.shopify.com/s/files/1/0067/9588/6703/articles/banner_1024x1024.jpg?v=1634791187'
        alt='Live from space album cover'
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: "1 0 auto", padding: "0px 13px" }}>
          <Typography variant='subtitle2'>
            How to Create Online Course, LMS, Educationa
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            component='div'
            sx={{
              display: row.ID == isEmailSubmitted ? "none" : "block",
              transition: ".6s ease",
            }}>
            How to Create Online Course, LMS, Educationa
          </Typography>
          <Box
            sx={{
              display: row.ID === isEmailSubmitted ? "block" : "none",
              transition: ".6s ease",
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                
              }}>
              {items.map((item) => (
                <Tooltip title={item.title}>
                  <Box color='text.secondary'>{item.icon}</Box>
                </Tooltip>
              ))}
              <MaxControlsMune />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardsControls;
