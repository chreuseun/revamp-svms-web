import { RouterProvider } from 'react-router-dom';

import publicRouter from 'src/routes/public/publicRouter';

const PublicRouterProvider = () => {
  return <RouterProvider router={publicRouter} />;
};

export default PublicRouterProvider;
