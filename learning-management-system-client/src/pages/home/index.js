import React from 'react';
import Banner from './banner/Banner';
import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '30px',
    marginTop: '14px'
}));
const index = () => {
    return (
        <div>
            <Banner/>
        </div>
    );
};
/* <Box sx={{ width: '1180px', maxWidth: '99%', margin: '0 auto' }}>{children}</Box> */
export default index;