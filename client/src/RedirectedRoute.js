import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RedirectedRoute = ({ auth }) => {
  const isAuth = auth;
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectedRoute;
