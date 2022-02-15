import { AxiosResponse } from 'axios';

import { http } from '../index';
import { mock } from '../mock';

import { LoginRequest, LoginResponse } from './dto';
import { onLogin } from './mock';

mock.onPost('/login').reply(onLogin);

export const login = (data: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
  return http.post('/login', data);
};
