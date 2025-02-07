import React from 'react';
import { Outlet } from 'react-router';
import './AuthLayout.scss';
export const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="layout-header">
        <h1 className="layout-header__title">
          Welcome Back! Your Next Dining Experience Awaits.
        </h1>
        <h2 className="layout-header__subtitle">
          Sign in to explore top restaurants, manage reservations, and enjoy
          seamless bookings.
        </h2>
      </div>

      <Outlet />
    </div>
  );
};
