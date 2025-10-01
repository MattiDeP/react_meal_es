import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import type { JSX } from 'react';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useUser();
  if (!user || !user.loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;


