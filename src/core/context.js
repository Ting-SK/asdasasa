import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = (props) => {
  const [enabled, setEnabled] = useState(false);
  const [refreshed, setRefreshed] = useState(false);
  const [dataSearch, setDataSearch] = useState({
    enable: false,
    refresh: false,
  });
  let values = {
    enabled,
    setEnabled,
    refreshed,
    setRefreshed,
    dataSearch,
    setDataSearch,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
