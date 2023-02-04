import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authorizationReducer, appReducer } from './reducers';

const reducer = combineReducers({
  authorizationReducer,
  appReducer,
});

const store = configureStore({ reducer });

export default store;
