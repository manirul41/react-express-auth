import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ auth }) => {
  const isAuth = auth;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
