import { useState } from 'react';
import { axiosGETRequest } from 'src/utils/axios';

const useHTTPGet = ({ onCompleted = () => {}, onError = () => {}, url = '' } = {}) => {
  const [isGETRequestLoading, setIsGetRequestLoading] = useState(false);

  const runHTTPGetRequest = async ({ config, headers = {} } = {}) => {
    setIsGetRequestLoading(true);

    try {
      const getRequestResponse = await axiosGETRequest({
        headers,
        config,
        url,
      });

      if (onCompleted) {
        onCompleted(getRequestResponse);
      }
    } catch (getRequestError) {
      if (onError) {
        onError(getRequestError);
      }
    }

    setIsGetRequestLoading(false);
  };

  return {
    isGETRequestLoading,
    runHTTPGetRequest,
  };
};

export default useHTTPGet;
