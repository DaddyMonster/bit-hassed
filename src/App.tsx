import React from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme from "./styles/theme";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Typos from "./pages/Typos";
import Cards from "./pages/Cards";
import Home from "./pages";

import AppLayout from "./pages/AppLayout";

export interface NavProps {
  path: string;
  label: string;
}

const navProps: NavProps[] = [
  { path: "/home", label: "Home" },
  { path: "/buttons", label: "버튼" },
  { path: "/cards", label: "카드" },
  { path: "/typos", label: "타이포" },
];

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <StyledThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AppLayout navProps={navProps}>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/buttons" component={Buttons} />
              <Route exact path="/cards" component={Cards} />
              <Route exact path="/typos" component={Typos} />
              <Redirect exact from="/" to="/home" />
            </Switch>
          </AppLayout>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default withRouter(App);
