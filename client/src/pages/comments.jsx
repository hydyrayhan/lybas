import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Comment from '../components/Comment';
import { useParams } from 'react-router-dom';

function Comments() {
  const [data,setData] = useState({});
  const {id} = useParams();
  return (
    <div className='comments container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'comment', link: '/' }} />

      <div className="revivers-container mb-10 bg-gray-100 rounded-[8px] flex flex-col sm:flex-row justify-between items-center px-10 py-10">

        <div className="revivers-container__left w-18 mr-10 mb-5 sm:mb-0">
          <p className="rate text-[70px] sm:text-[80px] md:text-[96px] font-bold mb-[12px]">4.5</p>
          <p className="text-[16px] md:text-[18px] font-medium leading-[24px] text-slate-500 mb-[10px]">4.5 stars</p>
          <p className="text-[16px] md:text-[18px] font-medium leading-[24px] text-slate-500">128 Comments</p>
        </div>

        <div className="revivers-container__rigth w-full">

          <div className="line mb-[12px] w-full flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">5</p>

            <div className="rate-line w-full bg-white">
              <div className="w-[50%] h-[12px] bg-lybas-blue rounded-[20px]"></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">4</p>

            <div className="rate-line w-full bg-white">
              <div className="w-[20%] h-[12px] bg-lybas-blue rounded-[20px]"></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">3</p>

            <div className="rate-line w-full bg-white">
              <div className="w-[5%] h-[12px] bg-lybas-blue rounded-[20px]"></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">2</p>

            <div className="rate-line w-full bg-white">
              <div className="w-[15%] h-[12px] bg-lybas-blue rounded-[20px]"></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">1</p>

            <div className="rate-line w-full bg-white">
              <div className="w-[10%] h-[12px] bg-lybas-blue rounded-[20px]"></div>
            </div>
          </div>

        </div>

      </div>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
