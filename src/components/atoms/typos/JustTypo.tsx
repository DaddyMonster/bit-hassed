import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";
import { TypoUnion } from "../../../styles/theme/typo.override";
import styled from "styled-components";
import { ColorOptionUnion } from "../../../styles/theme/palette.override";
import { withSparkTheme } from "../../themes/withSparkTheme";

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

export const typoOptionObj: JustTypoObj = {
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
  grey?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export interface JustTypoProps extends TypographyProps, BaseProps {}

export const JustTypo = withSparkTheme(
  ({ children, ...props }: JustTypoProps) => {
    return <Typo {...props}>{children}</Typo>;
  }
);

const Typo = styled(Typography)<BaseProps>(
  ({ theme, ft, ff = "text", col, colUni, sz, grey }) => {
    const color = grey
      ? theme.palette.grey[grey]
      : colUni
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
