import { Theme, theme } from "../design/theme";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "@styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme as Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
