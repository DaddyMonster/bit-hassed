import { TypographyProps } from "@material-ui/core";

import { TypoUnion } from "../../../styles/theme/typo.override";

import { ColorOptionUnion } from "../../../styles/theme/palette.override";

export declare type JustTypoSizeOption = "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";

interface BaseProps {

    ft?: string | number;

    ff?: TypoUnion;

    colUni?: ColorOptionUnion;

    col?: string;

    sz?: JustTypoSizeOption;

}

export interface JustTypoProps extends TypographyProps, BaseProps {

}

declare const JustTypo: (props: JustTypoProps) => JSX.Element;

export default JustTypo;

