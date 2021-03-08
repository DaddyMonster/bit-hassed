import { Button, ButtonProps } from "@material-ui/core";
import styled from "styled-components";
import { ColorOptionUnion } from "../../../styles/theme/palette.override";
import { BtnBaseProps } from "./JustButtonC";

interface Props extends BtnBaseProps {
  colUni?: ColorOptionUnion;
}

export interface JustButtonTProps extends Props, Omit<ButtonProps, "variant"> {}

export const JustButtonT = styled(Button).attrs({ variant: "text" })<Props>(
  ({ theme, ft = "0.8rem", col, colUni, ff = "guide" }) => {
    const color = colUni
      ? theme.palette[colUni].main
      : col
      ? col
      : theme.palette.default.main;
    return {
      color,
      fontSize: ft,
      "& .MuiButton-label": {
        fontFamily: theme.typography.fontFam[ff],
      },
    };
  }
);
