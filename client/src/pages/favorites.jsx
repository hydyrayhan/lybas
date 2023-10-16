import React from 'react';

import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import Dress from '../components/Dress';
import SellerBox from '../components/SellerBox';

function Favorites() {
  return (
    <div className="favorites container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb />
      <div className="dresses_main w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
        <Dress hover="small" />
      </div>
    </div>
  );
}

export default Favorites;
