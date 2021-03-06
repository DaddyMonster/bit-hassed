import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import styled from "styled-components";
import { JustTypo } from "../../typos";
import { LEFT_SIDE_HEADER_HEIGHT } from "../../../constants/layout-constants";
import { grey } from "@material-ui/core/colors";

export interface LeftSideHeaderProps {
  label: string;
  Icon: IconType;
  iconProps?: IconBaseProps;
}

export const SideHeader = ({ Icon, label, iconProps }: LeftSideHeaderProps) => {
  return (
    <Root>
      <Icon {...iconProps} className="mr-2" />
      <JustTypo sz="md" ff="menu" col={grey[500]}>
        {label}
      </JustTypo>
    </Root>
  );
};

const Root = styled.div(({ theme }) => ({
  width: "100%",
  height: LEFT_SIDE_HEADER_HEIGHT,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1, 2),
}));
