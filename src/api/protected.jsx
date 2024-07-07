import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRouteRole = ({ allowedRoles, element }) => {
  const user = JSON.parse(localStorage.getItem('user_info'));
  const userRole = user ? user.role : null;
  const location = useLocation();

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/connexion" state={{ from: location }} replace />;
  }

  return element ? (typeof element === 'function' ? element() : element) : <Outlet />;
};

export default ProtectedRouteRole;