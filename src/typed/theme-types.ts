import { Theme } from "@material-ui/core";
import { TypoOptionsType } from "../styles/theme/typo.override";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare module "@material-ui/core/styles/createTypography" {
  interface TypographyOptions {
    fontFam: TypoOptionsType;
  }
  interface Typography {
    fontFam: TypoOptionsType;
  }
}
