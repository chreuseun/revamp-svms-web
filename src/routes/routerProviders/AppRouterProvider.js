import { RouterProvider } from 'react-router-dom';

import appRouter from 'src/routes/app/appRouter';

const AppRouterProvider = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRouterProvider;
