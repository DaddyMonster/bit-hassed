import "../src/styles/fonts.css";
import "../src/styles/index.css";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme from "../src/styles/theme/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <StyledThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Story />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  ),
];
