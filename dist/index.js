"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

var core_1 = require("@material-ui/core");

var palette_override_1 = __importDefault(require("./palette.override"));

var typo_override_1 = __importDefault(require("./typo.override"));

var defaultTheme = core_1.createMuiTheme({

    palette: palette_override_1.default,

    typography: { fontFam: typo_override_1.default, fontFamily: typo_override_1.default.logo },

});

exports.default = defaultTheme;

