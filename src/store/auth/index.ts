import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isAuthenticated: boolean;
};

const initialState: InitialState = {
  isAuthenticated: true,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: state => {
      state.isAuthenticated = true;
    },
  },
});

export default auth;
