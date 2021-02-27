import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
}

const RootLayout: React.FC<Props> = ({ description, title, children }) => {
  return (
    <div className="min-w-full min-h-screen">
      <Container maxWidth="lg">
        <Header>
          <h1 className="mb-2">{title}</h1>
          <h4>{description}</h4>
        </Header>
        <div className="px-3">{children}</div>
      </Container>
    </div>
  );
};

export default RootLayout;

const Header = styled.div(({ theme }) => ({
  padding: theme.spacing(2, 0, 4),
}));
