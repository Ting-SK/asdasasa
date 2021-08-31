import React, { useCallback } from "react";
import { Button } from "../../ui";
import { CatViewContent } from "../../ui/CatViewContent";
import { useCatPic } from "./hooks";
import { CatPicWrapper } from "./styles";

export const CatView = () => {
  const { request, data, loading, error } = useCatPic();

  const getCat = useCallback(() => {
    request();
  }, [request]);

  return (
    <div>
      <Button onClick={getCat}>Get Cat</Button>
      <CatPicWrapper>
        <CatViewContent loading={loading} error={error} data={data} />
      </CatPicWrapper>
    </div>
  );
};
