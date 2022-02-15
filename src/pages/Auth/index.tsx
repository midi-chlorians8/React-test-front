import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Login';
import Registration from './Registration';

const Auth = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Navigate to="login" />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
};

export default Auth;
