import styled from "styled-components";
import React from "react";
import { Paper } from "@material-ui/core";
import { MainLogo, MainLogoProps } from "../../logos";

export interface TopNavProps {
  logoProps: MainLogoProps;
  children: React.ReactNode;
}

export const AppTopNavHeight = 50;

export const AppTopNav = ({ logoProps, children }: TopNavProps) => {
  return (
    <Root>
      <MainLogo {...logoProps} />
      <ContentWrap>{children}</ContentWrap>
    </Root>
  );
};

const Root = styled(Paper).attrs({ elavation: 5 })(({ theme }) => ({
  width: "100vw",
  height: AppTopNavHeight,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
}));

const ContentWrap = styled.div(({ theme }) => ({
  flex: "1 0 auto",
  height: "100%",
  display: "flex",
}));
