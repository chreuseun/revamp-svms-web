import { useState } from 'react';
import { notification } from 'antd';

import useHTTPGet from 'src/hooks/APIs/useHTTPGet';
import { ENDPOINTS } from 'src/constants/endpoints';

const useGETEducationLevelsWithCoursesAndYearlevels = () => {
  const [courses, setCourses] = useState([]);
  const [yearlevels, setYearlevels] = useState([]);

  const { isGETRequestLoading: isGETEducationLevelsWithCoursesAndYearlevels, runHTTPGetRequest } =
    useHTTPGet({
      url: ENDPOINTS.EDUCATION_LEVELS.GET_EDUCATION_COURSE_YEARLEVEL,
      onCompleted: data => {
        const courseYearlevelData = data?.data?.data || {};
        setCourses(courseYearlevelData?.course || []);
        setYearlevels(courseYearlevelData?.yearlevel || []);
      },
      onError: error => {
        notification.error({
          message: `Education levels with courses & yr. levels: ${error}`,
        });
      },
    });

  const runGETEducationLevelsWithCoursesAndYearlevels = async () => {
    await runHTTPGetRequest();
  };

  return {
    runGETEducationLevelsWithCoursesAndYearlevels,
    isGETEducationLevelsWithCoursesAndYearlevels,
    courses,
    yearlevels,
  };
};

export default useGETEducationLevelsWithCoursesAndYearlevels;
