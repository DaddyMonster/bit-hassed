import { Button, ButtonProps } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { ColorOptionUnion } from "../../styles/theme/palette.override";
import { TypoUnion } from "../../styles/theme/typo.override";
import { withSparkTheme } from "../themes/withSparkTheme";

export interface BtnBaseProps {
  ft?: string | number;
  col?: string;
  ff?: TypoUnion;
}

interface ElemProps extends BtnBaseProps {
  bgUnion?: ColorOptionUnion;
  bg?: string;
}
export interface JustButtonCProps
  extends Omit<ButtonProps, "variant">,
    ElemProps {}

export const JustButtonC = withSparkTheme(
  ({ children, ...props }: JustButtonCProps) => {
    return <CotainedBtn {...props}>{children}</CotainedBtn>;
  }
);

const CotainedBtn = styled(Button).attrs({
  variant: "contained",
})<ElemProps>(({ theme, bg, bgUnion, ft = "0.8rem", col, ff = "guide" }) => {
  const background = bgUnion
    ? theme.palette[bgUnion].main
    : bg
    ? bg
    : theme.palette.secondary.main;

  return {
    fontSize: ft,
    background,
    color: col ?? "#fff",

    "&:hover": {
      background,
    },
    "& .MuiButton-label": {
      fontFamily: theme.typography.fontFam[ff],
    },
  };
});
