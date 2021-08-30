import React from "react";
import { GetBtnContainer } from "./styles";

export const GetBtn = (props) => {
  
  return (
    <GetBtnContainer>{props.children}</GetBtnContainer>
  );
};
