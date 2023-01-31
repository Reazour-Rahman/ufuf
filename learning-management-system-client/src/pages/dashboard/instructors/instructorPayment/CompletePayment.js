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
} from "@mui/material";
import { MdMessage } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaChartBar, FaCommentDots, FaEdit, FaFileVideo } from "react-icons/fa";

import { padding, width } from "@mui/system";

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
    label: "Instructor",
  },
  {
    id: "Video",
    align: "left",
    disablePadding: true,
    label: "Account Number",
  },
  {
    id: "Visibility",
    align: "left",
    disablePadding: false,
    label: "Amount",
  },
  {
    id: "Restrictions",
    align: "left",
    disablePadding: false,
    label: "Payment Date",
  },
  {
    id: "Date",
    align: "left",
    disablePadding: false,
    label: "",
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
const CompletePayment = () => {
  return (
    <div style={{ margin: "5px 0px" }}>
      <MultiPurposeTable headCells={headCells}>
        <Tag />
      </MultiPurposeTable>
    </div>
  );
};

export default CompletePayment;

const items = [
  {
    icon: (
      <FaEdit
        style={{
          fontSize: "20px",
        }}
      />
    ),
    title: "View Details",
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
            sx={{}}
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
                  width: "70px",
                  height: "70px",
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
          <TableCell align="left" >
            {/* <VisibilityOptionMune row={row} isEmailSubmitted={isEmailSubmitted}/> */}
            <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily:`'Poppins', sans-serif`
              }}
            >
              	9834/paypal
            </Typography>
          </TableCell>
          <TableCell align="left" >
          <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily:`'Poppins', sans-serif`
              }}
            >
              $7000
            </Typography>
          </TableCell>
       
          <TableCell align="left" >
          <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily:`'Poppins', sans-serif`
              }}
            >
              10-01-21
            </Typography>
          </TableCell>

          <TableCell align="left" >
          {status === row.ID ? (
              <div
                style={{
                  display: "flex",
                }}
              >
                <MdMessage
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
                <MdMessage
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
            ) : 
              ''
            } 
          </TableCell>
          <TableCell align="left" sx={{}}>
            <Box
              sx={{
                // display: row.ID === status ? "block" : "none",
                transition: ".6s ease",
              }}
            >
              

              <div>
                <div
                  style={{
                    position: "relative",
                  }}

                >
                  <div c>
                    <BsThreeDots
                      onClick={(e) => {
                        if (dropDownFor === row.ID) {
                          setDropDownFor(null);
                        } else {
                          setDropDownFor(row.ID);
                        }
                        e.stopPropagation();
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  {dropDownFor === row.ID ? (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          left: -80,

                          transformOrigin: "top left",
                          background: "white",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          padding: "10px 20px",
                          borderRadius:'5px',
                          width:'175px',
                        }}
                      >
                        <div>
                          {items?.map((element, idx) => {
                            return (
                              <Box
                                key={idx}
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                                className={`flex justify-between cursor-pointer  items-center`}
                                onClick={() => {
                                  // setType(element.value);
                                }}
                              >
                                <Box color="text.secondary">{element.icon}</Box>
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                  component="div"
                                  sx={{
                                    paddingLeft: " 1rem",
                                    fontFamily:`'Poppins', sans-serif`
                                  }}
                                >
                                  {element.title}
                                </Typography>
                              </Box>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* </Box> */}
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
