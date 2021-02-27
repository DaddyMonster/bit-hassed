import { alpha } from "@material-ui/core";

export const createGradient = (theme) => {

    return function (ops, dir = "to right") {

        const stringifiedArr = ops.map((x, i) => {

            const { color: _color, op = 1, perc = "50%" } = x;

            const color = op < 1

                ? alpha(theme.palette[_color].main, op)

                : theme.palette[_color].main;

            return `${color}${i === ops.length - 1 ? "" : ","} ${perc}`;

        });

        return `linear-gradient(${dir}, ${stringifiedArr.join(" ")} )`;

    };

};

export const palettes = {

    primary: { main: "#B380AA" },

    secondary: { main: "#61A0AF" },

    success: { main: "#bcd979" },

    warning: { main: "#FCBB6D" },

    danger: { main: "#f06c9b" },

    default: { main: "#475C7A" },

    black: { main: "#293132" },

    info: { main: "#96C9DC" },

};

const customPalatte = Object.assign(palettes, {

    gradient: createGradient,

});

export default customPalatte;

