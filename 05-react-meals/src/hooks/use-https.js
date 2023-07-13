import { useState, useCallback } from "react";

const useHttps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      const data = await response.json();

      if (!response.ok) {
        setError("Request failed!", data.error || "Something went wrong!");
        return;
      }

      applyData(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttps;
