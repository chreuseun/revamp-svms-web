import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isInitialLoading: true,
  userDetails: null,
};

const app = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    updateAppReducer: (state, action) => {
      const { payload = {} } = action;
      return { ...state, ...payload };
    },
    resetAppReducer: () => {
      return INITIAL_STATE;
    },
  },
});

export const { updateAppReducer, resetAppReducer } = app.actions;

export default app.reducer;
