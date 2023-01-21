import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import publicRoutes from 'src/routes/public/publicRouter';

const RoutedApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('--- CHECING AUTORIZATION');
    setIsLoading(false);
  }, []);

  if (isLoading) {
    console.log('-- DISPLAY LOADING PROMPT');
  }

  return <RouterProvider router={publicRoutes} />;
};

export default RoutedApp;
