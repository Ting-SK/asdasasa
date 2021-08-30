import React from "react";
import { useAppContext } from "../../core/context";
import { CheckRefreshWrapper } from "./styles";

export const CheckRefresh = () => {
  const { refreshed, setRefreshed } = useAppContext();

  const refreshHandler = () => {
    setRefreshed(!refreshed);
  };
  return (
    <CheckRefreshWrapper>
      <input
        type="checkbox"
        id="refresh"
        name="refresh"
        value={refreshed}
        onChange={refreshHandler}
      />
      <label htmlFor="refresh">Auto-refresh every 5 second</label>
    </CheckRefreshWrapper>
  );
};
