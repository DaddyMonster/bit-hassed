import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

import { StyledEngineProvider, MuiThemeProvider, CssBaseline, } from "@material-ui/core";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import defaultTheme from "../../styles/theme";

const SparkTheme = ({ children }) => {

    return (_jsx(StyledEngineProvider, Object.assign({ injectFirst: true }, { children: _jsx(MuiThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsxs(StyledThemeProvider, Object.assign({ theme: defaultTheme }, { children: [_jsx(CssBaseline, {}, void 0), children] }), void 0) }), void 0) }), void 0));

};

export default SparkTheme;

