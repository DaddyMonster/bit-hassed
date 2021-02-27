import { ButtonProps } from "@material-ui/core";

import { ColorOptionUnion } from "../../../styles/theme/palette.override";

import { BtnBaseProps } from "./JustButtonC";

interface Props extends BtnBaseProps {

    colUni?: ColorOptionUnion;

}

export interface JustButtonTProps extends Props, Omit<ButtonProps, "variant"> {

}

export declare const JustButtonT: (props: JustButtonTProps) => JSX.Element;

export {};

