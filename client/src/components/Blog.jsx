import React, { useContext } from 'react'
import { AppContext } from '../App'

const image1 = require('../assets/images/blog.png')

function Blog() {
  const { t } = useContext(AppContext)
  return (
    <div className='blog relative group'>
      <div className="blog-image group-hover:opacity-75"><img className='rounded-t-lg' src={image1} alt="" /></div>
      <div className="blog-date mt-[20px] text-lybas-gray">18 August 2023</div>
      <div className="blog-content flex justify-between items-start">
        <div className="blog-content-text w-4/5">
          <div className="blog-name text-2xl font-semibold my-[8px]">Nike Sportswear Futura Luxe</div>
          <div className="blog-definition text-lybas-gray">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <button className="blog-more-button bg-lybas-blue py-[6px] px-[16px] flex justify-between items-center text-white rounded">
          <svg className='mr-[10px]' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.13335 13.25L0.791687 11.9083L9.99169 2.70832H1.75002V0.791656H13.25V12.2917H11.3334V4.04999L2.13335 13.25Z" fill="white" />
          </svg>
          <span>{t('more')}</span>
        </button>
      </div>
    </div>
  )
}

export default Blog
