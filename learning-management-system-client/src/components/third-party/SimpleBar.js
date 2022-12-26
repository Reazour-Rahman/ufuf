import PropTypes from "prop-types";

// material-ui
import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// third-party
// import SimpleBar from 'simplebar-react';
// import { BrowserView, MobileView } from "react-device-detect";

// root style
const RootStyle = styled("section")({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
});

// scroll bar wrapper
const SimpleBarStyle = styled("section")(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: alpha(theme.palette.grey[500], 0.48),
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));

// ==============================|| SIMPLE SCROLL BAR  ||============================== //

export default function SimpleBarScroll({ children, sx, ...other }) {
  return (
    <>
      <RootStyle
        sx={{
          display: {
            md: "block",
            sm: "none",
          },
        }}
      >
        <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
          {children}
        </SimpleBarStyle>
      </RootStyle>
      <Box
        sx={{
          display: {
            md: "none",
            sm: "block",
          },
        }}
      >
        <Box sx={{ overflowX: "auto", ...sx }} {...other}>
          {children}
        </Box>
      </Box>
    </>
  );
}

SimpleBarScroll.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
