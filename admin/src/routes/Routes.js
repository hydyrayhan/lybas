// src/Routes.tsx

import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./../components/Sidebar";
import Dashboard from "./../pages/Dashboard";
import Orders from "./../pages/Orders";
import SellerComments from './../pages/Comments'
import SellerProfileDresses from './../pages/Dresses';
import SellerProfileAddDress from './../pages/DressesAdd';
import OneOrder from "./../pages/OneOrder";
import CommentOne from "./../pages/CommentOne";
import Emails from "./../pages/Emails";
import EmailOne from "./../pages/EmailOne";
import Profile from "./../pages/Profile";
import Login from "./../pages/Login";
import Dressmakers from "./../pages/Dressmakers";
import DressmakersAdd from "./../pages/DressmakersAdd";
import DressmakersEdit from "./../pages/DressmakersEdit";
import Filter from "./../pages/Filter";
import FilterEdit from "./../pages/FilterEdit";
import Banner from './../pages/Banner'
import BannerAdd from "./../pages/BannerAdd";
import BannerEdit from './../pages/BannerEdit'
import Blog from "./../pages/Blog";
import BlogAdd from "./../pages/BlogAdd";
import Notification from "./../pages/Notification";
import NotificationAdd from "./../pages/NotificationAdd";
import BlogEdit from '../pages/BlogEdit';

const RoutesAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(false);

  const checkToken = async () => {
    if (location.pathname !== '/login') {
      if (localStorage.getItem('lybas-token')) {
        setToken(true);
      }
      else {
        setToken(false);
        navigate('/login')
      }
    } else {
      if (localStorage.getItem('lybas-token')) {
        setToken(true);
        navigate('/')
      } else {
        setToken(false);
      }
    }
  }
  useEffect(() => {
    checkToken();
  }, [navigate])

  if (!token) {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    )
  }
  return (

    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OneOrder />} />
        <Route path="/dressmakers" element={<Dressmakers />} />
        <Route path="/dressmakers/add" element={<DressmakersAdd />} />
        <Route path="/dressmakers/:id" element={<DressmakersEdit />} />
        <Route path="/dresses" element={<SellerProfileDresses />} />
        <Route path="/comments" element={<SellerComments />} />
        <Route path="/comments/:id" element={<CommentOne />} />
        <Route path="/dresses/add" element={<SellerProfileAddDress />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/emails/:id" element={<EmailOne />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/filter/:type" element={<FilterEdit />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/banner/add" element={<BannerAdd />} />
        <Route path="/banner/:id" element={<BannerEdit />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/add" element={<BlogAdd />} />
        <Route path="/blog/:id" element={<BlogEdit />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/notification/add" element={<NotificationAdd />} />
        {/* <Route path="/notification/:id" element={<NotificationEdit />} /> */}
      </Route>
    </Routes>
  );
};

export default RoutesAdmin;
