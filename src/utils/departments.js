import { uniqBy } from 'lodash';
import { localeData } from 'moment';

import { EDUCATION_LEVEL_IDS } from 'src/constants/academicLevels';

const { GRADE_SCHOOL, JUNIOR_HS, SENIOR_HS, COLLEGE } = EDUCATION_LEVEL_IDS;

const getAcadDepartmentsOptions = ({ coursesByEducLevelId, selectedAcadLevel }) => {
  try {
    if (selectedAcadLevel === COLLEGE) {
      const baseData = uniqBy(coursesByEducLevelId?.[`${COLLEGE}`], 'acad_dept').map(i => ({
        value: i.acad_dept,
        label: i.acad_dept,
      }));

      const finalAcademicDeptOptions = baseData.length
        ? [{ value: '*', label: '- All Academic Departments -' }, ...baseData]
        : [];

      return finalAcademicDeptOptions;
    }
  } catch {}

  return [];
};

const getCourseOptions = ({ coursesByEducLevelId, selectedAcadLevel, selectedAcadDept }) => {
  let data = [];
  const allCoursesItem = { value: '*', label: '- All Courses -' };

  if (selectedAcadDept === '*') {
    return [allCoursesItem];
  }

  try {
    if (selectedAcadLevel === COLLEGE) {
      data = coursesByEducLevelId?.[`${selectedAcadLevel}`]
        ?.filter(i => i.acad_dept === selectedAcadDept)
        ?.map(i => ({ value: i.id, label: i.label }));
    } else if (selectedAcadLevel === SENIOR_HS) {
      data = coursesByEducLevelId?.[`${selectedAcadLevel}`]
        ?.filter(i => i.educ_level_id === selectedAcadLevel)
        ?.map(i => ({ value: i.id, label: i.label }));
    }
  } catch {}

  const finalData = data?.length ? [allCoursesItem, ...data] : [];
  return finalData;
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
  let data = [];
  const allYearlevels = { value: '*', label: '- All Yearlevels -' };

  if (selectedCourse === '*') {
    return [allYearlevels];
  }

  try {
    if ([GRADE_SCHOOL, JUNIOR_HS].includes(selectedAcadLevel)) {
      data = getSelectYearlevels({
        courseData: coursesByEducLevelId?.[`${selectedAcadLevel}`]?.[0],
      });
    } else {
      data = getSelectYearlevels({
        courseData: (coursesByEducLevelId?.[`${selectedAcadLevel}`] || [])?.find(
          i => i.id === selectedCourse,
        ),
      });
    }
  } catch {}

  const finalData = data?.length ? [allYearlevels, ...data] : [];

  return finalData;
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
