// material-ui
import { createTheme } from "@mui/material/styles";

// third-party
import { presetPalettes } from "@ant-design/colors";

// project import
import ThemeOption from "./theme/index";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
  const colors = presetPalettes;

  const greyPrimary = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000",
  ];
  const greyAscent = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"];
  const greyConstant = ["#fafafb", "#e6ebf1"];
  const deepBlue = ["#03002e", "#010048", "#010057", "#02006c", "#090088"];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = ThemeOption(colors);
  console.log(paletteColor);

  return createTheme({
    palette: {
      mode,
      common: {
        black: "#000",
        white: "#fff",
      },
      ...paletteColor,
      text: {
        primary: paletteColor.grey[600],
        secondary: paletteColor.grey[500],
        highlightHeading: paletteColor.primary.dark,
        heading: paletteColor.primary[900],
        disabled: paletteColor.grey[400],
      },
      action: {
        primary: paletteColor.primary.main,
        disabled: paletteColor.grey[300],
      },
      divider: paletteColor.grey[500],
      background: {
        paper: paletteColor.grey[0],
        default: paletteColor.grey.A50,

        defaultPink: paletteColor.pink.main,
        lightPink: paletteColor.pink.light,
        hardPink: paletteColor.pink.hard,

        defaultPurple: paletteColor.purple.main,
        lightPurple: paletteColor.purple.light,
        hardPurple: paletteColor.purple.hard,

        defaultMunsell: paletteColor.munsell.main,
        lightMunsell: paletteColor.munsell.light,
        hardMunsell: paletteColor.munsell.hard,
      },
    },
  });
};

export default Palette;
