import React from "react";
import { GetBtnContainer } from "./styles";

export const Button = ({ children, onClick }) => {
  return <GetBtnContainer onClick={onClick}>{children}</GetBtnContainer>;
};
