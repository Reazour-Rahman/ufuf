import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { FaChartBar, FaCommentDots, FaEdit, FaFileVideo } from "react-icons/fa";

const items = [
  {
    icon: <FaEdit />,
    title: "Details",
  },
  { icon: <FaChartBar />, title: "Analytics" },
  { icon: <FaCommentDots />, title: "Comments" },
  { icon: <FaFileVideo />, title: "View" },
];

const ITEM_HEIGHT = 48;

const OptionHandle = ({ open, handleClose, anchorEl }) => {
  return (
    <div>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {items.map((option) => (
          <>
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              <Box color="text.secondary">{option.icon}</Box>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                sx={{
                  paddingLeft: " 1rem",
                }}
              >
                {option.title}
              </Typography>
            </MenuItem>
          </>
        ))}
      </Menu>
    </div>
  );
};

export default OptionHandle;
