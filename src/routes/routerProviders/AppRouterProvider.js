import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import appRouter from 'src/routes/app/appRouter';
import { useGETAuth } from 'src/hooks/APIs/authorization';

const AppRouterProvider = () => {
  const { runGETAuth } = useGETAuth();
  useEffect(() => {
    runGETAuth();
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default AppRouterProvider;
