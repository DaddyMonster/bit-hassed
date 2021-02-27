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

import { Button } from "@material-ui/core";

import styled from "styled-components";

import { withSparkTheme } from "../../themes/withSparkTheme";

export const JustButtonT = withSparkTheme((_a) => {

    var { children } = _a, props = __rest(_a, ["children"]);

    return _jsx(JustTextBtn, Object.assign({}, props, { children: children }), void 0);

});

const JustTextBtn = styled(Button).attrs({ variant: "text" })(({ theme, ft = "0.8rem", col, colUni, ff = "guide" }) => {

    const color = colUni

        ? theme.palette[colUni].main

        : col

            ? col

            : theme.palette.default.main;

    return {

        color,

        fontSize: ft,

        "& .MuiButton-label": {

            fontFamily: theme.typography.fontFam[ff],

        },

    };

});

