import React from 'react';

import ReduxProvider from 'src/redux/ReduxProvider';
import RoutedApp from 'src/RoutedApp';

const App = () => (
  <ReduxProvider>
    <RoutedApp />
  </ReduxProvider>
);

export default App;
