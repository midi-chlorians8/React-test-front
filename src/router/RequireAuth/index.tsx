import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from 'store/auth/selectors';

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props): JSX.Element => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
