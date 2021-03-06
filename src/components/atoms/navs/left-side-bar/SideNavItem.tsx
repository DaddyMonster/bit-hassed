import { alpha } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import styled from "styled-components";
import { ColorOptionUnion } from "../../../../styles/theme/palette.override";
import { JustTypo, JustTypoProps } from "../../typos";

type FlexJustify = "flex-end" | "center" | "flex-start";

export interface SideNavItemProps {
  typoProps?: JustTypoProps;
  hoverCol?: ColorOptionUnion;
  label: string;
  onClick: (e: React.MouseEvent) => void;
  flexJustify?: FlexJustify;
}

const baseTypoProps: JustTypoProps = {
  ff: "guide",
  sz: "md",
  col: grey[600],
};

export const SideNavItem = ({
  typoProps: _typoProps = {},
  hoverCol = "primary",
  label,
  onClick,
  flexJustify,
}: SideNavItemProps) => {
  const typoProps: JustTypoProps = Object.assign(baseTypoProps, _typoProps);
  return (
    <Wrapper hoverCol={hoverCol} onClick={onClick} flexJustify={flexJustify}>
      <JustTypo {...typoProps}>{label}</JustTypo>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  hoverCol: ColorOptionUnion;
  flexJustify?: FlexJustify;
}>(({ theme, hoverCol, flexJustify = "flex-end" }) => ({
  width: "100%",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: flexJustify,
  alignItems: "center",
  "&:hover": {
    background: alpha(theme.palette.grey[200], 0.5),
    transition: "background 150ms ease",
    "& p": {
      color: theme.palette[hoverCol].main,
    },
  },
}));
