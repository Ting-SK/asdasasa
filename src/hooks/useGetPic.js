import { useEffect, useState } from "react";

export const useGetPic = (dataSearch) => {
  const [picture, setPicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (dataSearch.enable) {
      setError(null);
      setIsLoading(true);
      fetch(`https://api.thecatapi.com/v1/images/search`)
        .then((response) => response.json())
        .then((result) => {
          setPicture(result.map((el) => el.url));
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    }
  }, [dataSearch]);
  useEffect(() => {
    if (dataSearch.refresh && dataSearch.enable) {
      const intervalID = setInterval(() => {
        fetch(`https://api.thecatapi.com/v1/images/search`)
          .then((response) => response.json())
          .then((result) => {
            setPicture(result.map((el) => el.url));
            setIsLoading(false);
          })
          .catch((error) => setError(error));
      }, 5000);

      return () => clearInterval(intervalID);
    }
  }, [dataSearch]);
  return [picture, isLoading, error];
};
