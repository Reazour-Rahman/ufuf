import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const FlexHandle = {
  display: "flex",
  alignItems: "center",
};

const MyCourses = () => {
  return (
    <div>
      <Box
        sx={{
          background: "white",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            ...FlexHandle,
            justifyContent: "space-between",
          }}
          className="text-[#CBCBCB]"
        >
          <Typography
            variant="h3"
            color="text.secondary"
            component="div"
            sx={{
              fontFamily: `'Poppins', sans-serif`,
              marginTop: "5px",
            }}
          >
            My Courses
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            component="div"
            sx={{
              fontFamily: `'Poppins', sans-serif`,
              marginTop: "5px",
            }}
          >
            View All
          </Typography>
        </Box>
        <div className="max-h-[288px] pr-2 overflow-y-auto">
          {[...Array(6)].map((elementInArray, index) => (
            <Box
              key={index}
              sx={{
                marginTop: "10px",
                ...FlexHandle,
                justifyContent: "space-between",
              }}
              className="flex items-center justify-between"
            >
              <Box
                sx={{
                  ...FlexHandle,
                }}
                className="flex items-center gap-x-2 pb-2"
              >
                <img
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                  }}
                  className=""
                  src={`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`}
                  alt=""
                />

                <Box
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    component="div"
                    sx={{
                      fontFamily: `'Poppins', sans-serif`,
                      marginTop: "5px",
                    }}
                  >
                    UI/UX Design with Adobe XD
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    component="div"
                    sx={{
                      fontFamily: `'Poppins', sans-serif`,
                      marginTop: "5px",
                    }}
                  >
                    $89.00
                  </Typography>
                </Box>
              </Box>
              <Box className="flex bg-[#FFD130] px-2 justify-center text-white font-bold rounded-lg  items-center">
                <Typography
                  variant="h5"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontFamily: `'Poppins', sans-serif`,
                  }}
                >
                  $990.00
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontFamily: `'Poppins', sans-serif`,
                    textAlign:'right'
                  }}
                >
                  9 Sold
                </Typography>
              </Box>
            </Box>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default MyCourses;
