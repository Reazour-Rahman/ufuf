import { Typography, useTheme } from '@mui/material';
import React from 'react';

const InstructorDetailsHeader = () => {
    const theme = useTheme();
    return (
        <div>
             <Typography variant="h2" sx={{fontFamily:`'Poppins', sans-serif`, color: theme.palette.common.black,}}>Instructor Details / <span style={{
                color:'rebeccapurple'
             }}>Fahad Kibria</span> </Typography>
        </div>
    );
};

export default InstructorDetailsHeader;