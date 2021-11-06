import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './stores';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  );
};

export default App;
