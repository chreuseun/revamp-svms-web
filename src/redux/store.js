import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authorizationReducer } from './reducers';

const reducer = combineReducers({
  authorizationReducer,
});

const store = configureStore({ reducer });

export default store;
