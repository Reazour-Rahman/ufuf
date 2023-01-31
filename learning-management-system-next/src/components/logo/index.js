import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { ButtonBase, Typography } from '@mui/material';
import React from 'react';

// =============|| MAIN LOGO ||============ //

const LogoSection = ({ sx, to }) => (
    <ButtonBase disableRipple /* component={Link} to="/"  */sx={sx}>
        <Logo/>
    </ButtonBase>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};

export default LogoSection;



const Logo = () => {
    return (
        <Typography variant="h4" sx={{color:"black"}}>
            LOGO HERE
        </Typography>
    );
};

