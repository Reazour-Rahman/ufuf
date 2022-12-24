import React from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

//course card style start

const ClientImage = {
  width: "60px",
  height: "60px",
  borderRadius: "100%",
  marginRight: "10px",
};

const ClientName = {
  color: "#08151F",
  marginBottom: "0px",
};

const ClientProfession = {
  color: "#9F98B3",
  marginTop: "0px",
};

const DescriptionStyle = {
  color: "rgba(20, 33, 43, 0.7)",
};

const CardContainerStyle = styled("section")(({ theme }) => ({
  width: {
    lg: "570px",
    md: "500px",
    sm: "100%",
  },
  minHeight: "300px",
  borderRadius: "8px",
  background: "#FFFFFF",
  padding: "40px",
}));

const LineThroughStyle = styled("section")(({ theme }) => ({
  textDecorationLine: "line-through",
}));

const CardDataContainerStyle = styled("section")(({ theme }) => ({
  padding: "0px 22px",
}));

const FlexHandle = {
  display: "flex",
  alignItems: "center",
};

const CardGaping = {
  margin: "0px 10px",
};

const DescriptionStyleGaping = {
  marginTop: "20px",
};

//course card style finished

const SliderCard = () => {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          ...CardGaping,
        }}
      >
        <CardContainerStyle>
          {" "}
          <Box
            sx={{
              ...FlexHandle,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                ...FlexHandle,
              }}
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                }
                className=""
                style={ClientImage}
                alt=""
              />

              <div>
                <Typography sx={ClientName} variant="h3">
                  ফাহাদ কিবরিয়া
                </Typography>
                <Typography sx={ClientProfession} variant="h6">
                  ওয়েব ডেভেলপার
                </Typography>
              </div>
            </Box>

            <Rating name="read-only" value={5} size="small" readOnly />
          </Box>
          <Box
            sx={{
              ...DescriptionStyleGaping,
            }}
          >
            <Typography variant="soft" sx={DescriptionStyle}>
              অন্য দিকে আমরা নিন্দা জানাই ন্যায়পরায়ণ ব্যক্তিরা যারা এত
              প্রতারিত এবং মনোবলহীন সেই সময়ের। অপছন্দের পুরুষদের যারা এত
              প্রতারিত এবং তাদের দ্বারা প্রভাবিত মুহূর্ত আনন্দের charms. লরেম
            </Typography>
          </Box>
        </CardContainerStyle>
      </div>
    </>
  );
};

export default SliderCard;
