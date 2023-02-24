import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isAuthorizing: true,
  isLoggedIn: false,
};

const authorization = createSlice({
  name: 'authorization',
  initialState: INITIAL_STATE,
  reducers: {
    updateAuthorizationReducer: (state, action) => {
      const { payload = {} } = action;
      return { ...state, ...payload };
    },
    resetAuthorizationReducer: () => {
      return INITIAL_STATE;
    },
  },
});

export const { updateAuthorizationReducer, resetAuthorizationReducer } = authorization.actions;

export default authorization.reducer;
