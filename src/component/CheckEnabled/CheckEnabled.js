import React from "react";
import { useAppContext } from "../../core/context";
import { CheckEnabledWrapper } from "./styles";

export const CheckEnabled = () => {
  const { enabled, setEnabled } = useAppContext();

  const enableHandler = () => {
    setEnabled(!enabled);
  };
  return (
    <CheckEnabledWrapper>
      <input
        type="checkbox"
        id="enabled"
        name="enabled"
        value={enabled}
        onChange={enableHandler}
      />
      <label htmlFor="enabled">Enabled</label>
    </CheckEnabledWrapper>
  );
};
