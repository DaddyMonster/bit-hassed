import { Paper } from "@material-ui/core";
import { motion, Variants, useAnimation } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  APP_TOP_NAV_HEIGHT,
  LEFT_SIDE_WIDTH_STANDARD,
  LEFT_SIDE_WIDTH_MINI,
} from "../constants/layout-constants";
import { AppBaseLayout, BaseLayoutProps } from "./AppBaseLayout";

export type LeftSidebarMode = "standard" | "mini" | "hidden";
export type LeftSidePosition = "relative" | "absolute";
export interface AppWithSidebarsProps {
  baseLayoutProps: Omit<BaseLayoutProps, "children">;
  LeftSidebarElement: React.ComponentType;
  children: React.ReactNode;
  leftMode?: LeftSidebarMode;
  leftSidePosition?: LeftSidePosition;
}

export const AppWithSidebars = ({
  baseLayoutProps,
  LeftSidebarElement,
  children,
  leftMode = "standard",
  leftSidePosition = "relative",
}: AppWithSidebarsProps) => {
  const sideController = useAnimation();
  return (
    <AppBaseLayout {...baseLayoutProps}>
      <Root>
        <LeftSideOuter
          variants={leftSideVariant}
          initial={leftMode}
          animate={sideController}
          custom={leftSidePosition}
        >
          <LeftSidebarElement />
        </LeftSideOuter>
        <ContentWrap layout>{children}</ContentWrap>
      </Root>
    </AppBaseLayout>
  );
};

const Root = styled.div({
  width: "100%",
  height: `calc(100vh - ${APP_TOP_NAV_HEIGHT}px)`,
  display: "flex",
});

const MotionPaper = motion(Paper);
const LeftSideOuter = styled(MotionPaper)(({ theme }) => ({
  height: "100%",
  boxShadow: theme.shadows[1],
  background: "none",
}));
const leftSideVariant: Variants = {
  standard: (leftSidePosition) => {
    return { width: LEFT_SIDE_WIDTH_STANDARD, position: leftSidePosition };
  },
  mini: (leftSidePosition) => {
    return { width: LEFT_SIDE_WIDTH_MINI, position: leftSidePosition };
  },
  hidden: (leftSidePosition) => {
    return { width: 0, position: leftSidePosition };
  },
};

const ContentWrap = styled(motion.div)({
  flex: "1 0 auto",
  height: `calc(100vh - ${APP_TOP_NAV_HEIGHT}px)`,
});
