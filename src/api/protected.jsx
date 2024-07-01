import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouteRole = ({ allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user_info'));
  const userRole = user ? user.role : null;

  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouteRole;
