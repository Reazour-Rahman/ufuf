import React, { useEffect, useState } from "react";
import MultiPurposeTable from "../../../../components/propsTable/MultiPurposeTable";
import {
  Box,
  Stack,
  Grid,
  Typography,
  Container,
  useTheme,
  TableCell,
  TableRow,
  TableBody,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
  Menu,
  IconButton,
  Tooltip,
  Rating,
} from "@mui/material";
import { MdMessage } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaChartBar, FaCommentDots, FaEdit, FaFileVideo } from "react-icons/fa";

import { padding, width } from "@mui/system";
import { AiOutlineDelete } from "react-icons/ai";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const LongMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BsThreeDots />
      </IconButton>
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
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const headCells = [
  {
    id: "ID",
    align: "left",
    disablePadding: false,
    label: (
      <FormGroup>
        <FormControlLabel control={<Checkbox />} />
      </FormGroup>
    ),
  },
  {
    id: "Video",
    align: "left",
    disablePadding: true,
    label: "Student",
  },
  {
    id: "Video",
    align: "left",
    disablePadding: true,
    label: "Course Name",
  },
  {
    id: "Visibility",
    align: "left",
    disablePadding: false,
    label: "Rating",
  },
  {
    id: "Restrictions",
    align: "left",
    disablePadding: false,
    label: "Review",
  },

  {
    id: "Student",
    align: "left",
    disablePadding: false,
    label: <LongMenu />,
  },
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
// function createData(ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due) {
//     return { ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due};
// }
const rows = [
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 101,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 102,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 103,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 104,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 105,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 106,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 107,
  },
];
const Review = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <MultiPurposeTable headCells={headCells}>
        <Tag />
      </MultiPurposeTable>
    </div>
  );
};

export default Review;

const items = [
  {
    icon: (
      <FaEdit
        style={{
          fontSize: "20px",
        }}
      />
    ),
    title: "Details",
  },
  {
    icon: (
      <FaChartBar
        style={{
          fontSize: "20px",
        }}
      />
    ),
    title: "Analytics",
  },
];

const Tag = () => {
  useEffect(() => {
    document.body.addEventListener("click", removeDropdown);
  }, []);

  const removeDropdown = (e) => {
    setDropDownFor(null);

    e.stopPropagation();
  };

  const [status, setStatus] = useState(null);
  const [dropDownFor, setDropDownFor] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget, status);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDropDownFor(null);
  };
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow
          onMouseEnter={() => setStatus(row.ID)}
          onMouseLeave={() => setStatus(null)}
          hover
          role="checkbox"
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          tabIndex={-1}
          key={row.ID}
        >
          <TableCell
            component="th"
            /* id={labelId} */ scope="row"
            align="left"
            sx={{  }}
          >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} />
            </FormGroup>
          </TableCell>
          <TableCell
            align="left"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                src="https://cdn.shopify.com/s/files/1/0067/9588/6703/articles/banner_1024x1024.jpg?v=1634791187"
                alt=""
              />
            </div>
            <div>
              <Typography
                variant="h5"
                color="text.secondary"
                component="div"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                }}
              >
                Fahad Kibria
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                }}
              >
                fahad@gmail.com
              </Typography>
            </div>
          </TableCell>
          <TableCell align="left" sx={{  }}>
           
          <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily:`'Poppins', sans-serif`
              }}
            >
              UI/UX Design with Adobe XD
            </Typography>
          </TableCell>
          <TableCell align="left" >
          <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
          </TableCell>
 
          <TableCell align="left" >
          <Typography
              variant="h6"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily:`'Poppins', sans-serif`,
                
              }}
            >
             The instructor was very knowledgable, worked at a good peace.
            </Typography>
          </TableCell>
          <TableCell align="left" >
          <AiOutlineDelete style={{
                color:'red',
                cursor:'pointer',
                fontSize:'20px'
            }}/>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
