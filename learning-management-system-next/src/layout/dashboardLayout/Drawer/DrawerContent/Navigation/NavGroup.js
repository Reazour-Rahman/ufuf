// import PropTypes from 'prop-types';
// import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
// import { useSelector } from 'react-redux';

// // material-ui
// import { Box, Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';

// // project import
// import { useState } from 'react';
// import NavItem from './NavItem';

// // ==============================|| NAVIGATION - LIST GROUP ||============================== //

// const NavGroup = ({ item }) => {
//     const menu = useSelector((state) => state.menu);
//     const { drawerOpen } = menu;
//     const [open, setOpen] = useState(false);
//     console.log(item.children)
//     const handleTitleClick = () => {
//         setOpen(!open);
//     };

//     const navCollapse = item.children?.map((menuItem) => {
//         return (
//             <Collapse in={open}>
//                 {/* <NavItem key={menuItem.id} item={menuItem} level={1} /> */}
//                 Rabby Bhai
//             </Collapse>
//         );
//     });

//     return (
//         <List
//             subheader={
//                 item.title &&
//                 drawerOpen && (
//                     <Box>
//                         <ListItemButton onClick={handleTitleClick} timeout="auto" unmountOnExit>
//                             <ListItemText
//                                 primary={
//                                     <Typography variant="body1" sx={{color:"red"}} fontSize={'14px'}>
//                                         {item.title} Rabby Bhai
//                                     </Typography>
//                                 }
//                             />
//                             {open ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
//                         </ListItemButton>
//                     </Box>
//                 )
//             }
//             sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
//         >
//             {navCollapse}
//         </List>
//     );
// };

// NavGroup.propTypes = {
//     item: PropTypes.object
// };

// export default NavGroup;

import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { AiOutlineMail } from "react-icons/ai";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import NavItem from "./NavItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
// // material-ui
import { Box, Typography } from "@mui/material";

// // project import
import { useState } from "react";
import Link from 'next/link';

export default function NavGroup({ item }) {
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;
  const [open, setOpen] = useState(false);
  const handleTitleClick = () => {
    setOpen(!open);
  };
  const router = useRouter();
  const path = router.pathname;


  const navCollapse = item.children?.map((menuItem) => {
    console.log(`/dashboard/${menuItem?.url}`, path)
    const Icon = menuItem.icon;
    const itemIcon = menuItem.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;
    
    return (
      <Collapse in={open}>
        <ListItemButton as={Link} href={path === `dashboard/${menuItem?.url}` ? path : `dashboard/${menuItem?.url}`} >
          <ListItemIcon>
            {itemIcon}
          </ListItemIcon>
          <ListItemText variant="h5" primary={menuItem.title} />
          
        </ListItemButton>
      </Collapse>
    );
  });
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleTitleClick}>
        <ListItemIcon>
          <AiOutlineMail />
        </ListItemIcon>
        <ListItemText variant="h5" primary={item.title} />
        {open ? <MdExpandLess /> : <MdOutlineExpandMore />}
      </ListItemButton>
      {navCollapse}
    </List>
  );
}
NavGroup.propTypes = {
  item: PropTypes.object,
};

{
  /* <NavItem key={menuItem.id} item={menuItem} level={1} /> */
}
