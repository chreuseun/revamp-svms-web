import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const { AUTH } = ENDPOINTS;

const useGETAuth = ({ onCompleted = () => {}, onError = () => {} } = {}) => {
  const { runHTTPGetRequest, isGETRequestLoading: isGETAuthLoading } = useHTTPGet({
    url: AUTH.API_AUTH,
    onCompleted: response => {
      const { data } = response;
      const { msg = '', user_details: userDetails = {} } = data || {};
      if (onCompleted) {
        onCompleted({ userDetails, msg });
      }

      console.log('-- OKAY api/auth: ', response);
    },
    onError: error => {
      if (onError) {
        onError(error);
      }

      console.log('-- ERR api/auth: ', error);
    },
  });

  const runGETAuth = async () => {
    runHTTPGetRequest({ config: {}, headers: {} });
  };

  return {
    runGETAuth,
    isGETAuthLoading,
  };
};

export default useGETAuth;
