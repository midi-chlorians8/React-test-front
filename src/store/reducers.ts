import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';

const rootReducer = combineReducers({
  auth: auth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
