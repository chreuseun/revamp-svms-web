import { useDispatch } from 'react-redux';
import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';
import { updateAppReducer } from 'src/redux/reducers/appReducer';
import { USER_DETAILS } from 'src/constants/localStorage';

const useGETAuth = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const dispatch = useDispatch();

  const { runHTTPGetRequest, isGETRequestLoading: isGETAuthLoading } = useHTTPGet({
    url: ENDPOINTS.ACCOUNT.GET_ACCOUNT_AUTHORIZATION,
    onCompleted: response => {
      const { success, error_message: errMessage, data } = response?.data || {};

      if (success) {
        localStorage.setItem(USER_DETAILS, JSON.stringify(data));

        dispatch(updateAppReducer({ userDetails: data }));

        if (onCompleted) {
          onCompleted({ accountDetails: data, msg: errMessage });
        }
      } else {
        notification.error({
          message: `Get Authoziation Error: ${errMessage}`,
        });
      }
    },
    onError: error => {
      notification.error({
        message: `Get Authoziation Error: ${error}`,
      });

      if (onError) {
        onError(error);
      }
    },
  });

  const runGETAuth = async () => {
    runHTTPGetRequest({
      config: {
        params: {
          account_id: 135,
        },
      },
      headers: {},
    });
  };

  return {
    runGETAuth,
    isGETAuthLoading,
  };
};

export default useGETAuth;
