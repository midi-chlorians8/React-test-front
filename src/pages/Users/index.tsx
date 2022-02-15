import { Routes, Route } from 'react-router-dom';

import List from './List';
import Details from './Details';

const Users = (): JSX.Element => {
  return (
    <Routes>
      <Route path="" element={<List />} />
      <Route path=":id" element={<Details />} />
    </Routes>
  );
};

export default Users;
