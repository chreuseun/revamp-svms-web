import { useState } from 'react';
import { axiosPOSTRequest } from 'src/utils/axios';
import { Modal } from 'antd';
import { initiateLogout } from 'src/utils/authorization';

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

      const { error_message: serverErrMessage } = postRequestResponse?.data || {};

      if (serverErrMessage === 'Error: Invalid Authorization Token') {
        Modal.warning({
          title: 'Session expired',
          onOk: initiateLogout,
        });

        return;
      }

      if (onCompleted) {
        onCompleted(postRequestResponse);
      }
    } catch (postRequestError) {
      if (onError) {
        onError(postRequestError);
      }

      if (postRequestError?.response?.status === 401) {
        Modal.warning({
          title: 'Session expired',
          onOk: initiateLogout,
        });
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
