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

import { jsx as _jsx } from "react/jsx-runtime";

import { Typography } from "@material-ui/core";

import styled from "styled-components";

import { withSparkTheme } from "../../themes/withSparkTheme";

const typoOptionObj = {

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

const JustTypo = withSparkTheme((_a) => {

    var { children } = _a, props = __rest(_a, ["children"]);

    return _jsx(Typo, Object.assign({}, props, { children: children }), void 0);

});

export default JustTypo;

const Typo = styled(Typography)(({ theme, ft, ff = "text", col, colUni, sz }) => {

    const color = colUni

        ? theme.palette[colUni].main

        : col

            ? col

            : theme.palette.default.main;

    const fontSize = sz ? typoOptionObj[sz] : ft ? ft : "1rem";

    return {

        color,

        fontSize,

        fontFamily: theme.typography.fontFam[ff],

    };

});

