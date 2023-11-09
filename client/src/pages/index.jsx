import React, { useRef, useContext, useEffect, useState } from 'react'
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
import { fetchDataBanners } from '../redux/features/Banners';
import ip from '../common/Config';
import { AxiosCustom, AxiosUser } from '../common/AxiosInstance';

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
  const { t, lang } = useContext(AppContext);
  const [recom, setRecom] = useState([]);
  const [popular, setPopular] = useState([]);
  const [sale, setSale] = useState([]);
  const [dressmakers, setDressmakers] = useState([])
  const [blogs, setBlogs] = useState([]);

  const dispatch = useDispatch();

  const banners = useSelector((state) => state?.banners?.data)
  useEffect(() => {
    if (!banners.length) {
      dispatch(fetchDataBanners())
    }
    const getData = async () => {
      try {
        if(localStorage.getItem('lybas-user-token')){
          const res = await AxiosUser("/products?sort=3&limit=3")
          const res2 = await AxiosUser("/products?sort=2&limit=5")
          const res3 = await AxiosUser("/products?sort=4&limit=5")
          setRecom(res.data)
          setPopular(res2.data)
          setSale(res3.data)
        }else{
          const res = await AxiosCustom("/products?sort=3&limit=3")
          const res2 = await AxiosCustom("/products?sort=2&limit=5")
          const res3 = await AxiosCustom("/products?sort=4&limit=5")
          setRecom(res.data)
          setPopular(res2.data)
          setSale(res3.data)
        }
        const resDressmakers = await AxiosCustom("/seller?limit=5")
        setDressmakers(resDressmakers.data.sellers);
        const resBlogs = await AxiosCustom('/blogs?limit=2');
        setBlogs(resBlogs.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  return (
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {
        banners?.length > 0 &&
        <div className="main-swiper h-[320px] md:h-[400px] lg:h-[600px] overflow-hidden py-[20px] md:py-[30px] lg:py-[40px]" style={swiper_container}>
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
          {
            banners?.length > 0 &&
            <Swiper
              className='h-full rounded-lg overflow-hidden'
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
              {
                banners.map((banner, index) => (
                  <SwiperSlide key={index} className='relative h-full rounded-lg overflow-hidden'>
                    <Link to={banner.link}>
                      <img src={ip + '/' + banner.image} alt="" className='w-full h-full object-cover' />
                    </Link>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          }
        </div>
      }

      {/* Recommended */}
      {
        recom.length > 0 &&
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
            {
              recom[0] &&
              <Dress hover={'big'} data={recom[0]} />
            }
            {
              recom[1] &&
              <Dress hover={'big'} data={recom[1]} />
            }
            {
              recom[2] &&
              <Dress hover={'big'} className={'sm:hidden md:block'} data={recom[2]} />
            }
          </div>
        </div>
      }

      {/* Most Popular */}
      {
        popular.length > 0 &&
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
            {
              popular[0] &&
              <Dress hover={'small'} data={popular[0]} />
            }
            {
              popular[1] &&
              <Dress hover={'small'} data={popular[1]} />
            }
            {
              popular[2] &&
              <Dress hover={'small'} data={popular[2]} />
            }
            {
              popular[3] &&
              <Dress hover={'small'} className={"blcok sm:hidden md:block"} data={popular[3]} />
            }
            {
              popular[4] &&
              <Dress hover={'small'} className={"hidden lg:block"} data={popular[4]} />
            }
          </div>
        </div>
      }

      {/* On Sale */}
      {
        sale.length > 0 &&
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
            {
              sale[0] &&
              <Dress hover={'small'} data={sale[0]} />
            }
            {
              sale[1] &&
              <Dress hover={'small'} data={sale[1]} />
            }
            {
              sale[2] &&
              <Dress hover={'small'} data={sale[2]} />
            }
            {
              sale[3] &&
              <Dress hover={'small'} className={"blcok sm:hidden md:block"} data={sale[3]} />
            }
            {
              sale[4] &&
              <Dress hover={'small'} className={"hidden lg:block"} data={sale[4]} />
            }
          </div>
        </div>
      }

      {/* Dress makers */}
      {
        dressmakers.length > 0 &&
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
            {
              dressmakers[0] &&
              <Dressmaker data={dressmakers[0]} />
            }
            {
              dressmakers[1] &&
              <Dressmaker data={dressmakers[1]} />
            }
            {
              dressmakers[2] &&
              <Dressmaker data={dressmakers[2]} />
            }
            {
              dressmakers[3] &&
              <Dressmaker data={dressmakers[3]} className={"blcok sm:hidden md:block"} />
            }
            {
              dressmakers[4] &&
              <Dressmaker data={dressmakers[4]} className={"hidden lg:block"} />
            }
          </div>
        </div>
      }

      {/* Blogs */}
      {
        blogs.length > 0 &&
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
            {
              blogs[0] &&
              <Blog data={blogs[0]}/>
            }
            {
              blogs[1] &&
              <Blog data={blogs[1]}/>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Index
