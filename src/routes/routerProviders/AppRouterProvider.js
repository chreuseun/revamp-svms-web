import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import appRouter from 'src/routes/app/appRouter';
import { useGETAuth } from 'src/hooks/APIs/authorization';
import { updateAppReducer } from 'src/redux/reducers/appReducer';

const AppRouterProvider = () => {
  const dispatch = useDispatch();

  const { runGETAuth } = useGETAuth({
    onCompleted: () => {
      dispatch(updateAppReducer({ isInitialLoading: false }));
    },
    onError: () => {
      dispatch(updateAppReducer({ isInitialLoading: false }));
    },
  });

  useEffect(() => {
    runGETAuth();
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default AppRouterProvider;
