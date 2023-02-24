import useHTTPost from 'src/hooks/APIs/useHTTPost';

import { ENDPOINTS } from 'src/constants/endpoints';
const { AUTH } = ENDPOINTS;

const usePOSTLogout = () => {
  const { runHTTPPostRequest, isPOSTRequestLoading: usePOSTLogoutLoading } = useHTTPost({
    url: AUTH.API_LOGOUT,
  });

  const runPOSTLogout = async () => {
    await runHTTPPostRequest();
  };

  return {
    usePOSTLogoutLoading,
    runPOSTLogout,
  };
};

export default usePOSTLogout;
