import { Routes, Route, Outlet } from 'react-router-dom';

import Header from 'components/Header';

import Auth from 'pages/Auth';
import Users from 'pages/Users';
import NotFound from 'pages/NotFound';

import RequireAuth from './RequireAuth';

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Outlet />
          </div>
        }
      >
        <Route
          path="users/*"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="auth/*" element={<Auth />} />
    </Routes>
  );
};

export default AppRouter;
