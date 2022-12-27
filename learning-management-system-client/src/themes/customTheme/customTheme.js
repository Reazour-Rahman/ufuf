import { styled } from "@mui/material/styles";

export const FlexHandle = styled("section")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const AutoContainer = styled("div")(({ theme }) => ({
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

export const BannerPadding = {
  padding: {
    md: "50px  0px",
    xs: "20px  0px",
  },
};

export const SIZES = {
  extraSmall: 8,
  small: 10,
  moderateSmall: 12,
  font: 14,
  regular: 16,
  medium: 18,
  large: 22,
  MediumLarge: 32,
  moderateLarge: 42,
  extraLarge: 48,
  xxl: 60,
};

export const RADIUS = {
  primary: "15px",
};

export const SHADOW = {
  // primary: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
  // border: "1px solid rgba(158, 158, 158, 0.866)",
};

export const HEADING = {
  // fontSize:{
  //   xl: 38,
  //   lg: SIZES.MediumLarge,
  //   md: SIZES.large,
  //   sm: 20,
  //   xs: 20,
  // },
  // color: COLORS.blue,
  // fontWeight: 700,
  // fontFamily: FAMILY.hind,
  // lineHeight: 1.5
};

export const formatTime = (time) => {
  if (time < 60) {
    return time < 10 ? `0${time}s` : `${time}s`;
  } else {
    return Math.floor(time / 60) + "m" + (time % 60) + "s";
  }
};
