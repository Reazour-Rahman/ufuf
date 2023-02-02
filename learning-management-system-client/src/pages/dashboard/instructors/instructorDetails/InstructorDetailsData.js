import React from "react";
import { Button, Checkbox, Divider, Tabs } from "antd";
import { useMemo, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsFillEyeFill, BsFillBookFill } from "react-icons/bs";
import {AiTwotoneLike} from "react-icons/ai";
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import PersonalInformation from "./PersonalInformation";
import OverView from "./OverView";
import Courses from "./Courses";
import Review from "./Review";
import { Typography } from "@mui/material";



const InstructorDetailsData = () => {


  const [tabState, setTabState] = useState(0)
    const data = [
        {icons : CgProfile, name:'Personal Information', children: '<PersonalInformation/>'}, {icons : BsFillEyeFill, name:'Overview', children:'<OverView/>'}, {icons : BsFillBookFill, name:'Courses', children:'This is personal information 3'}, {icons : AiTwotoneLike, name:'Review', children:'This is personal information 3'}
    ]
  
  return (
    <div
      style={{
        background: "white",
        padding: "10px 20px",
        marginTop: "20px",
      }}
    >
      <>
      <Tabs
    defaultActiveKey={tabState}
    onChange={(e) => setTabState(e)}
    items={data.map((item, i) => {
      return {
        label: (
          <div style={{
            display:'flex',
            alignItems:'center',
          }}>
            <item.icons style={{
              fontSize:'20px'
            }}/>
            <Typography variant="soft" sx={{marginLeft:'10px', fontFamily:`'Poppins', sans-serif`, fontSize:'20px',display:{
            md: "block",
            sm: "none",
          }}}>{item.name}</Typography>
          </div>
        ),
        key: i,
      };
    })}
  />

  {
    <div>
      {
        tabState === 0 ? <PersonalInformation/> : tabState === 1 ? <OverView/> : tabState === 2 ? <Courses/> : <Review/>
      }
    </div>
  }
      </>
    </div>
  );
};

export default InstructorDetailsData;
