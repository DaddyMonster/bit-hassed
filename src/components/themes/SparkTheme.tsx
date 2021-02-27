import {
  StyledEngineProvider,
  MuiThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import React from "react";
import defaultTheme from "../../styles/theme";

const SparkTheme: React.FC = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <StyledThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default SparkTheme;
