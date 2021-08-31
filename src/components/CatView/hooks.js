import { useState, useCallback, useRef, useEffect } from "react";
import { useAppContext } from "../../core";

export const useCatPic = () => {
  const { enabled, refreshed } = useAppContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const interval = useRef(null);

  const request = useCallback(() => {
    setLoading(true);
    if (!enabled) {
      setError("Need to be enabled");
    } else {
      setError("");
      fetch(`https://api.thecatapi.com/v1/images/search`)
        .then((response) => response.json())
        .then((result) => {
          setData(result.map((el) => el.url));
          setLoading(false);
        })
        .catch((error) => setError(error));
    }
  }, [enabled]);

  const startRefreshInterval = useCallback(() => {
    interval.current = setInterval(() => {
      request();
    }, 5000);
  }, [interval, request]);

  const clearRefreshInterval = useCallback(() => {
    interval.current = clearInterval(interval.current);
  }, [interval]);

  useEffect(() => {
    console.log("refreshed hook", refreshed);
    if (refreshed) {
      startRefreshInterval();
    } else {
      clearRefreshInterval();
    }
    return () => clearRefreshInterval();
  }, [refreshed, clearRefreshInterval, startRefreshInterval]);

  return {
    data,
    loading,
    error,
    request,
  };
};
