/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ auth }) {
  const isAuth = auth;

  return isAuth ? (
    <div className="flex items-center flex-row-reverse h-12 bg-blue-500 text-white font-bold pr-2">
      <div className="grid grid-cols-3 justify-items-center">
        <NavLink to="/" className="active:bg-green-700 hover:bg-gray-200 hover:bg-opacity-10 px-3 py-1 rounded-md">
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className="active:bg-green-700 hover:bg-gray-200 hover:bg-opacity-10 px-3 py-1 rounded-md"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/logout"
          className="active:bg-green-700 hover:bg-gray-200 hover:bg-opacity-10 px-3 py-1 rounded-md"
        >
          Log Out
        </NavLink>
      </div>
    </div>
  ) : (
    <div className="flex items-center flex-row-reverse h-12 bg-blue-500 text-white font-bold pr-2">
      <div className="grid grid-cols-2 justify-items-center">
        <NavLink
          to="/signup"
          className="active:bg-green-700 hover:bg-gray-200 hover:bg-opacity-10 px-3 py-1 rounded-md"
        >
          Sign up
        </NavLink>
        <NavLink to="/login" className="active:bg-green-700 hover:bg-gray-200 hover:bg-opacity-10 px-3 py-1 rounded-md">
          Log in
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
