import React from "react";
import { useAppContext } from "../../../core/context";
import { CheckEnabled } from "../../CheckEnabled";
import { CheckRefresh } from "../../CheckRefresh";
import { GetBtn } from "../../GetBtn";
import { FormWrapper } from "./styles";

export const Form = () => {
  const { refreshed, enabled, setDataSearch } = useAppContext();

  const submitHandler = (e) => {
    e.preventDefault();
    setDataSearch({ enable: enabled, refresh: refreshed });
  };
  return (
    <>
      {" "}
      <FormWrapper onSubmit={submitHandler}>
        <CheckEnabled />
        <CheckRefresh />
        <GetBtn>Get cat</GetBtn>
      </FormWrapper>
    </>
  );
};
