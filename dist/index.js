import { createMuiTheme } from "@material-ui/core";

import customPalatte from "./palette.override";

import typoOptions from "./typo.override";

const defaultTheme = createMuiTheme({

    palette: customPalatte,

    typography: { fontFam: typoOptions, fontFamily: typoOptions.logo },

});

export default defaultTheme;

