import { notification } from 'antd';
import { useState } from 'react';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGETAllCourses = () => {
  const [courseData, setCoursesData] = useState([]);

  const { isGETRequestLoading: isGETAllCoursesLoading, runHTTPGetRequest } = useHTTPGet({
    url: ENDPOINTS.COURSES.GET_ALL_COURSES_DETAILS,
    onCompleted: data => {
      setCoursesData(data?.data?.data || []);
    },
    onError: error => {
      notification.error({
        message: `${error}`,
      });
    },
  });

  const runGETAllCourses = async () => {
    await runHTTPGetRequest();
  };

  return {
    runGETAllCourses,
    isGETAllCoursesLoading,
    courseData,
  };
};

export default useGETAllCourses;
