import React, { useCallback } from "react";
import { useAppContext } from "../../core";
import { CheckBox } from "../../ui";
import { Wrapper } from "./styles";

export const Filters = () => {
  const { enabled, setEnabled, refreshed, setRefreshed } = useAppContext();

  const changeEnabled = useCallback(
    (event) => {
      const { checked } = event.target;
      setEnabled(checked);
    },
    [setEnabled]
  );

  const changeRefreshed = useCallback(
    (event) => {
      const { checked } = event.target;
      setRefreshed(checked);
    },
    [setRefreshed]
  );

  return (
    <Wrapper>
      <CheckBox label="Enabled" checked={enabled} onChange={changeEnabled} />
      <CheckBox
        label="Auto refresh every 5 seconds"
        checked={refreshed}
        onChange={changeRefreshed}
      />
    </Wrapper>
  );
};
