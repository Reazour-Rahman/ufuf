import React from "react";
import { Button, Checkbox, Divider, Tabs } from "antd";
import { useMemo, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsFillEyeFill, BsFillBookFill } from "react-icons/bs";
import {AiTwotoneLike} from "react-icons/ai";
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';



const InstructorDetailsData = () => {

    const data = [
        {icons : CgProfile, name:'Personal Information', children:'This is personal information'}, {icons : BsFillEyeFill, name:'Overview', children:'This is personal information2'}, {icons : BsFillBookFill, name:'Courses', children:'This is personal information 3'}, {icons : AiTwotoneLike, name:'Review', children:'This is personal information 3'}
    ]
  
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <>
      <Tabs
    defaultActiveKey="2"
    items={data.map((item, i) => {
      return {
        label: (
          <div style={{
            display:'flex',
            alignItems:'center'
          }}>
            <item.icons />
            <p style={{marginLeft:'10px'}}>{item.name}</p>
          </div>
        ),
        key: i,
        children: <div>{item.children}</div>,
      };
    })}
  />
      </>
    </div>
  );
};

export default InstructorDetailsData;
