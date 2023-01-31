// import IconButton from '@mui/material/IconButton';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TbEye, TbArrowBarToDown } from "react-icons/tb";
import { FaEdit, FaChartBar, FaCommentDots, FaFileVideo } from "react-icons/fa";

import {
  Box,
  DialogActions,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
 
  Button
} from "@mui/material";
import { useState } from "react";
const options = [
  {
    icon: <FaEdit />,
    title: "Details",
  },
  { icon: <FaChartBar />, title: "Analytics" },
  { icon: <FaCommentDots />, title: "Comments" },
  { icon: <FaFileVideo />, title: "View" },
];

const ITEM_HEIGHT = 80;

export default function VisibilityOptionMune({ isEmailSubmitted, row }) {
  const [modalData, setModalData] = useState({
    color: '',
    title: '',
   
  });
  const [anchorEl, setAnchorEl] =useState(null);

  const [value, setValue] = useState(null);
  const [save, setSave] = useState("Male");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);



 

  const changeValue=(event)=>{
    setSave(event.target.value);
    console.log(event.target.value);
  }


const handleSubmit=(event)=>{
  event.preventDefault()

  const wishlistData = {
    color: value,
    title: save,
    
  };
  setModalData(wishlistData)
}


console.log(modalData);





  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Tooltip title='Options'> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <TbEye color='red' />

        <Box
          aria-label='more'
          id='long-button'
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup='true'
          onClick={handleClick}
          variant='body2'
          color='text.secondary'
          sx={{ margin: " 0px 0.4rem" }}>
          hello
        </Box>
        <TbArrowBarToDown
          style={{
            display: row.ID === isEmailSubmitted ? "block" : "none",
            transition: ".6s ease",
          }}
          color='text.secondary'
        />
      </Box>

      {/* </Tooltip> */}

      <Menu
        id='long-menu'
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "40ch",
          },
        }}>
           <form onSubmit={handleSubmit}>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={value}
            onChange={handleChange}>
            <Box
              sx={{
                marginLeft: "2rem",
                border: "1px solid",
                width: "52vh",
                marginTop: " 2rem",
                paddingLeft: "2rem",
              }}>
              <FormControlLabel
                value='Saveorpublish'
                control={<Radio />}
                label='Save or publish'
              />

{value === "Saveorpublish" && (
      <div onChange={changeValue} style={{    marginLeft: '2rem'
      }}>
      <input type="radio" value="Private" name="save" checked={save === "Private"} /> Private<br/>
      <input type="radio" value="Unlisted" name="save" checked={save === "Unlisted"}/> Unlisted<br/>
      <input type="radio" value="Public" name="save" checked={save === "Public"} /> Public<br/>
    </div>
      )}





            </Box>
            <Box
              sx={{
                marginLeft: "2rem",
                border: "1px solid",
                width: "52vh",
                marginTop: " 2rem",
                paddingLeft: "2rem",
              }}>
              <FormControlLabel value='Schedule' control={<Radio />} label='Schedule' />


              {value === "Schedule" && (
        <input
          style={{ marginTop: "10px" }}
          type="text"
          placeholder="Enter Schedule id"
        />
      )}
            </Box>
          </RadioGroup>
        </FormControl>
        

        <DialogActions>
          
          <Button type="submit" autoFocus>
          Submit
          </Button>
        </DialogActions>
        </form>
      </Menu>
    </div>
  );
}
