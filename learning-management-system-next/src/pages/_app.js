// import Theme from '../styles/theme';
// import ThemeCustomization from '../themes';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <ThemeCustomization>
//         <Component {...pageProps} />
//       </ThemeCustomization>
//     </>
//   );
// }
// import PropTypes from "prop-types";
// import { useMemo } from "react";

// // material-ui
// import { CssBaseline, StyledEngineProvider } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// // project import
// import Palette from "../themes/palette";
// import Typography from "../themes/typography";
// import CustomShadows from "../themes/shadows";
// import componentsOverride from "../themes/overrides";
// // import GlobalStyles from "../styles/globals";

// import Head from "next/head";
// import { CacheProvider } from "@emotion/react";
// import createEmotionCache from "../createEmotionCache";

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

// // ==============================|| DEFAULT THEME - MAIN  ||============================== //

// export default function App(props) {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps, children } = props;
//   const theme = Palette("light", "default");

//   const themeTypography = Typography(`'Public Sans', sans-serif`);
//   const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

//   const themeOptions = useMemo(
//     () => ({
//       breakpoints: {
//         values: {
//           xs: 0,
//           sm: 768,
//           md: 1024,
//           lg: 1266,
//           xl: 1536,
//         },
//       },
//       direction: "ltr",
//       mixins: {
//         toolbar: {
//           minHeight: 60,
//           paddingTop: 8,
//           paddingBottom: 8,
//         },
//       },
//       palette: theme.palette,
//       customShadows: themeCustomShadows,
//       typography: themeTypography,
//     }),
//     [theme, themeTypography, themeCustomShadows]
//   );

//   const themes = createTheme(themeOptions);
//   themes.components = componentsOverride(themes);

//   return (
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
//       </Head>
//       <StyledEngineProvider injectFirst>
//         <ThemeProvider theme={themes}>
//           <CssBaseline />
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </StyledEngineProvider>
//     </CacheProvider>
//   );
// }

// // App.propTypes = {
// //   children: PropTypes.node,
// // };
// App.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };



import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import ThemeCustomization from '../themes';
import { store } from '../redux/store'
import { Provider } from 'react-redux'


export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>SkillMate</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Provider store={store}>
        <ThemeCustomization>
          <Component {...pageProps} />
        </ThemeCustomization>
        </Provider>
      </React.Fragment>
    );
  }
}