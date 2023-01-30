import React from 'react';
import { Button, Checkbox, Divider, Tabs } from "antd";
import { useMemo, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsFillEyeFill, BsFillBookFill } from "react-icons/bs";
import {AiTwotoneLike} from "react-icons/ai";
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Typography, useTheme } from '@mui/material';
import CompletePayment from './CompletePayment';
import PendingPayment from './PendingPayment';


const InstructorPayment = () => {
  const theme = useTheme();
    const [tabState, setTabState] = useState(0)
    const data = [
        {icons : CgProfile, name:'Complete Payment', children: '<PersonalInformation/>'}, {icons : BsFillEyeFill, name:'Pending Payment', children:'<OverView/>'}
    ]
    return (
        <div
      
    >
        <Typography variant="h2" sx={{fontFamily:`'Poppins', sans-serif`, color: theme.palette.common.black,}}>Instructor Payment</Typography>
      <div
      style={{
        background: "white",
        padding: "5px 20px",
        marginTop: "20px",
      }}>
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
            <p style={{marginLeft:'10px', fontFamily:`'Poppins', sans-serif`, fontSize:'20px'}}>{item.name}</p>
          </div>
        ),
        key: i,
      };
    })}
  />

  {
    <div>
      {
        tabState === 0 ? <CompletePayment/> : tabState === 1 ? <PendingPayment/>: ''
      }
    </div>
  }
      </div>
    </div>
    );
};

export default InstructorPayment;