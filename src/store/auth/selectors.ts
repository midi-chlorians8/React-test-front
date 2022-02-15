import { RootState } from 'store/reducers';

export const getIsAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;
