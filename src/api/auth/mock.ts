import { AxiosRequestConfig } from 'axios';

import { LoginResponse } from './dto';

export const onLogin = (config: AxiosRequestConfig): [number, string | LoginResponse] => {
  if (config.data.includes('pass123')) {
    return [401, 'Wrong credentials'];
  }

  return [
    200,
    {
      user: {
        email: 'test@test.com',
        firstName: 'first',
        lastName: 'last',
      },
      token: 'xxxxx.yyyyy.zzzzz',
    },
  ];
};
