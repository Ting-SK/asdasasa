import React from "react";
import { ContentWrapper } from "./styles";
import { Form } from "../Form";
import { CatPic } from "../CatPic";

export const Content = () => {
  return (
    <ContentWrapper>
      <Form />
      <CatPic />
    </ContentWrapper>
  );
};
