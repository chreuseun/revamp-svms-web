import React from 'react';
import { Provider } from 'react-redux';

import store from 'src/redux/store';
import RoutedApp from 'src/RoutedApp';

const App = () => (
  <Provider store={store}>
    <RoutedApp />
  </Provider>
);

export default App;
