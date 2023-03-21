import { createBrowserRouter } from 'react-router-dom';

import { HomePage, NotFoundPage } from 'src/components/pages';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';

import {
  MyDepartmentsListPage,
  TraditionalDepartmentPage,
  DepartmentClearanceFormsPage,
  DepartmentClearanceFormPage,
} from 'src/components/pages/users';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.USER.USER_MY_DEPARTMENTS_LIST,
    element: <MyDepartmentsListPage />,
    caseSensitive: true,
  },
  {
    path: NAVIGATION_BAR_IDS.USER.USER_TRADITIONAL_DEPARTMENT,
    caseSensitive: true,
    element: <TraditionalDepartmentPage />,
  },
  {
    path: NAVIGATION_BAR_IDS.USER.USER_CLEARANCE_FORMS,
    caseSensitive: true,
    element: <DepartmentClearanceFormsPage />,
  },
  {
    path: NAVIGATION_BAR_IDS.USER.USER_CLEARANCE_ADD_FORM,
    caseSensitive: true,
    element: <DepartmentClearanceFormPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    caseSensitive: true,
  },
]);

export default appRouter;
