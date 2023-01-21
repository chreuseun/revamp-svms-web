/* eslint-disable no-unreachable */
import { useState } from 'react';
import { notification } from 'antd';

import { axiosPOSTRequest } from 'src/utils/axios';
import { ENDPOINTS } from 'src/constants/endpoints';
import { API_SUCCESS_VALUE } from 'src/constants/api';
import { ACCESS_TOKEN } from 'src/constants/localStorage';
import { LOGIN_API_MESSAGE } from 'src/constants/login';

const usePOSTLogin = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const runPOSTLogin = async ({ username = '', password = '' } = {}) => {
    setIsLoginLoading(true);

    try {
      const data = {
        username,
        password,
      };

      const response = await axiosPOSTRequest({
        url: ENDPOINTS.LOGIN.API_LOGIN,
        data,
      });

      const { data: responseData = {} } = response || {};
      const { error = null, msg = null } = responseData || {};

      if (error) {
        const { msg = '' } = error;
        const loginError = msg;

        if (onError) {
          onError(loginError);
        }

        notification.error({
          message: LOGIN_API_MESSAGE.ERROR.ERROR_API.message,
          description: `${loginError}`,
          placement: LOGIN_API_MESSAGE.ERROR.ERROR_API.placement,
        });
      } else {
        if (msg === API_SUCCESS_VALUE.success) {
          const { token } = responseData;
          localStorage.setItem(ACCESS_TOKEN, token);

          if (onCompleted) {
            onCompleted();
          }

          notification.success({
            message: LOGIN_API_MESSAGE.SUCCESS.message,
            placement: LOGIN_API_MESSAGE.SUCCESS.placement,
          });
        } else {
          notification.warning({
            message: LOGIN_API_MESSAGE.WARNING.message,
            description: LOGIN_API_MESSAGE.WARNING.description,
            placement: LOGIN_API_MESSAGE.WARNING.placement,
          });
        }
      }
    } catch (error) {
      notification.error({
        message: LOGIN_API_MESSAGE.ERROR.ERROR_CATCH.message,
        description: `${error}`,
        placement: LOGIN_API_MESSAGE.ERROR.ERROR_CATCH.placement,
      });
    }

    setIsLoginLoading(false);
  };

  return {
    isLoginLoading,
    runPOSTLogin,
  };
};

export default usePOSTLogin;
