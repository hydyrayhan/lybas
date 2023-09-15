import React from 'react';

import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import Dress from '../components/Dress';
import SellerBox from '../components/SellerBox';

function dresses() {
  return (
    <div className='dresses container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb />
      <div className="dresses_main flex justify-between">
        <div className="dresses_main_left w-0 md:w-2/5 lg:w-1/5">
          <SellerBox />
          <Sidebar />
        </div>
        <div className="dresses_right w-full md:w-3/5 lg:w-4/5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:ml-5 lg:ml-[30px]">
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
          <Dress hover='on_sale' />
        </div>
      </div>
    </div>
  );
}

export default dresses;
