const APP_PREFIX = 'starter-ts';

const TOKEN_KEY = `${APP_PREFIX}-token`;

export const setToken = (token: string): void => localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => localStorage.getItem(TOKEN_KEY);
