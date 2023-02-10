import { useState } from 'react';
import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGETEducationLevels = () => {
  const [educationalLevels, setEducationLevels] = useState([]);

  const { isGETRequestLoading: isGETEducationLevels, runHTTPGetRequest } = useHTTPGet({
    url: ENDPOINTS.EDUCATION_LEVELS.GET_EDUCATION_LEVELS,
    onCompleted: data => {
      setEducationLevels(data?.data || []);
    },
    onError: error => {
      notification.error({
        message: `Education levels ${error}`,
      });
    },
  });

  const runGETEducationLevels = async () => {
    await runHTTPGetRequest();
  };

  return {
    runGETEducationLevels,
    isGETEducationLevels,
    educationalLevels,
  };
};

export default useGETEducationLevels;
