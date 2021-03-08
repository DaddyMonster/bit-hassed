import React from "react";
import styled from "styled-components";
import { ColorOptionUnion } from "../../../styles/theme/palette.override";
import { JustTypo } from "../typos/JustTypo";
export interface MainLogoProps {
  size?: number;
  showSub?: boolean;
  mainText: string;
  subText: string;
  mainColUni: ColorOptionUnion;
}

export const MainLogo = ({
  size,
  showSub = true,
  mainColUni,
  mainText,
  subText,
}: MainLogoProps) => {
  return (
    <div className="h-full flex justify-center items-center">
      <LogoTypo colUni={mainColUni} $sizeInRem={size}>
        {mainText}
        {showSub && <LogoSubTypo $sizeInRem={size}>{subText}</LogoSubTypo>}
      </LogoTypo>
    </div>
  );
};

export const LogoTypo = styled(JustTypo).attrs({
  as: "span",
})<{
  colUni: ColorOptionUnion;
  $sizeInRem?: number;
}>(({ theme, colUni, $sizeInRem = 1.7 }) => ({
  fontFamily: theme.typography.fontFam.logo,
  color: theme.palette[colUni].main,
  fontSize: $sizeInRem + "rem",
  position: "relative",
  display: "inline-block",
  marginBottom: 15,
  textShadow: `0 0 2px #fff`,
}));

export const LogoSubTypo = styled(JustTypo).attrs({ ff: "pretty2", sz: "xs" })<{
  $sizeInRem?: number;
}>(({ theme, $sizeInRem }) => ({
  color: theme.palette.black.main,
  fontSize: $sizeInRem ? $sizeInRem - 1 + "rem" : "0.8rem",
  fontWeight: "bold",
  position: "absolute",
  right: 0,
  bottom: -10,
}));
