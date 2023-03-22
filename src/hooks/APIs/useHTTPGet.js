import { useState } from 'react';
import { axiosGETRequest } from 'src/utils/axios';
import { Modal } from 'antd';
import { initiateLogout } from 'src/utils/authorization';

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

      const { error_message: serverErrMessage } = getRequestResponse?.data || {};

      if (serverErrMessage === 'Error: Invalid Authorization Token') {
        Modal.warning({
          title: 'Session expired',
          onOk: initiateLogout,
        });

        return;
      }

      if (onCompleted) {
        onCompleted(getRequestResponse);
      }
    } catch (getRequestError) {
      if (onError) {
        onError(getRequestError);
      }

      if (getRequestError?.response?.status === 401) {
        Modal.warning({
          title: 'Session expired',
          onOk: initiateLogout,
        });
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
