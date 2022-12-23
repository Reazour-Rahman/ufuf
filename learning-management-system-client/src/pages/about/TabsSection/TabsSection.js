import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const TabColor = {
  background: "#F7F7F7",
  fontWeight: "bold",
  fontSize: "15px",
  color: "#191B1E",
  marginRight: "10px",
};

const AutoContainer = styled("div")(({ theme }) => ({
  position: "static",
  maxWidth: "90%",
  width: "1280px",
  margin: "0 auto",
  padding: {
    md: "35px 0px",
    sm: "25px 0px",
    xs: "10px 0px",
  },
}));

const TabsSection = () => {
  const [value, setValue] = React.useState("about");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);
  const theme = useTheme();

  return (
    <AutoContainer>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          TabIndicatorProps={{
            style: {
              background: "#5F2DED",
              height: "5px",
            },
          }}
        >
          <Tab style={TabColor} value="about" label="About" wrapped />
          <Tab style={TabColor} value="course" label="Course" />
          <Tab style={TabColor} value="awards" label="Awards" />
          <Tab style={TabColor} value="education" label="Education" />
        </Tabs>

        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          {" "}
          {value === "about" && (
            <Typography variant="soft">
              About Us Welcome to the online Learning Center Meet my startup
              design agency Shape Rex Currently I am working at CodeNext as
              Product Designer. 10+ Years Experience In this game, Means Product
              Designing I love to work in User Experience & User Interface
              designing. Because I love to solve the design problem and find
              easy and better solutions to solve it. I always try my best to
              make good user interface with the best user experience. I have
              been working as a UX Designer More About About Course awards
              education DPR Engineering Dhaka University There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words look even slightly believable. If you are going
              to use a passage of Lorem
            </Typography>
          )}
          {value === "course" && (
            <Typography variant="soft">
              by injected humour, There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some
              form, by injected humour,There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour,There are many
              variations of passages of Lorem Ipsum available, There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which dont look even slightly believable. If you
              are going to useery user research award 2020 Dsigning award 2021
              Computer Science - england There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered
              alteration in some form,
            </Typography>
          )}
          {value === "awards" && (
            <Typography variant="soft">
              form, by injected humour,There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour,There are many
              variations of passages of Lorem Ipsum available, There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which dont look even slightly believable. If you
              are going to useery user research award 2020 Dsigning award 2021
              Computer Science - england There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, pro product desgin
              with udemey There are many form, by injected humour, or randomised
              words which dont look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, Interaction design - Animation
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable
            </Typography>
          )}
          {value === "education" && (
            <Typography variant="soft">
              in some form, by injected humour,There are many variations of
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, Interaction design - Animation There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which dont look even slightly believable
            </Typography>
          )}
        </Box>
      </Box>
    </AutoContainer>
  );
};

export default TabsSection;
