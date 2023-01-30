import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { IoIosAdd } from "react-icons/io";

const DescriptionStyle = {
  color: "rgba(20, 33, 43, 0.7)",
};

const FlexHandle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const PersonalInformation = () => {
  const theme = useTheme();

  return (
    <div style={{ padding: "10px" }}>
      <Grid container spacing={{ md: 10, sm: 4 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Title
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Date Of Birth
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Mobile No
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Title
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Date Of Birth
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Mobile No
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "5px",
        }}
      >
        <Typography variant="h5" sx={{fontFamily:`'Poppins', sans-serif`}}>
          Additional Information
        </Typography>


        <Grid container spacing={{ md: 10, sm: 4 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Title
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Date Of Birth
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Mobile No
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Title
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Date Of Birth
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
            <Box sx={{ ...FlexHandle }}>
              <Typography variant="soft" sx={{...DescriptionStyle, fontFamily:`'Poppins', sans-serif`}}>
                Mobile No
              </Typography>
              <Typography variant="soft" sx={{ fontFamily:`'Poppins', sans-serif`}}>
                Fahad
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
       
      </Box>

      <Box
        sx={{
          marginTop: "10px",
        }}
      >
        <Box sx={{ ...FlexHandle }}>
          <Typography variant="h3" sx={{ fontFamily:`'Poppins', sans-serif`}}>
            Admin Note
          </Typography>

          <Box sx={{ ...FlexHandle }}>
            <IoIosAdd />
            <Typography variant="soft" sx={{ marginLeft: "5px", fontFamily:`'Poppins', sans-serif` }}>
              Add
            </Typography>
          </Box>
        </Box>

        <Box sx={{ margin: "10px 0px" }}>
          <Box
            sx={{
              padding: "10px",
              marginBottom:'5px',
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Typography variant="soft" sx={{fontFamily:`'Poppins', sans-serif`}}>
              Aproin at metus et dolor tincidunt feugiat eu id quam.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean sollicitudin non nunc
              vel pharetra.
            </Typography>
          </Box>

          <Box sx={{fontFamily:`'Poppins', sans-serif`}}>
            Added on November 18, 2019 at 5:34 PM|By Softnio{" "}
            <Typography variant="soft" sx={{ color: "red", fontFamily:`'Poppins', sans-serif`, marginLeft:'5px' }}>
              Delete Note
            </Typography>
          </Box>
        </Box>


        <Box sx={{ margin: "10px 0px" }}>
          <Box
            sx={{
              padding: "10px",
              marginBottom:'5px',
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Typography variant="soft" sx={{fontFamily:`'Poppins', sans-serif`}}>
              Aproin at metus et dolor tincidunt feugiat eu id quam.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean sollicitudin non nunc
              vel pharetra.
            </Typography>
          </Box>

          <Box sx={{fontFamily:`'Poppins', sans-serif`}}>
            Added on November 18, 2019 at 5:34 PM|By Softnio{" "}
            <Typography variant="soft" sx={{ color: "red", fontFamily:`'Poppins', sans-serif`, marginLeft:'5px' }}>
              Delete Note
            </Typography>
          </Box>
        </Box>

        
      </Box>
    </div>
  );
};

export default PersonalInformation;
