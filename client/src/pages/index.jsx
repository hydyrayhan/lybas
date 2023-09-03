import React, { useRef,useContext } from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

import Recommended_dress from '../components/Recommended_dress';

const image1 = require('../assets/images/young-japanese-woman-portrait-copy-space 1.png')

const swiper_container = {
  position:'relative',
}

const swiper_arrows = {
  both:{
    position:'absolute',
    top:'50%',
    transform:'translateY(-50%)',
    zIndex:'2',
  },
  next:{
    right:'30px',
  },
  prev:{
    left:'30px',
  }
}

const swiper_slide_style = {
  position: 'relative',
}

const swiper_slide_content_style = {
  position: 'absolute',
  zIndex: '1',
  top: '50%',
  transform: 'translateY(-50%)',
  marginLeft: '7%'
}

const swiper_slide_content_H1_style = {
  fontSize: '70px',
  marginBottom: '10px',
}

const swiper_slide_content_p_style = {
  fontSize: '30px',
  width: '80%',
}


function Index() {
  const swiperRef = useRef(false);
  const { t } = useContext(AppContext);
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className="main-swiper pt-[40px] pb-[40px]" style={swiper_container}>
        <button onClick={() => swiperRef.current?.slidePrev()} className='main-swiper-button' id="main-swiper-prev_arrow" style={{...swiper_arrows.prev,...swiper_arrows.both}}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.91663 17.0001L20.2545 5.66675L22.6666 8.31119L14.7409 17.0001L22.6666 25.689L20.2545 28.3334L9.91663 17.0001Z" fill="#0E1217" />
          </svg>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className='main-swiper-button' id="main-swiper-next_arrow" style={{...swiper_arrows.next,...swiper_arrows.both}}>
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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={swiper_slide_style}>
            <img src={image1} alt="" />
            <div className="main-swiper-content" style={swiper_slide_content_style}>
              <h1 style={swiper_slide_content_H1_style}>Find Your Dream Dress</h1>
              <p style={swiper_slide_content_p_style}>Dressmaking Service Made Enjoyable Find your dream dress by</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiper_slide_style}>
            <img src={image1} alt="" />
            <div className="main-swiper-content" style={swiper_slide_content_style}>
              <h1 style={swiper_slide_content_H1_style}>Find Your Dream Dress</h1>
              <p style={swiper_slide_content_p_style}>Dressmaking Service Made Enjoyable Find your dream dress by</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiper_slide_style}>
            <img src={image1} alt="" />
            <div className="main-swiper-content" style={swiper_slide_content_style}>
              <h1 style={swiper_slide_content_H1_style}>Find Your Dream Dress</h1>
              <p style={swiper_slide_content_p_style}>Dressmaking Service Made Enjoyable Find your dream dress by</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="recommended-products">
        <div className="section-header">
          <div className="section-header_name">{t('recommendedDress')}</div>
          <Link to="/" className="section-header_link"><span>{t('viewAll')}</span> Icon gerek</Link>
        </div>
        <div className="recommended-products_container">
          <Recommended_dress />
          <Recommended_dress />
          <Recommended_dress />  
        </div>
      </div>
    </div>
  )
}

export default Index
