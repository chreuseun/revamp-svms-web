import { createBrowserRouter } from 'react-router-dom';

import { LoginPage, NotFoundPage } from 'src/components/pages';

const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    caseSensitive: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    caseSensitive: true,
  },
]);

export default publicRouter;
