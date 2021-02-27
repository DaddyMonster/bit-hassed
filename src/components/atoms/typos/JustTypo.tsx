import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";
import { TypoUnion } from "../../../styles/theme/typo.override";
import styled from "styled-components";
import { ColorOptionUnion } from "../../../styles/theme/palette.override";

export type JustTypoSizeOption =
  | "4xl"
  | "3xl"
  | "2xl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "xxs";
type JustTypoObj = {
  [key in JustTypoSizeOption]: string;
};

const typoOptionObj: JustTypoObj = {
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

interface BaseProps {
  ft?: string | number;
  ff?: TypoUnion;
  colUni?: ColorOptionUnion;
  col?: string;
  sz?: JustTypoSizeOption;
}

export interface JustTypoProps extends TypographyProps, BaseProps {}

const JustTypo = ({ children, ...props }: JustTypoProps) => {
  return <Typo {...props}>{children}</Typo>;
};

export default JustTypo;

const Typo = styled(Typography)<BaseProps>(
  ({ theme, ft, ff = "text", col, colUni, sz }) => {
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
  }
);
