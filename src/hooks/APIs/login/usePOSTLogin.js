import { notification } from 'antd';
import { useDispatch } from 'react-redux';

import { ENDPOINTS } from 'src/constants/endpoints';
import { API_SUCCESS_VALUE } from 'src/constants/api';
import { ACCESS_TOKEN } from 'src/constants/localStorage';
import { LOGIN_API_MESSAGE } from 'src/constants/login';
import useHTTPost from 'src/hooks/APIs/useHTTPost';
import { generateAuthorizationToken } from 'src/utils/authorization';
import { updateAuthorizationReducer } from 'src/redux/reducers/authorizationReducer';

const usePOSTLogin = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const dispatch = useDispatch();
  const { isPOSTRequestLoading: isLoginLoading, runHTTPPostRequest } = useHTTPost({
    onCompleted: response => {
      const { data: responseData = {} } = response || {};
      const { error = null, msg = null } = responseData || {};

      if (error) {
        const { msg = '' } = error;
        const loginError = msg;

        dispatch(updateAuthorizationReducer({ isLoggedIn: false }));

        if (onError) {
          notification.error({
            message: LOGIN_API_MESSAGE.ERROR.ERROR_API.message,
            description: `${loginError}`,
            placement: LOGIN_API_MESSAGE.ERROR.ERROR_API.placement,
          });

          onError(loginError);
        }
      } else {
        if (msg === API_SUCCESS_VALUE.success) {
          const { token = null } = responseData;
          localStorage.setItem(ACCESS_TOKEN, generateAuthorizationToken({ token }));

          dispatch(updateAuthorizationReducer({ isLoggedIn: true }));

          if (onCompleted) {
            onCompleted();
          }

          notification.success({
            message: LOGIN_API_MESSAGE.SUCCESS.message,
            placement: LOGIN_API_MESSAGE.SUCCESS.placement,
          });
        } else {
          dispatch(updateAuthorizationReducer({ isLoggedIn: false }));

          notification.warning({
            message: LOGIN_API_MESSAGE.WARNING.message,
            description: LOGIN_API_MESSAGE.WARNING.description,
            placement: LOGIN_API_MESSAGE.WARNING.placement,
          });
        }
      }
    },
    onError: error => {
      notification.error({
        message: LOGIN_API_MESSAGE.ERROR.ERROR_CATCH.message,
        description: `${error}`,
        placement: LOGIN_API_MESSAGE.ERROR.ERROR_CATCH.placement,
      });

      dispatch(updateAuthorizationReducer({ isLoggedIn: false }));
    },
  });

  const runPOSTLogin = async ({ username = '', password = '' } = {}) => {
    const data = {
      username,
      password,
    };

    await runHTTPPostRequest({
      url: ENDPOINTS.LOGIN.API_LOGIN,
      data,
    });
  };

  return {
    isLoginLoading,
    runPOSTLogin,
  };
};

export default usePOSTLogin;
