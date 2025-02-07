import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthLayout } from '../Layouts/AuthLayout/AuthLayout';
import Login from '../pages/Login/Login';
import AppLayout from '../Layouts/AppLayout/AppLayout';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';
import { UpsertRestaurant } from '../pages/Maintenance/UpsertRestaurant/UpsertRestaurant';
import { Restaurants } from '../pages/Maintenance/Restaurants/Restaurants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Authentication" element={<AuthLayout />}>
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<RestaurantPage />} />
        </Route>
        <Route path="/Maintenance" element={<AppLayout />}>
          <Route index element={<Restaurants />} />
          <Route path=":id" element={<UpsertRestaurant />} />
        </Route>
        <Route path="*" index element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
