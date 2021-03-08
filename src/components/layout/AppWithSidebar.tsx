import React from "react";
import { AppBaseLayout, BaseLayoutProps } from "./AppBaseLayout";
import { LeftSidebarMode, LeftSidePosition, SidedOuter } from "./SidedOuter";

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
  return (
    <AppBaseLayout {...baseLayoutProps}>
      <SidedOuter
        leftMode={leftMode}
        leftSidePosition={leftSidePosition}
        LeftSidebarElement={LeftSidebarElement}
      >
        {children}
      </SidedOuter>
    </AppBaseLayout>
  );
};
