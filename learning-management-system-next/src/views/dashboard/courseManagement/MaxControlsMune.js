


import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaEdit, FaChartBar, FaCommentDots, FaFileVideo } from "react-icons/fa";

import { Box, Tooltip, Typography } from '@mui/material';
const options = [
    {
      icon: <FaEdit />,
      title: "Details",
    },
    { icon: <FaChartBar />, title: "Analytics" },
    { icon: <FaCommentDots />, title: "Comments" },
    { icon: <FaFileVideo />, title: "View" },
  ];

const ITEM_HEIGHT = 48;

export default function MaxControlsMune() {
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
         <Tooltip title='Options'>
         <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <HiOutlineDotsVertical />
      </IconButton>

         </Tooltip>
     
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
            <>
             
             <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
             <Box color='text.secondary'>{option.icon}</Box>
             <Typography
            variant='body2'
            color='text.secondary'
            component='div'
            sx={{
                paddingLeft:' 1rem'

            }}>
           {option.title}
          </Typography>
            
          </MenuItem>
            </>
        
        ))}
      </Menu>
    </div>
  );
}