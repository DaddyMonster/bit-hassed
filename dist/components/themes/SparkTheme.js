"use strict";

var __assign = (this && this.__assign) || function () {

    __assign = Object.assign || function(t) {

        for (var s, i = 1, n = arguments.length; i < n; i++) {

            s = arguments[i];

            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))

                t[p] = s[p];

        }

        return t;

    };

    return __assign.apply(this, arguments);

};

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

var jsx_runtime_1 = require("react/jsx-runtime");

var core_1 = require("@material-ui/core");

var styled_components_1 = require("styled-components");

var theme_1 = __importDefault(require("../../styles/theme"));

var SparkTheme = function (_a) {

    var children = _a.children;

    return (jsx_runtime_1.jsx(core_1.StyledEngineProvider, __assign({ injectFirst: true }, { children: jsx_runtime_1.jsx(core_1.MuiThemeProvider, __assign({ theme: theme_1.default }, { children: jsx_runtime_1.jsxs(styled_components_1.ThemeProvider, __assign({ theme: theme_1.default }, { children: [jsx_runtime_1.jsx(core_1.CssBaseline, {}, void 0), children] }), void 0) }), void 0) }), void 0));

};

exports.default = SparkTheme;

