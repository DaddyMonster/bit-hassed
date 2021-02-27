import React from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme from "./styles/theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Buttons from "./pages/Buttons";
import Typos from "./pages/Typos";
import Cards from "./pages/Cards";
import Home from "./pages";
import Nav from "./layouts/Nav";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <StyledThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/buttons" component={Buttons} />
              <Route exact path="/cards" component={Cards} />
              <Route exact path="/typos" component={Typos} />
              <Redirect exact from="/" to="/home" />
            </Switch>
          </Router>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
