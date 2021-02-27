import { ButtonProps } from "@material-ui/core";

import { ColorOptionUnion } from "../../styles/theme/palette.override";

import { TypoUnion } from "../../styles/theme/typo.override";

export interface BtnBaseProps {

    ft?: string | number;

    col?: string;

    ff?: TypoUnion;

}

interface ElemProps extends BtnBaseProps {

    bgUnion?: ColorOptionUnion;

    bg?: string;

}

export interface JustButtonCProps extends Omit<ButtonProps, "variant">, ElemProps {

}

export declare const JustButtonC: (props: JustButtonCProps) => JSX.Element;

export {};

