import React from "react";
import { CheckEnabledWrapper } from "./styles";

export const CheckBox = ({
  value = "true",
  onChange,
  name,
  label,
  checked = false,
}) => (
  <CheckEnabledWrapper>
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <div>{label}</div>
    </label>
  </CheckEnabledWrapper>
);
