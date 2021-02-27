"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.palettes = exports.createGradient = void 0;

var core_1 = require("@material-ui/core");

var createGradient = function (theme) {

    return function (ops, dir) {

        if (dir === void 0) { dir = "to right"; }

        var stringifiedArr = ops.map(function (x, i) {

            var _color = x.color, _a = x.op, op = _a === void 0 ? 1 : _a, _b = x.perc, perc = _b === void 0 ? "50%" : _b;

            var color = op < 1

                ? core_1.alpha(theme.palette[_color].main, op)

                : theme.palette[_color].main;

            return "" + color + (i === ops.length - 1 ? "" : ",") + " " + perc;

        });

        return "linear-gradient(" + dir + ", " + stringifiedArr.join(" ") + " )";

    };

};

exports.createGradient = createGradient;

exports.palettes = {

    primary: { main: "#B380AA" },

    secondary: { main: "#61A0AF" },

    success: { main: "#bcd979" },

    warning: { main: "#FCBB6D" },

    danger: { main: "#f06c9b" },

    default: { main: "#475C7A" },

    black: { main: "#293132" },

    info: { main: "#96C9DC" },

};

var customPalatte = Object.assign(exports.palettes, {

    gradient: exports.createGradient,

});

exports.default = customPalatte;

