import { createBrowserRouter } from 'react-router-dom';

import { HomePage, NotFoundPage } from 'src/components/pages';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    caseSensitive: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    caseSensitive: true,
  },
]);

export default appRouter;
