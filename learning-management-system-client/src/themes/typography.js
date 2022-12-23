import { createTheme } from '@mui/material/styles';
// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const theme = createTheme();
const Typography = (fontFamily) => ({
    htmlFontSize: 16,
    fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontWeight: 600,
        fontSize: '48px',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.51,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.7rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },
    h2: {
        fontWeight: 600,
        fontSize: '28px',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.27,
        [theme.breakpoints.down('md')]: {
            fontSize: '26px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px'
        }
    },
    h3: {
        fontWeight: 600,
        fontSize: '22px',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.33
    },
    h4: {
        fontWeight: 600,
        fontSize: '20px',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.4
    },
    // h5: {
    //     fontWeight: 600,
    //     fontSize: '1rem',
    //     fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
    //     lineHeight: 1.5
    // },
    // h6: {
    //     fontWeight: 400,
    //     fontSize: '0.875rem',
    //     fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
    //     lineHeight: 1.57
    // },
    caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.66
    },
    body1: {
        fontWeight: 400,
        fontSize: '1rem',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.57,
        [theme.breakpoints.down('md')]: {
            fontSize: '.9rem'
        }
    },
    body2: {
        fontSize: '0.75rem',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.66
    },
    subtitle1: {
        fontSize: '15px',
        fontWeight: 500,
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.57,
        [theme.breakpoints.down('md')]: {
            fontSize: '.775rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '675rem'
        }
    },
    subtitle2: {
        fontSize: '16px',
        fontWeight: 600,
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.66
    },
    // overline: {
    //     lineHeight: 1.66
    // },
    button: {
        textTransform: 'capitalize'
    },
    // curcleStyle: {
    //     // color: 'success.main',
    //     // bgcolor: 'success.lighter'
    //     background: '#fff',
    //     width: '80px',
    //     height: '80px',
    //     borderRadius: '100px',
    //     overflow: 'hidden',
    //     margin: '0 auto',
    //     fontSize: '30px',
    //     color: '#878991',
    //     boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    //     fontWeight: '400',
    //     padding: '27px'
    // },
    bigHead: {
        fontWeight: 700,
        fontSize: '65px',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: 1.21, 

        [theme.breakpoints.down('md')]: {
            fontSize: '1.7rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },
    light: {
        fontWeight: 500,
        fontSize: '18px',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: '30px', 

        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '30px', 
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '28px', 
        }
    },
    soft: {
        fontWeight: 500,
        fontSize: '16px',
        fontFamily: ['Hind Siliguri', 'sans-serif'].join(','),
        lineHeight: '30px', 

        [theme.breakpoints.down('md')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
        }
    },
});

export default Typography;
