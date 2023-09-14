import React, { useContext } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'

const image1 = require('../assets/images/blog.png')

function Blog() {
  const { t } = useContext(AppContext)
  return (
    <div className='blog relative group'>
      <div className="blog-image md:group-hover:opacity-75 relative">
        <img className='rounded-t-lg' src={image1} alt="" />
        <Link to={'/'} className="blog-more-button md:hidden bg-lybas-blue py-[6px] px-[16px] flex justify-between items-center absolute bottom-2 right-2 text-white rounded">
          <svg className='mr-[10px]' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.13335 13.25L0.791687 11.9083L9.99169 2.70832H1.75002V0.791656H13.25V12.2917H11.3334V4.04999L2.13335 13.25Z" fill="white" />
          </svg>
          <span>{t('more')}</span>
        </Link>
      </div>
      <div className="blog-date text-[12px] md:text-[16px] mt-3 md:mt-[20px] text-lybas-gray">18 August 2023</div>
      <div className="blog-content flex justify-between items-start">
        <div className="blog-content-text w-full md:w-4/5">
          <div className="blog-name md:text-2xl font-semibold my-1 md:my-2">Nike Sportswear Futura Luxe</div>
          <div className="blog-definition text-lybas-gray text-[12px] md:text-[16px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <button className="blog-more-button hidden bg-lybas-blue py-[6px] px-[16px] md:flex justify-between items-center text-white rounded">
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
