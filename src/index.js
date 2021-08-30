import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { AppProvider } from "./core/context";

const root = document.querySelector("#root");
const AppRender = () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>,
    root
  );
};
AppRender();
