import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import publicRoutes from 'src/routes/public/publicRouter';
import appRouter from 'src/routes/app/appRouter';

import { updateAuthorizationReducer } from 'src/redux/reducers/authorizationReducer';
import { getAuthorizationToken } from 'src/utils/authorization';
import { AuthorizingLoadingPage } from 'src/components/pages';

const RoutedApp = () => {
  const dispatch = useDispatch();
  const { isAuthorizing, isLoggedIn } = useSelector(state => state.authorizationReducer);

  useEffect(() => {
    const accessToken = getAuthorizationToken();

    if (accessToken) {
      dispatch(updateAuthorizationReducer({ isAuthorizing: false, isLoggedIn: true }));
    } else {
      dispatch(updateAuthorizationReducer({ isAuthorizing: false, isLoggedIn: false }));
    }
  }, []);

  const showLoginForm = !isLoggedIn && !isAuthorizing;
  const showApp = isLoggedIn && !isAuthorizing;

  if (showApp) {
    return <RouterProvider router={appRouter} />;
  }

  if (showLoginForm) {
    return <RouterProvider router={publicRoutes} />;
  }

  return <AuthorizingLoadingPage />;
};

export default RoutedApp;
