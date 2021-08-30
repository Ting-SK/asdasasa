import React from "react";
import { useAppContext } from "../../../core/context";
import { useGetPic } from "../../../hooks/useGetPic";
import { CatPicWrapper } from "./styles";

export const CatPic = () => {
  const { dataSearch } = useAppContext();
  const [picture, isLoading, error] = useGetPic(dataSearch);

  return (
    <CatPicWrapper>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        ((dataSearch.refresh && dataSearch.enable) || dataSearch.enable) && (
          <img src={picture} alt="cat" width="640px" height="424px" />
        )
      )}
      {error && <h3>Что то не так</h3>}
    </CatPicWrapper>
  );
};
