import { Theme } from "@material-ui/core";

export declare type ColorOptionUnion = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "default";

interface ColorAlphaOption {

    color: ColorOptionUnion;

    op?: number;

    perc?: string;

}

declare type CreateGradient = (theme: Theme) => (ops: ColorAlphaOption[], dir?: string) => string;

declare module "@material-ui/core/styles/createPalette" {

    interface PaletteOptions {

        primary?: PaletteColorOptions;

        secondary?: PaletteColorOptions;

        success?: PaletteColorOptions;

        warning?: PaletteColorOptions;

        danger: PaletteColorOptions;

        default?: PaletteColorOptions;

        black: PaletteColorOptions;

        info?: PaletteColorOptions;

        gradient: CreateGradient;

    }

    interface Palette {

        primary: PaletteColor;

        secondary: PaletteColor;

        success: PaletteColor;

        warning: PaletteColor;

        danger: PaletteColor;

        default: PaletteColor;

        black: PaletteColor;

        info: PaletteColor;

        gradient: CreateGradient;

    }

}

export declare const createGradient: CreateGradient;

export declare const palettes: {

    primary: {

        main: string;

    };

    secondary: {

        main: string;

    };

    success: {

        main: string;

    };

    warning: {

        main: string;

    };

    danger: {

        main: string;

    };

    default: {

        main: string;

    };

    black: {

        main: string;

    };

    info: {

        main: string;

    };

};

declare const customPalatte: {

    primary: {

        main: string;

    };

    secondary: {

        main: string;

    };

    success: {

        main: string;

    };

    warning: {

        main: string;

    };

    danger: {

        main: string;

    };

    default: {

        main: string;

    };

    black: {

        main: string;

    };

    info: {

        main: string;

    };

} & {

    gradient: CreateGradient;

};

export default customPalatte;

