import React from "react";
import { AppWrapper, GlobalStyle } from "./globalStyles";
import { ContentLayout, Filters, CatView } from "./components";

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <ContentLayout>
        <Filters />
        <CatView />
      </ContentLayout>
    </AppWrapper>
  );
};
