import React, { useContext, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

import DressComp from '../components/Dress';
import Popup from '../components/Popup';

const image1 = require('../assets/images/leftSmallImage.png');
const image2 = require('../assets/images/leftBig.png');

function Dress() {
  const { t } = useContext(AppContext);
  const [stars, setStars] = useState(Array.from({ length: 4 }));
  const [freeStars, setFreeStars] = useState(Array.from({ length: 1 }));
  const [inStock, setInStock] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="dress-page container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb />
      <div className="dress-page-container flex flex-row justify-between mb-[120px]">
        <div className="dress-page_left w-full md:w-7/10 lg:w-4/5 mr-0 md:mr-[30px]">
          <div className="flex flex-col lg:flex-row">
            <div className="dress-page_left_image w-full lg:w-1/2 flex mr-0 md:mr-[30px]">
              <div className="dress-page_left_image_small-images w-1/5 flex flex-col">
                <img src={image1} alt="" className="rounded mt-[10px] cursor-pointer" />
                <img src={image1} alt="" className="rounded mt-[10px] cursor-pointer" />
                <img src={image1} alt="" className="rounded mt-[10px] cursor-pointer" />
                <img src={image1} alt="" className="rounded mt-[10px] cursor-pointer" />
                <img src={image1} alt="" className="rounded mt-[10px] cursor-pointer" />
              </div>
              <div className="dress-page_left_big-image relative w-4/5 ml-[10px] mt-[10px]">
                <img src={image2} alt="" className="w-full h-full object-cover rounded" />
                <div className="dress-page_left_big-image_discount absolute top-[5px] left-[5px] bg-lybas-red rounded py-[5px] px-[10px] text-sm text-white">
                  50%
                </div>
                <div className="dress-page_left_big-image_like absolute top-[5px] right-[5px] bg-black rounded py-[5px] px-[10px] cursor-pointer">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5001 20.125L10.1105 18.8791C8.4973 17.4257 7.16362 16.1718 6.10946 15.1177C5.05529 14.0635 4.21675 13.1172 3.59383 12.2786C2.97091 11.4401 2.53567 10.6694 2.2881 9.96663C2.04053 9.26386 1.91675 8.54511 1.91675 7.81038C1.91675 6.309 2.41987 5.05518 3.42612 4.04893C4.43237 3.04268 5.68619 2.53955 7.18758 2.53955C8.01814 2.53955 8.80876 2.71525 9.55946 3.06663C10.3102 3.41802 10.957 3.91316 11.5001 4.55205C12.0431 3.91316 12.69 3.41802 13.4407 3.06663C14.1914 2.71525 14.982 2.53955 15.8126 2.53955C17.314 2.53955 18.5678 3.04268 19.574 4.04893C20.5803 5.05518 21.0834 6.309 21.0834 7.81038C21.0834 8.54511 20.9596 9.26386 20.7121 9.96663C20.4645 10.6694 20.0292 11.4401 19.4063 12.2786C18.7834 13.1172 17.9449 14.0635 16.8907 15.1177C15.8365 16.1718 14.5029 17.4257 12.8897 18.8791L11.5001 20.125ZM11.5001 17.5375C13.0334 16.1639 14.2952 14.9859 15.2855 14.0036C16.2758 13.0213 17.0584 12.1668 17.6334 11.4401C18.2084 10.7133 18.6077 10.0665 18.8313 9.49945C19.0549 8.93243 19.1667 8.36941 19.1667 7.81038C19.1667 6.85205 18.8473 6.05344 18.2084 5.41455C17.5695 4.77566 16.7709 4.45622 15.8126 4.45622C15.0619 4.45622 14.3671 4.66785 13.7282 5.09111C13.0893 5.51438 12.6501 6.05344 12.4105 6.7083H10.5897C10.3501 6.05344 9.91085 5.51438 9.27196 5.09111C8.63307 4.66785 7.93828 4.45622 7.18758 4.45622C6.22925 4.45622 5.43064 4.77566 4.79175 5.41455C4.15286 6.05344 3.83341 6.85205 3.83341 7.81038C3.83341 8.36941 3.94522 8.93243 4.16883 9.49945C4.39244 10.0665 4.79175 10.7133 5.36675 11.4401C5.94175 12.1668 6.72439 13.0213 7.71466 14.0036C8.70494 14.9859 9.96675 16.1639 11.5001 17.5375Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="dress-page_left_content w-full lg:w-1/2 mt-[10px]">
              <h1 className="dress-page_left_content_name text-xl md:text-2xl lg:text-3xl font-semibold">Nike Sportswear Futura Luxe</h1>
              <div className="dress-page_left_content_prices my-1 md:my-2 lg:my-[10px] flex items-center">
                <div className="dress-page_left_content_prices_price font-bold text-xl mr-[10px]">150 {t('tmt')}</div>
                <div className="dress-page_left_content_prices_discount text-lybas-red line-through">350 {t('tmt')}</div>
              </div>
              <div className="dress-page_left_content_rating-stock flex items-center mb-[10px]">
                <span>{t('rating')}: </span>
                <span className="font-semibold mx-[8px]"> 4.0</span>
                <div className="stars flex items-center">
                  {stars.map((e, key) => (
                    <svg
                      className="mr-[2px]"
                      key={key + 100}
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9923 6.10156L9.75008 5.44531L7.82821 1.41406C7.68758 1.13281 7.31258 1.13281 7.17196 1.41406L5.25008 5.46875L1.03133 6.10156C0.726647 6.14844 0.60946 6.54688 0.843835 6.75781L3.91415 9.92188L3.18758 14.3516C3.14071 14.6562 3.4454 14.9141 3.72665 14.7266L7.54696 12.6406L11.3438 14.7266C11.6016 14.8672 11.9298 14.6328 11.8595 14.3516L11.1329 9.92188L14.2032 6.75781C14.3907 6.54688 14.297 6.14844 13.9923 6.10156Z"
                        fill="#FFA645"
                      />
                    </svg>
                  ))}
                  {freeStars.map((e, key) => (
                    <svg
                      className="mr-[2px]"
                      key={key}
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.63289 15.1953C3.44539 15.1953 3.25789 15.1484 3.09383 15.0313C2.78914 14.8203 2.62508 14.4453 2.69539 14.0703L3.3282 10.0859L0.586015 7.25C0.328203 6.99219 0.234453 6.59375 0.35164 6.24219C0.468828 5.89063 0.750078 5.65625 1.10164 5.58594L4.92195 4.97656L6.63289 1.34375C6.79695 1.01563 7.12508 0.804688 7.47664 0.804688C7.85164 0.804688 8.15633 1.01563 8.32039 1.34375L10.0782 4.95313L13.8985 5.5625C14.2501 5.60938 14.5313 5.86719 14.6485 6.21875C14.7657 6.57031 14.672 6.96875 14.4141 7.22656L11.6485 10.0625L12.3048 14.0703C12.3751 14.4453 12.211 14.8203 11.9063 15.0313C11.6251 15.2422 11.2501 15.2656 10.922 15.1016L7.50008 13.2266L4.0782 15.1016C3.93758 15.1719 3.79695 15.1953 3.63289 15.1953ZM1.17195 6.6875L4.00789 9.59375C4.14851 9.73438 4.21883 9.94531 4.17195 10.1563L3.5157 14.2109C3.49226 14.3047 3.56258 14.3516 3.58601 14.375C3.63289 14.4219 3.67976 14.3984 3.7032 14.375L7.21883 12.4531C7.40633 12.3594 7.61726 12.3594 7.80476 12.4531L11.3204 14.3516C11.3438 14.3516 11.3673 14.375 11.4376 14.3516C11.461 14.3281 11.5079 14.2813 11.5079 14.1875L10.8516 10.1094C10.8282 9.89844 10.8751 9.71094 11.0157 9.54688L13.8282 6.64063C13.8985 6.57031 13.8751 6.5 13.8751 6.45313C13.8751 6.42969 13.8282 6.35938 13.7813 6.35938L9.84383 5.75C9.63289 5.72656 9.46883 5.58594 9.37508 5.39844L7.61726 1.69531C7.59383 1.625 7.54695 1.625 7.50008 1.625C7.47664 1.625 7.42976 1.64844 7.38289 1.69531L5.62508 5.42188C5.53133 5.60938 5.36726 5.75 5.15633 5.77344L1.24227 6.40625C1.17195 6.40625 1.14852 6.47656 1.14852 6.5C1.12508 6.52344 1.10164 6.61719 1.17195 6.6875Z"
                        fill="#FFA645"
                      />
                    </svg>
                  ))}
                </div>
                <div className="stock ml-[20px] flex items-center">
                  <svg className="mr-[10px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_418_21362)">
                      <path
                        d="M10.8975 19.625C5.37152 19.625 0.918213 15.3125 0.918213 10C0.918213 4.6875 5.37152 0.40625 10.8975 0.40625C16.4235 0.40625 20.9093 4.6875 20.9093 10C20.9093 15.3125 16.4235 19.625 10.8975 19.625ZM10.8975 1.5C6.02164 1.5 2.05592 5.3125 2.05592 10C2.05592 14.6875 6.02164 18.5313 10.8975 18.5313C15.7734 18.5313 19.7716 14.6875 19.7716 10C19.7716 5.3125 15.7734 1.5 10.8975 1.5Z"
                        fill="#1A54EB"
                      />
                      <path
                        d="M9.7923 12.1875C9.56476 12.1875 9.36972 12.125 9.17469 11.9687L7.0293 9.96875C6.80176 9.75 6.80176 9.40625 7.0293 9.1875C7.25684 8.96875 7.6144 8.96875 7.84195 9.1875L9.7923 11.0312L13.953 7.15625C14.1806 6.9375 14.5382 6.9375 14.7657 7.15625C14.9932 7.375 14.9932 7.71875 14.7657 7.9375L10.4424 12C10.2149 12.125 9.98733 12.1875 9.7923 12.1875Z"
                        fill="#1A54EB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_418_21362">
                        <rect width="20.7595" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="font-semibold">{t('inStock')}</span>
                </div>
              </div>
              <div className="dress-page_left_content_velayat">
                <span>{t('ashgabat')} </span>
                <span className="text-lybas-red">( {t('_2_5days')} )</span>
              </div>
              <div className="dress-page_left_content_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
              <div className="dress-page_left_content_fabric-name text-sm text-lybas-gray mb-[10px]">{t('fabricName')}:</div>
              <div className="dress-page_left_content_fabrics flex flex-wrap mb-[15px]">
                <button className="dress-page_left_content_fabrics_fabric mb-1 mr-[12px] py-[6px] px-[12px] rounded-lg border border-lybas-blue text-lybas-blue">
                  Pombarh
                </button>
              </div>
              <div className="dress-page_left_content_size-name text-sm text-lybas-gray mb-[10px]">{t('size')}:</div>
              <div className="dress-page_left_content_sizes flex flex-wrap items-center mb-[15px]">
                <button className="dress-page_left_content_sizes_size mr-[12px] mb-1 py-[6px] px-[12px] rounded-lg border border-lybas-light-gray">
                  M(38)
                </button>
                <button className="dress-page_left_content_sizes_size mr-[12px] mb-1 py-[6px] px-[12px] rounded-lg border border-lybas-light-gray">
                  M(38)
                </button>
                <button className="dress-page_left_content_sizes_size mr-[12px] mb-1 py-[6px] px-[12px] rounded-lg border border-lybas-blue text-lybas-blue">
                  M(38)
                </button>
                <button className="dress-page_left_content_sizes_size mr-[12px] mb-1 py-[6px] px-[12px] rounded-lg border border-lybas-light-gray">
                  M(38)
                </button>
                <button className="dress-page_left_content_sizes_size mr-[12px] mb-1 py-[6px] px-[12px] rounded-lg border border-lybas-light-gray">
                  M(38)
                </button>
              </div>
              <div className="dress-page_left_content_color-name text-sm text-lybas-gray mb-[10px]">{t('color')}:</div>
              <div className="dress-page_left_content_colors flex items-center">
                <button className="dress-page_left_content_colors_color flex items-center justify-center rounded-full h-[30px] w-[30px] mr-[6px] border border-lybas-blue">
                  <span className="w-[22px] h-[22px] rounded-full" style={{ background: 'red' }}></span>
                </button>
                <button className="dress-page_left_content_colors_color flex items-center justify-center rounded-full h-[30px] w-[30px] mr-[6px] border border-lybas-light-gray">
                  <span className="w-[22px] h-[22px] rounded-full" style={{ background: 'blue' }}></span>
                </button>
                <button className="dress-page_left_content_colors_color flex items-center justify-center rounded-full h-[30px] w-[30px] mr-[6px] border border-lybas-light-gray">
                  <span className="w-[22px] h-[22px] rounded-full" style={{ background: 'green' }}></span>
                </button>
              </div>
              <div className="dress-page_left_content_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
              <div className="dress-page_left_content _definition">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta maiores nulla pariatur ducimus eaque et culpa! Quam veniam
                esse reprehenderit, accusantium corrupti fugiat magnam doloremque facilis cupiditate. Optio, architecto accusantium?
              </div>
            </div>
          </div>
          <div className="dress-page_left_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
          <div className="comment-similars flex flex-col-reverse md:block">
            <div className="dress-page_left_comments w-full mt-5 md:mt-0">
              <div className="dress-page_left_comments_header flex items-center justify-between mb-[20px]">
                <span className="text-xl font-semibold">{t('comments')}</span>
                <Link to={'/'} className="flex items-center text-lybas-blue">
                  <span className="hidden md:inline">{t('viewAll')}</span>
                  <svg className="ml-[8px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
                  </svg>
                </Link>
              </div>
              <div className="dress-page_left_comments_comment flex flex-col md:flex-row items-start p-3 md:p-[25px] mb-[15px] bg-lybas-light-gray rounded-lg">
                <div className='flex'>
                  <div className="dress-page_left_comments_comment_image mr-[15px]">
                    <img src={image1} alt="" className="min-w-[60px] min-h-[60px] max-h-[60px] rounded-full" />
                  </div>
                  <div className="dress-page_left_comments_comment_content">
                    <div className="dress-page_left_comments_comment_content_name font-semibold">Aygul Sulyanova</div>
                    <div className="dress-page_left_comments_comment_content_rate my-[10px]">
                      <div className="stars flex items-center">
                        {stars.map((e, key) => (
                          <svg
                            className="mr-[2px]"
                            key={key + 100}
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9923 6.10156L9.75008 5.44531L7.82821 1.41406C7.68758 1.13281 7.31258 1.13281 7.17196 1.41406L5.25008 5.46875L1.03133 6.10156C0.726647 6.14844 0.60946 6.54688 0.843835 6.75781L3.91415 9.92188L3.18758 14.3516C3.14071 14.6562 3.4454 14.9141 3.72665 14.7266L7.54696 12.6406L11.3438 14.7266C11.6016 14.8672 11.9298 14.6328 11.8595 14.3516L11.1329 9.92188L14.2032 6.75781C14.3907 6.54688 14.297 6.14844 13.9923 6.10156Z"
                              fill="#FFA645"
                            />
                          </svg>
                        ))}
                        {freeStars.map((e, key) => (
                          <svg
                            className="mr-[2px]"
                            key={key}
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.63289 15.1953C3.44539 15.1953 3.25789 15.1484 3.09383 15.0313C2.78914 14.8203 2.62508 14.4453 2.69539 14.0703L3.3282 10.0859L0.586015 7.25C0.328203 6.99219 0.234453 6.59375 0.35164 6.24219C0.468828 5.89063 0.750078 5.65625 1.10164 5.58594L4.92195 4.97656L6.63289 1.34375C6.79695 1.01563 7.12508 0.804688 7.47664 0.804688C7.85164 0.804688 8.15633 1.01563 8.32039 1.34375L10.0782 4.95313L13.8985 5.5625C14.2501 5.60938 14.5313 5.86719 14.6485 6.21875C14.7657 6.57031 14.672 6.96875 14.4141 7.22656L11.6485 10.0625L12.3048 14.0703C12.3751 14.4453 12.211 14.8203 11.9063 15.0313C11.6251 15.2422 11.2501 15.2656 10.922 15.1016L7.50008 13.2266L4.0782 15.1016C3.93758 15.1719 3.79695 15.1953 3.63289 15.1953ZM1.17195 6.6875L4.00789 9.59375C4.14851 9.73438 4.21883 9.94531 4.17195 10.1563L3.5157 14.2109C3.49226 14.3047 3.56258 14.3516 3.58601 14.375C3.63289 14.4219 3.67976 14.3984 3.7032 14.375L7.21883 12.4531C7.40633 12.3594 7.61726 12.3594 7.80476 12.4531L11.3204 14.3516C11.3438 14.3516 11.3673 14.375 11.4376 14.3516C11.461 14.3281 11.5079 14.2813 11.5079 14.1875L10.8516 10.1094C10.8282 9.89844 10.8751 9.71094 11.0157 9.54688L13.8282 6.64063C13.8985 6.57031 13.8751 6.5 13.8751 6.45313C13.8751 6.42969 13.8282 6.35938 13.7813 6.35938L9.84383 5.75C9.63289 5.72656 9.46883 5.58594 9.37508 5.39844L7.61726 1.69531C7.59383 1.625 7.54695 1.625 7.50008 1.625C7.47664 1.625 7.42976 1.64844 7.38289 1.69531L5.62508 5.42188C5.53133 5.60938 5.36726 5.75 5.15633 5.77344L1.24227 6.40625C1.17195 6.40625 1.14852 6.47656 1.14852 6.5C1.12508 6.52344 1.10164 6.61719 1.17195 6.6875Z"
                              fill="#FFA645"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="dress-page_left_comments_comment_content_definition mb-[10px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam praesentium tempore, commodi excepturi quas?
                    </div>
                    <div className="dress-page_left_comments_comment_content_connects flex items-center">
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <div className="more h-[48px] w-[48px] mr-[8px] rounded flex items-center justify-center bg-lybas-gray text-white">
                        <span>+5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dress-page_left_comments_comment_time w-full md:min-w-fit text-right mt-4 md:mt-0">2 hours ago</div>
              </div>
              <div className="dress-page_left_comments_comment flex flex-col md:flex-row items-start p-3 md:p-[25px] mb-[15px] bg-lybas-light-gray rounded-lg">
                <div className='flex'>
                  <div className="dress-page_left_comments_comment_image mr-[15px]">
                    <img src={image1} alt="" className="min-w-[60px] min-h-[60px] max-h-[60px] rounded-full" />
                  </div>
                  <div className="dress-page_left_comments_comment_content">
                    <div className="dress-page_left_comments_comment_content_name font-semibold">Aygul Sulyanova</div>
                    <div className="dress-page_left_comments_comment_content_rate my-[10px]">
                      <div className="stars flex items-center">
                        {stars.map((e, key) => (
                          <svg
                            className="mr-[2px]"
                            key={key + 100}
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9923 6.10156L9.75008 5.44531L7.82821 1.41406C7.68758 1.13281 7.31258 1.13281 7.17196 1.41406L5.25008 5.46875L1.03133 6.10156C0.726647 6.14844 0.60946 6.54688 0.843835 6.75781L3.91415 9.92188L3.18758 14.3516C3.14071 14.6562 3.4454 14.9141 3.72665 14.7266L7.54696 12.6406L11.3438 14.7266C11.6016 14.8672 11.9298 14.6328 11.8595 14.3516L11.1329 9.92188L14.2032 6.75781C14.3907 6.54688 14.297 6.14844 13.9923 6.10156Z"
                              fill="#FFA645"
                            />
                          </svg>
                        ))}
                        {freeStars.map((e, key) => (
                          <svg
                            className="mr-[2px]"
                            key={key}
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.63289 15.1953C3.44539 15.1953 3.25789 15.1484 3.09383 15.0313C2.78914 14.8203 2.62508 14.4453 2.69539 14.0703L3.3282 10.0859L0.586015 7.25C0.328203 6.99219 0.234453 6.59375 0.35164 6.24219C0.468828 5.89063 0.750078 5.65625 1.10164 5.58594L4.92195 4.97656L6.63289 1.34375C6.79695 1.01563 7.12508 0.804688 7.47664 0.804688C7.85164 0.804688 8.15633 1.01563 8.32039 1.34375L10.0782 4.95313L13.8985 5.5625C14.2501 5.60938 14.5313 5.86719 14.6485 6.21875C14.7657 6.57031 14.672 6.96875 14.4141 7.22656L11.6485 10.0625L12.3048 14.0703C12.3751 14.4453 12.211 14.8203 11.9063 15.0313C11.6251 15.2422 11.2501 15.2656 10.922 15.1016L7.50008 13.2266L4.0782 15.1016C3.93758 15.1719 3.79695 15.1953 3.63289 15.1953ZM1.17195 6.6875L4.00789 9.59375C4.14851 9.73438 4.21883 9.94531 4.17195 10.1563L3.5157 14.2109C3.49226 14.3047 3.56258 14.3516 3.58601 14.375C3.63289 14.4219 3.67976 14.3984 3.7032 14.375L7.21883 12.4531C7.40633 12.3594 7.61726 12.3594 7.80476 12.4531L11.3204 14.3516C11.3438 14.3516 11.3673 14.375 11.4376 14.3516C11.461 14.3281 11.5079 14.2813 11.5079 14.1875L10.8516 10.1094C10.8282 9.89844 10.8751 9.71094 11.0157 9.54688L13.8282 6.64063C13.8985 6.57031 13.8751 6.5 13.8751 6.45313C13.8751 6.42969 13.8282 6.35938 13.7813 6.35938L9.84383 5.75C9.63289 5.72656 9.46883 5.58594 9.37508 5.39844L7.61726 1.69531C7.59383 1.625 7.54695 1.625 7.50008 1.625C7.47664 1.625 7.42976 1.64844 7.38289 1.69531L5.62508 5.42188C5.53133 5.60938 5.36726 5.75 5.15633 5.77344L1.24227 6.40625C1.17195 6.40625 1.14852 6.47656 1.14852 6.5C1.12508 6.52344 1.10164 6.61719 1.17195 6.6875Z"
                              fill="#FFA645"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="dress-page_left_comments_comment_content_definition mb-[10px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam praesentium tempore, commodi excepturi quas?
                    </div>
                    <div className="dress-page_left_comments_comment_content_connects flex items-center">
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <div className="more h-[48px] w-[48px] mr-[8px] rounded flex items-center justify-center bg-lybas-gray text-white">
                        <span>+5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dress-page_left_comments_comment_time w-full md:min-w-fit text-right mt-4 md:mt-0">2 hours ago</div>
              </div>
              <div className="dress-page_left_comments_comment flex flex-col md:flex-row items-start p-3 md:p-[25px] mb-[15px] bg-lybas-light-gray rounded-lg">
                <div className='flex'>
                  <div className="dress-page_left_comments_comment_image mr-[15px]">
                    <img src={image1} alt="" className="min-w-[60px] min-h-[60px] max-h-[60px] rounded-full" />
                  </div>
                  <div className="dress-page_left_comments_comment_content">
                    <div className="dress-page_left_comments_comment_content_name font-semibold">Aygul Sulyanova</div>
                    <div className="dress-page_left_comments_comment_content_rate my-[10px]">
                      <div className="stars flex items-center">
                        {stars.map((e, key) => (
                          <svg
                            className="mr-[2px]"
                            key={key + 100}
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9923 6.10156L9.75008 5.44531L7.82821 1.41406C7.68758 1.13281 7.31258 1.13281 7.17196 1.41406L5.25008 5.46875L1.03133 6.10156C0.726647 6.14844 0.60946 6.54688 0.843835 6.75781L3.91415 9.92188L3.18758 14.3516C3.14071 14.6562 3.4454 14.9141 3.72665 14.7266L7.54696 12.6406L11.3438 14.7266C11.6016 14.8672 11.9298 14.6328 11.8595 14.3516L11.1329 9.92188L14.2032 6.75781C14.3907 6.54688 14.297 6.14844 13.9923 6.10156Z"
                              fill="#FFA645"
                            />
                          </svg>
                        ))}
                        {freeStars.map((e, key) => (
                          <svg
                            className="mr-[2px]"
                            key={key}
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.63289 15.1953C3.44539 15.1953 3.25789 15.1484 3.09383 15.0313C2.78914 14.8203 2.62508 14.4453 2.69539 14.0703L3.3282 10.0859L0.586015 7.25C0.328203 6.99219 0.234453 6.59375 0.35164 6.24219C0.468828 5.89063 0.750078 5.65625 1.10164 5.58594L4.92195 4.97656L6.63289 1.34375C6.79695 1.01563 7.12508 0.804688 7.47664 0.804688C7.85164 0.804688 8.15633 1.01563 8.32039 1.34375L10.0782 4.95313L13.8985 5.5625C14.2501 5.60938 14.5313 5.86719 14.6485 6.21875C14.7657 6.57031 14.672 6.96875 14.4141 7.22656L11.6485 10.0625L12.3048 14.0703C12.3751 14.4453 12.211 14.8203 11.9063 15.0313C11.6251 15.2422 11.2501 15.2656 10.922 15.1016L7.50008 13.2266L4.0782 15.1016C3.93758 15.1719 3.79695 15.1953 3.63289 15.1953ZM1.17195 6.6875L4.00789 9.59375C4.14851 9.73438 4.21883 9.94531 4.17195 10.1563L3.5157 14.2109C3.49226 14.3047 3.56258 14.3516 3.58601 14.375C3.63289 14.4219 3.67976 14.3984 3.7032 14.375L7.21883 12.4531C7.40633 12.3594 7.61726 12.3594 7.80476 12.4531L11.3204 14.3516C11.3438 14.3516 11.3673 14.375 11.4376 14.3516C11.461 14.3281 11.5079 14.2813 11.5079 14.1875L10.8516 10.1094C10.8282 9.89844 10.8751 9.71094 11.0157 9.54688L13.8282 6.64063C13.8985 6.57031 13.8751 6.5 13.8751 6.45313C13.8751 6.42969 13.8282 6.35938 13.7813 6.35938L9.84383 5.75C9.63289 5.72656 9.46883 5.58594 9.37508 5.39844L7.61726 1.69531C7.59383 1.625 7.54695 1.625 7.50008 1.625C7.47664 1.625 7.42976 1.64844 7.38289 1.69531L5.62508 5.42188C5.53133 5.60938 5.36726 5.75 5.15633 5.77344L1.24227 6.40625C1.17195 6.40625 1.14852 6.47656 1.14852 6.5C1.12508 6.52344 1.10164 6.61719 1.17195 6.6875Z"
                              fill="#FFA645"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="dress-page_left_comments_comment_content_definition mb-[10px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam praesentium tempore, commodi excepturi quas?
                    </div>
                    <div className="dress-page_left_comments_comment_content_connects flex items-center">
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <img src={image1} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                      <div className="more h-[48px] w-[48px] mr-[8px] rounded flex items-center justify-center bg-lybas-gray text-white">
                        <span>+5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dress-page_left_comments_comment_time w-full md:min-w-fit text-right mt-4 md:mt-0">2 hours ago</div>
              </div>
            </div>
            <div className="dress-page_left_similar-dresses">
              <div className="dress-page_left_similar-dresses_header flex items-center justify-between my-[25px]">
                <span className="text-xl font-semibold">{t('similarDresses')}</span>
                <Link to={'/'} className="flex items-center text-lybas-blue">
                  <span className="hidden md:inline">{t('viewAll')}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
                  </svg>
                </Link>
              </div>
              <div className="dress-page_left_similar-dresses_dresses grid grid-cols-2 lg:grid-cols-4 gap-4">
                <DressComp hover="on_sale" />
                <DressComp hover="on_sale" />
                <DressComp hover="on_sale" />
                <DressComp hover="on_sale" />
              </div>
            </div>
          </div>
        </div>
        <div className="dress-page_right md:w-3/10 lg:w-1/5 hidden md:block">
          {/* Add card */}
          <div className="dress-page_right_add-card p-[20px] mb-[20px] rounded-lg shadow-lybas-1">
            <div className="dress-page_right_add-card_name text-lg font-semibold">{t('addToCard')}</div>
            <div className="dress-page_right_add-card_number my-[15px] flex flex-wrap justify-between items-center">
              <span className="text-lybas-gray">{t('numbers')}:</span>
              <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg">
                <button className="h-full px-[8px] group border-r border-r-lybas-light-gray">
                  <svg
                    className="fill-lybas-gray group-hover:fill-lybas-blue"
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                  </svg>
                </button>
                <span className="px-[20px] text-semibold">0</span>
                <button className="h-full px-[8px] group border-l border-l-lybas-light-gray">
                  <svg
                    className="fill-lybas-gray group-hover:fill-lybas-blue"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="dress-page_right_add-card_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
            <div className="dress-page_right_add-card_total-price mb-[20px] flex justify-between items-center">
              <span className="text-lybas-gray">{t('total')}:</span>
              <span className="font-semibold">0{t('tmt')}</span>
            </div>
            <button
              className={
                'dress-page_right_add-card_order-button w-full py-[10px] mb-[15px] rounded-lg ' +
                (inStock ? 'bg-lybas-blue text-white' : 'bg-lybas-light-gray text-lybas-gray cursor-not-allowed')
              }
            >
              {t('order')}
            </button>
            <button className="dress-page_right_add-checkout-button w-full py-[10px] shadow-lybas-1 text-lybas-blue rounded-lg">
              {t('checkout')}
            </button>
          </div>

          {/* Seller box */}
          <div className="dress-page_right_seller-card p-[20px] mb-[20px] rounded-lg shadow-lybas-1">
            <div className="text-lg font-semibold pb-3">{t('seller')}</div>
            <div className="dress-page_right_seller-card_location flex">
              <svg className="mr-4 h-full" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="70" height="70" rx="8" fill="#64748B" />
                <path
                  d="M19.6667 23.5001V19.6667H50.3333V23.5001H19.6667ZM19.6667 50.3334V38.8334H17.75V35.0001L19.6667 25.4167H50.3333L52.25 35.0001V38.8334H50.3333V50.3334H46.5V38.8334H38.8333V50.3334H19.6667ZM23.5 46.5001H35V38.8334H23.5V46.5001Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-semibold">Kümuş.G</span>
                <span className="text-lybas-gray">105 Types of dresses</span>
              </div>
            </div>
            <div className="dress-page_right_seller-card_velayat flex items-center font-semibold my-[20px]">
              <svg className="mr-[10px]" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                  fill="#1A54EB"
                />
              </svg>
              <span>{t('ashgabat')}</span>
            </div>
            <button className="dress-page_right_seller-card_more-button lybas-blue-button mb-[15px]">{t('more')}</button>
            <button
              onClick={() => setPopupOpen(true)}
              className={
                'dress-page_right_seller-card_remind-button lybas-button ' +
                (inStock ? 'bg-lybas-light-gray text-lybas-gray cursor-not-allowed' : 'bg-lybas-blue text-white')
              }
            >
              {t('remindMe')}
            </button>
          </div>
        </div>
      </div>
      <Popup open={popupOpen} setOpen={setPopupOpen} />
    </div>
  );
}

export default Dress;
