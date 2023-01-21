import { useState } from 'react';
import { axiosPOSTRequest } from 'src/utils/axios';

const useHTTPost = ({ onCompleted = () => {}, onError = () => {}, url = '' } = {}) => {
  const [isPOSTRequestLoading, setIsPOSTRequestLoading] = useState(false);

  const runHTTPPostRequest = async ({ data = {}, headers = {} } = {}) => {
    setIsPOSTRequestLoading(true);

    try {
      const postRequestResponse = await axiosPOSTRequest({
        data,
        headers,
        url,
      });

      if (onCompleted) {
        onCompleted(postRequestResponse);
      }
    } catch (postRequestError) {
      if (onError) {
        onError(postRequestError);
      }
    }

    setIsPOSTRequestLoading(false);
  };

  return {
    isPOSTRequestLoading,
    runHTTPPostRequest,
  };
};

export default useHTTPost;
