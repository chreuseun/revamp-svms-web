import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouterProvider, PublicRouterProvider } from 'src/routes/routerProviders';

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
    return <AppRouterProvider />;
  }

  if (showLoginForm) {
    return <PublicRouterProvider />;
  }

  return <AuthorizingLoadingPage />;
};

export default RoutedApp;
