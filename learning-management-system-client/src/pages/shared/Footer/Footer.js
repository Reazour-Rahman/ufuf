import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material/';
import Grid from '@mui/material/Grid';
// import LogoSection from 'components/Logo/index';
import { TwitterCircleFilled } from '@ant-design/icons';

const ListTag = styled('p')(({ theme }) => ({
    textAlign: 'left'
}));

const UlStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '30px',
    marginTop: '14px'
}));
const iconStyle = {
    fontSize: '23px',
    padding: '8px',
    border: '2px solid',
    borderRadius: '50%'
    // color: 'black'
};
const caption = {
    fontWeight: 600,
    paddingTop: 0,
    marginTop: 0
};

const Footer = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 25, lg: 25 }}>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                    {/* <LogoSection /> */} <h2>লোগো</h2>
                    <Typography sx={{ marginTop: '25px' }}>
                    অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম। <br /> যেকানে জনপ্রিয়িও কোর্স গুলো পাওয়া যাই এবং নিজের <br /> স্কিল কে এগিয়ে নিয়ে যাওয়া যায়।
                    </Typography>
                    <UlStyled>
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                    </UlStyled>
                </Grid>
                <Grid item xs={12} sm={4} md={5} lg={5}>
                    <ListTag sx={{ ...caption }}>Services</ListTag>
                    <ListTag>UI/Ux Design</ListTag>
                    <ListTag>Web Development</ListTag>
                    <ListTag>App Development</ListTag>
                    <ListTag>Digital Marketing</ListTag>
                </Grid>
                <Grid item xs={12} sm={4} md={5} lg={5}>
                    <ListTag sx={{ ...caption }}>Links</ListTag>
                    <ListTag>UI/Ux Design</ListTag>
                    <ListTag>Web Development</ListTag>
                    <ListTag>App Development</ListTag>
                    <ListTag>Digital Marketing</ListTag>
                </Grid>
                <Grid item xs={12} sm={4} md={5} lg={5}>
                    <ListTag sx={{ ...caption }}>Keep in touch</ListTag>
                    <ListTag>UI/Ux Design</ListTag>
                    <ListTag>Web Development</ListTag>
                    <ListTag>App Development</ListTag>
                    <ListTag>Digital Marketing</ListTag>
                </Grid>
            </Grid>
            <hr style={{ marginTop: '30px', marginBottom: '30px' }} />
            <p style={{ textAlign: 'center', marginBottom: '25px' }}>Copyright @ 2022 All rights reserved by Bug Smasher</p>
        </div>
    );
};

export default Footer;
