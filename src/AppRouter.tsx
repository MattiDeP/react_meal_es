import { Routes, Route } from 'react-router-dom';
import MenuTable from './components/table.tsx';
import Product from './components/Product.tsx';
import Login from './components/login.tsx';
import Profile from './components/profile.tsx';
import Merch from './components/merch.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import Signup from './components/signup.tsx';
import Ins_merch from './components/ins_merch.tsx';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MenuTable />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ins_merch" element={<Ins_merch />} />
    </Routes>
  );
}

export default AppRouter;


