import { uniqBy } from 'lodash';
import { localeData } from 'moment';

import { EDUCATION_LEVEL_IDS } from 'src/constants/academicLevels';

const { GRADE_SCHOOL, JUNIOR_HS, SENIOR_HS, COLLEGE } = EDUCATION_LEVEL_IDS;

const getAcadDepartmentsOptions = ({ coursesByEducLevelId, selectedAcadLevel }) => {
  try {
    if (selectedAcadLevel === COLLEGE) {
      return uniqBy(coursesByEducLevelId?.[`${COLLEGE}`], 'acad_dept').map(i => ({
        value: i.acad_dept,
        label: i.acad_dept,
      }));
    }
  } catch {}

  return [];
};

const getCourseOptions = ({ coursesByEducLevelId, selectedAcadLevel, selectedAcadDept }) => {
  try {
    if (selectedAcadLevel === COLLEGE) {
      return coursesByEducLevelId?.[`${selectedAcadLevel}`]
        ?.filter(i => i.acad_dept === selectedAcadDept)
        ?.map(i => ({ value: i.id, label: i.label }));
    } else if (selectedAcadLevel === SENIOR_HS) {
      return coursesByEducLevelId?.[`${selectedAcadLevel}`]
        ?.filter(i => i.educ_level_id === selectedAcadLevel)
        ?.map(i => ({ value: i.id, label: i.label }));
    }
  } catch {}

  return [];
};

const getSelectYearlevels = ({ courseData = {} }) => {
  try {
    return Array.from(Array(Number(courseData?.year_levels || 0)).keys()).map(i => ({
      value: i + 1,
      label: localeData().ordinal(i + 1),
    }));
  } catch {
    return [];
  }
};

const getYearlevelOptions = ({ selectedAcadLevel, coursesByEducLevelId, selectedCourse }) => {
  try {
    if ([GRADE_SCHOOL, JUNIOR_HS].includes(selectedAcadLevel)) {
      return getSelectYearlevels({
        courseData: coursesByEducLevelId?.[`${selectedAcadLevel}`]?.[0],
      });
    } else {
      return getSelectYearlevels({
        courseData: (coursesByEducLevelId?.[`${selectedAcadLevel}`] || [])?.find(
          i => i.id === selectedCourse,
        ),
      });
    }
  } catch {}

  return [];
};

const showAcadDepartmentSelect = ({ educationLevelID = null }) => {
  return [COLLEGE].includes(educationLevelID);
};

const showCourseSelect = ({ educationLevelID = null }) => {
  return [SENIOR_HS, COLLEGE].includes(educationLevelID);
};

export {
  getSelectYearlevels,
  showAcadDepartmentSelect,
  showCourseSelect,
  getAcadDepartmentsOptions,
  getCourseOptions,
  getYearlevelOptions,
};
