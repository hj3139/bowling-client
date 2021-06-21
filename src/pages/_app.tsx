import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from 'styles/teme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      <style global jsx>
        {`
          .paper {
            height: 100vh;
            padding: 40px;
          }
        `}
      </style>
    </ThemeProvider>
  );
};
export default MyApp;
