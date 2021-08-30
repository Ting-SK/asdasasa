import React from "react";
import { Content } from "./component/ui/Content";
import { AppWrapper, GlobalStyle } from "./globalStyles";

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Content />
    </AppWrapper>
  );
};
