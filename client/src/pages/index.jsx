import React, { useRef, useContext, useEffect } from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

import Dress from '../components/Dress';
import Dressmaker from '../components/Dressmaker';
import Blog from '../components/Blog';

// reduxes
import { useSelector, useDispatch } from "react-redux";
import { bannersSlice } from '../redux/features/banners';

const image1 = require('../assets/images/young-japanese-woman-portrait-copy-space 1.png')


const swiper_container = {
  position: 'relative',
}

const swiper_arrows = {
  both: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '2',
  },
  next: {
    right: '30px',
  },
  prev: {
    left: '30px',
  }
}

function Index() {
  const swiperRef = useRef(false);
  const { t } = useContext(AppContext);

  const dispatch = useDispatch();

  const banners = useSelector((state) => state?.banners?.data)

  useEffect(() => {
    if (!banners) {
    }
    console.log(banners);
  }, [])

  return (
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className="main-swiper py-[20px] md:py-[30px] lg:py-[40px]" style={swiper_container}>
        <button onClick={() => swiperRef.current?.slidePrev()} className='hidden md:block main-swiper-button' id="main-swiper-prev_arrow" style={{ ...swiper_arrows.prev, ...swiper_arrows.both }}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.91663 17.0001L20.2545 5.66675L22.6666 8.31119L14.7409 17.0001L22.6666 25.689L20.2545 28.3334L9.91663 17.0001Z" fill="#0E1217" />
          </svg>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className='hidden md:block main-swiper-button' id="main-swiper-next_arrow" style={{ ...swiper_arrows.next, ...swiper_arrows.both }}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0833 16.9999L13.7455 28.3333L11.3333 25.6888L19.259 16.9999L11.3333 8.31103L13.7455 5.66658L24.0833 16.9999Z" fill="#0E1217" />
          </svg>
        </button>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          lazy='true'
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide className='relative'>
            <img src={image1} alt="" />
            <div className="main-swiper-content absolute z-1 top-1/2 ml-5 sm:ml-10 md:ml-14 lg:ml-20 -translate-y-1/2">
              <h1 className='text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px]'>Find Your Dream Dress</h1>
              <p className='text-[14px] sm:text-[20px] md:text-[24px] lg:text-[30px] w-3/5'>Dressmaking Service Made Enjoyable Find your dream dress by</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src={image1} alt="" />
            <div className="main-swiper-content absolute z-1 top-1/2 ml-5 sm:ml-10 md:ml-14 lg:ml-20 -translate-y-1/2">
              <h1 className='text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px]'>Find Your Dream Dress</h1>
              <p className='text-[14px] sm:text-[20px] md:text-[24px] lg:text-[30px] w-3/5'>Dressmaking Service Made Enjoyable Find your dream dress by</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src={image1} alt="" />
            <div className="main-swiper-content absolute z-1 top-1/2 ml-5 sm:ml-10 md:ml-14 lg:ml-20 -translate-y-1/2">
              <h1 className='text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px]'>Find Your Dream Dress</h1>
              <p className='text-[14px] sm:text-[20px] md:text-[24px] lg:text-[30px] w-3/5'>Dressmaking Service Made Enjoyable Find your dream dress by</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Recommended */}
      <div className="recommended-products">
        <div className="section-header">
          <div className="section-header_name text-lg">{t('recommendedDress')}</div>
          <Link to="/dresses" className="section-header_link flex items-center">
            <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
            </svg>
          </Link>
        </div>
        <div className="recommended-products_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Dress hover={'recommended'} />
          <Dress hover={'recommended'} />
          <Dress hover={'recommended'} />
        </div>
      </div>

      {/* Most Popular */}
      <div className="most-popular-products pt-5">
        <div className="section-header">
          <div className="section-header_name">{t('mostPopularDresses')}</div>
          <Link to="/" className="section-header_link flex items-center">
            <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Dress hover={'most_popular'} />
          <Dress hover={'most_popular'} />
          <Dress hover={'most_popular'} />
          <Dress hover={'most_popular'} />
          <Dress hover={'most_popular'} />
        </div>
      </div>

      {/* On Sale */}
      <div className="on-sale-products pt-5">
        <div className="section-header">
          <div className="section-header_name">{t('onSale')}</div>
          <Link to="/" className="section-header_link flex items-center">
            <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Dress hover={'on_sale'} />
          <Dress hover={'on_sale'} />
          <Dress hover={'on_sale'} />
          <Dress hover={'on_sale'} />
          <Dress hover={'on_sale'} />
        </div>
      </div>

      {/* Dress makers */}
      <div className="dress-makers-products pt-5">
        <div className="section-header">
          <div className="section-header_name">{t('dressmakers')}</div>
          <Link to="/" className="section-header_link flex items-center">
            <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
            </svg>
          </Link>
        </div>
        <div className="dressmakers grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
          <Dressmaker />
        </div>
      </div>

      {/* Blogs */}
      <div className="blogs -products pt-5">
        <div className="section-header">
          <div className="section-header_name">{t('blog')}</div>
          <Link to="/" className="section-header_link flex items-center"><span className='mr-2 text-lybas-blue'>{t('viewAll')}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
            </svg>
          </Link>
        </div>
        <div className="blogs grid md:grid-cols-2 gap-5 mb-[120px]">
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  )
}

export default Index
