import React from 'react';

import { RouterProvider } from 'react-router-dom';
import publicRoutes from 'src/routes/public/publicRouter';

const App = () => {
  return <RouterProvider router={publicRoutes} />;
};

export default App;
