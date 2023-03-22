import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';

import appRouter from 'src/routes/app/appRouter';
import { useGETAuth } from 'src/hooks/APIs/authorization';
import { updateAppReducer } from 'src/redux/reducers/appReducer';
import { useGetAppStore } from 'src/hooks/redux';
import userAppRouter from 'src/routes/app/userAppRouter';

const AppRouterProvider = () => {
  const dispatch = useDispatch();
  const { userDetails } = useGetAppStore();

  const userType = userDetails?.accountDetails?.user_type_id;

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

  if (userType === 'ADMIN') {
    return <RouterProvider router={appRouter} />;
  }
  if (userType === 'USER') {
    return <RouterProvider router={userAppRouter} />;
  }

  if (userType === 'SUBJECT') {
    //
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Spin size="large" tip="Loading app..." />
    </div>
  );
};

export default AppRouterProvider;
