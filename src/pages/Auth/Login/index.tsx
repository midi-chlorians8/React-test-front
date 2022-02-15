import { useAsyncFn } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setToken } from 'services/storage';
import { login } from 'api/auth';
import slice from 'store/auth';

import Form, { FormData } from './Form';

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [, authenticate] = useAsyncFn(async (values: FormData) => {
    try {
      const { data } = await login(values);

      setToken(data.token);
      dispatch(slice.actions.authenticate());
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Form onSubmit={authenticate} />
    </div>
  );
};

export default Login;
