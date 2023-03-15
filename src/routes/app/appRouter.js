import { createBrowserRouter } from 'react-router-dom';

import {
  HomePage,
  NotFoundPage,
  AddUserPage,
  ManageUsersPage,
  AddDepartmentPage,
  ManageDepartmentsPage,
  ManageSemestersPage,
  ManageAcademicYearPage,
  UploadStudentPage,
  StudentsRecordsPage,
} from 'src/components/pages';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_ADD_USER,
    element: <AddUserPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_USERS,
    element: <ManageUsersPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_ADD_DEPARTMENT,
    element: <AddDepartmentPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_DEPARTMENTS,
    element: <ManageDepartmentsPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_SEMESTERS,
    element: <ManageSemestersPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_ACADEMIC_YEARS,
    element: <ManageAcademicYearPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_UPLOAD_STUDENT_CSV,
    element: <UploadStudentPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.ADMIN.ADMIN_MANAGE_STUDENTS,
    element: <StudentsRecordsPage />,
    caseSensitive: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    caseSensitive: true,
  },
]);

export default appRouter;
