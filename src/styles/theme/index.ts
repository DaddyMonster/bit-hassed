import { createMuiTheme, Theme } from "@material-ui/core";
import customPalatte from "./palette.override";
import typoOptions from "./typo.override";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const defaultTheme = createMuiTheme({
  palette: customPalatte,
  typography: { fontFam: typoOptions, fontFamily: typoOptions.logo },
});

export default defaultTheme;
