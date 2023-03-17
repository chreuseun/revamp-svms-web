import React from 'react';
import { Provider } from 'react-redux';

import store from 'src/redux/store';
import RoutedApp from 'src/RoutedApp';
import packageJSON from '../package.json';
import buildConfig from 'src/buildConfig';

const App = () => (
  <Provider store={store}>
    <div style={{ fontSize: 7, position: 'absolute', bottom: 0, right: 0 }}>
      {process.env?.NODE_ENV || ''}@{packageJSON?.version}-{buildConfig.BUILD_DATE}
    </div>
    <RoutedApp />
  </Provider>
);

export default App;
