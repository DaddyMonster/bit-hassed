import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {
  LEFT_SIDE_DIVIDER_HEIGHT,
  LEFT_SIDE_FOOTER_HEIGHT,
  LEFT_SIDE_HEADER_HEIGHT,
} from "../../../constants/layout-constants";
import { SideFooter } from "./SideFooter";
import { LeftSideHeaderProps, SideHeader } from "./SideHeader";
import { SideNavItem } from "./SideNavItem";
import Scrollbar from "react-perfect-scrollbar";

export interface LeftSideNavItem<_ClickArg_> {
  label: string;
  onClick: (e: React.MouseEvent, arg: _ClickArg_) => void;
  onClickArg: _ClickArg_;
}

export interface LeftSideContentProps<
  _ClickArg_,
  _ListItem_ extends LeftSideNavItem<_ClickArg_> = LeftSideNavItem<_ClickArg_>
> {
  headerProps: LeftSideHeaderProps;
  listItems: _ListItem_[];
  footerElem?: React.ReactNode;
}

export function LeftSideContent<
  _ClickArg_,
  _ListItem_ extends LeftSideNavItem<_ClickArg_>
>({
  headerProps,
  listItems,
  footerElem,
}: LeftSideContentProps<_ClickArg_, _ListItem_>) {
  return (
    <div className="w-full h-full">
      <SideHeader {...headerProps} />
      <DividerWrap>
        <Divider />
      </DividerWrap>
      <ContentWrap hasFooter={Boolean(footerElem)}>
        <Scrollbar>
          {listItems.map((item) => (
            <SideNavItem
              key={item.label}
              label={item.label}
              onClick={(e) => item.onClick(e, item.onClickArg)}
            />
          ))}
        </Scrollbar>
      </ContentWrap>
      {footerElem && <SideFooter>{footerElem}</SideFooter>}
    </div>
  );
}

const DividerWrap = styled.div(({ theme }) => ({
  heigt: LEFT_SIDE_DIVIDER_HEIGHT,
  padding: theme.spacing(0, 1),
}));

const ContentWrap = styled.div<{ hasFooter: boolean }>(
  ({ hasFooter, theme }) => {
    const SUBTRACT_HEIGHT =
      LEFT_SIDE_HEADER_HEIGHT + (hasFooter ? LEFT_SIDE_FOOTER_HEIGHT : 0);
    return {
      width: "100%",
      height: `calc(100% - ${SUBTRACT_HEIGHT}px)`,
      padding: theme.spacing(3, 2),
    };
  }
);
