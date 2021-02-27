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

var __rest = (this && this.__rest) || function (s, e) {

    var t = {};

    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)

        t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === "function")

        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {

            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))

                t[p[i]] = s[p[i]];

        }

    return t;

};

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

exports.JustTypo = void 0;

var jsx_runtime_1 = require("react/jsx-runtime");

var core_1 = require("@material-ui/core");

var styled_components_1 = __importDefault(require("styled-components"));

var withSparkTheme_1 = require("../../themes/withSparkTheme");

var typoOptionObj = {

    "4xl": "2.5rem",

    "3xl": "2rem",

    "2xl": "1.7rem",

    xl: "1.5rem",

    lg: "1.2rem",

    md: "1rem",

    sm: "0.8rem",

    xs: "0.65rem",

    xxs: "0.5rem",

};

exports.JustTypo = withSparkTheme_1.withSparkTheme(function (_a) {

    var children = _a.children, props = __rest(_a, ["children"]);

    return jsx_runtime_1.jsx(Typo, __assign({}, props, { children: children }), void 0);

});

var Typo = styled_components_1.default(core_1.Typography)(function (_a) {

    var theme = _a.theme, ft = _a.ft, _b = _a.ff, ff = _b === void 0 ? "text" : _b, col = _a.col, colUni = _a.colUni, sz = _a.sz;

    var color = colUni

        ? theme.palette[colUni].main

        : col

            ? col

            : theme.palette.default.main;

    var fontSize = sz ? typoOptionObj[sz] : ft ? ft : "1rem";

    return {

        color: color,

        fontSize: fontSize,

        fontFamily: theme.typography.fontFam[ff],

    };

});

