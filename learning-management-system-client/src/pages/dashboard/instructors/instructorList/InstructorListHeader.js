import React from "react";
import {
  Grid,
  Box,
  Typography,
  useTheme,
  Rating,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlinePlus } from "react-icons/ai";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    fontFamily: `'Poppins', sans-serif`,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const InstructorListHeader = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: {
          md: "flex",
          sm: "block",
        },
        margin: "5px",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.common.black,
          fontFamily: `'Poppins', sans-serif`,
        }}
      >
        Instructors
      </Typography>
      <Box
        sx={{
          display: {
            md: "flex",
            sm: "block",
          },
          margin: "5px",
        }}
      >
        <Box
          sx={{
            padding: "5px 10px",
            background: "white",
            border: "2px solid #C4C4C4",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "5px",
          }}
          className={``}
        >
          <input
            style={{
              fontSize: "18px",
              outline: "none",
              border: "none",
              fontFamily: `'Poppins', sans-serif`,
            }}
            type="text"
            placeholder="Search Institute"
            autoFocus
            className=""
            defaultValue={""}
            onChange={(e) => {}}
          />
          <FiSearch
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="text-gray text-xl cursor-pointer"
          />
        </Box>

        <div>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<IoIosArrowDown />}
            sx={{
              marginRight:  {
                md: "5px",
                sm: "0px",
              },
              marginTop: "5px",
              fontFamily: `'Poppins', sans-serif`,
            }}
          >
            Options
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              sx={{
                fontFamily: `'Poppins', sans-serif`,
              }}
              onClick={handleClose}
              disableRipple
            >
              Edit
            </MenuItem>
            <MenuItem
              sx={{
                fontFamily: `'Poppins', sans-serif`,
              }}
              onClick={handleClose}
              disableRipple
            >
              Duplicate
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              sx={{
                fontFamily: `'Poppins', sans-serif`,
              }}
              onClick={handleClose}
              disableRipple
            >
              Archive
            </MenuItem>
            <MenuItem
              sx={{
                fontFamily: `'Poppins', sans-serif`,
              }}
              onClick={handleClose}
              disableRipple
            >
              More
            </MenuItem>
          </StyledMenu>
        </div>

        <div>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              marginTop: "5px",
            }}
          >
            <AiOutlinePlus />
            Add
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default InstructorListHeader;
