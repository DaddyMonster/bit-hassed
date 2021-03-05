import { Tabs } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export interface NavBaseProps {
  path: string;
  base?: string;
  label: string;
}

interface Props<T> {
  selected: T;
  onChange: (val: T) => void;
  children: React.ReactNode;
}

export function TopNavTab<T>({ children, selected, onChange }: Props<T>) {
  return (
    <Root>
      <TabParent value={selected} onChange={(_, val) => onChange(val)}>
        {children}
      </TabParent>
    </Root>
  );
}

const Root = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const TabParent = styled(Tabs).attrs({
  classes: { flexContainer: "cont", indicator: "indi" },
})(({ theme }) => ({
  height: "100%",
  "& .cont": {
    height: "100%",
  },
  "& .indi": {
    transition: "all 200ms ease",
    height: 3,
  },
}));
