import { createBrowserRouter } from 'react-router-dom';

import { HomePage, NotFoundPage } from 'src/components/pages';
import { NAVIGATION_BAR_IDS } from 'src/constants/navigationBar';

import { MyDepartmentsListPage } from 'src/components/pages/users';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    caseSensitive: true,
  },
  {
    path: '/user/my-departments',
    element: <MyDepartmentsListPage />,
    caseSensitive: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    caseSensitive: true,
  },
]);

export default appRouter;
