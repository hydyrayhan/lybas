import React from 'react';
import Sidebar from '../components/Sidebar';
import Dressmaker from '../components/Dressmaker';
import Breadcrumb from '../components/Breadcrumb';

function dressmakers() {
  return (
    <div className='dressmakers container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb />
      <div className="dressmakers_content flex">
        <div className="dressmakers_sidebar w-1/5 mr-10">
          <Sidebar dressmakers={true}/>
        </div>
        <div className="dressmakers_dressmakers w-4/5 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
        </div>
      </div>
    </div>
  );
}

export default dressmakers;
