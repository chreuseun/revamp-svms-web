import { createBrowserRouter } from 'react-router-dom';

import { HomePage, NotFoundPage, AddUserPage, ManageUsersPage } from 'src/components/pages';
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
    element: <ManageUsersPage />,
    caseSensitive: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    caseSensitive: true,
  },
]);

export default appRouter;
