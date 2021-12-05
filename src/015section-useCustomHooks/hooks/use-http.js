import { useCallback, useState } from 'react'

const useHTTP = () => { // zamiana inforamcji podanych na dzień dobry, albo nr 1 -applyData, albo nr2 - nic nie dodaje 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => { //useCalback i tutaj wrzucam drugą inforamcję co podajemy z fetch'u, czyli url, method etc...
    console.log('use')
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []); // zmiany zmian, najpierw był podany reqwuestConfig i został wywalony

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest
  };
};

export default useHTTP;