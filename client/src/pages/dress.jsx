import React,{useContext} from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { AppContext } from '../App';

const image1 = require('../assets/images/leftSmallImage.png')
const image2 = require('../assets/images/leftBig.png')

function dress() {
  const {t} = useContext(AppContext);
  return (
    <div className='dress-page container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb />
      <div className="dress-page_left w-4/5">
        <div className="dress-page_left_image w-1/2 flex">
          <div className="dress-page_left_image_small-images w-1/5 flex flex-col">
            <img src={image1} alt="" className='rounded mt-[10px] cursor-pointer' />
            <img src={image1} alt="" className='rounded mt-[10px] cursor-pointer' />
            <img src={image1} alt="" className='rounded mt-[10px] cursor-pointer' />
            <img src={image1} alt="" className='rounded mt-[10px] cursor-pointer' />
            <img src={image1} alt="" className='rounded mt-[10px] cursor-pointer' />
          </div>
          <div className="dress-page_left_big-image relative w-4/5 ml-[10px] mt-[10px]">
            <img src={image2} alt="" className='w-full h-full object-cover rounded' />
            <div className="dress-page_left_big-image_discount absolute top-[5px] left-[5px] bg-lybas-red rounded py-[5px] px-[10px] text-sm text-white">50%</div>
            <div className="dress-page_left_big-image_like absolute top-[5px] right-[5px] bg-black rounded py-[5px] px-[10px] cursor-pointer">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5001 20.125L10.1105 18.8791C8.4973 17.4257 7.16362 16.1718 6.10946 15.1177C5.05529 14.0635 4.21675 13.1172 3.59383 12.2786C2.97091 11.4401 2.53567 10.6694 2.2881 9.96663C2.04053 9.26386 1.91675 8.54511 1.91675 7.81038C1.91675 6.309 2.41987 5.05518 3.42612 4.04893C4.43237 3.04268 5.68619 2.53955 7.18758 2.53955C8.01814 2.53955 8.80876 2.71525 9.55946 3.06663C10.3102 3.41802 10.957 3.91316 11.5001 4.55205C12.0431 3.91316 12.69 3.41802 13.4407 3.06663C14.1914 2.71525 14.982 2.53955 15.8126 2.53955C17.314 2.53955 18.5678 3.04268 19.574 4.04893C20.5803 5.05518 21.0834 6.309 21.0834 7.81038C21.0834 8.54511 20.9596 9.26386 20.7121 9.96663C20.4645 10.6694 20.0292 11.4401 19.4063 12.2786C18.7834 13.1172 17.9449 14.0635 16.8907 15.1177C15.8365 16.1718 14.5029 17.4257 12.8897 18.8791L11.5001 20.125ZM11.5001 17.5375C13.0334 16.1639 14.2952 14.9859 15.2855 14.0036C16.2758 13.0213 17.0584 12.1668 17.6334 11.4401C18.2084 10.7133 18.6077 10.0665 18.8313 9.49945C19.0549 8.93243 19.1667 8.36941 19.1667 7.81038C19.1667 6.85205 18.8473 6.05344 18.2084 5.41455C17.5695 4.77566 16.7709 4.45622 15.8126 4.45622C15.0619 4.45622 14.3671 4.66785 13.7282 5.09111C13.0893 5.51438 12.6501 6.05344 12.4105 6.7083H10.5897C10.3501 6.05344 9.91085 5.51438 9.27196 5.09111C8.63307 4.66785 7.93828 4.45622 7.18758 4.45622C6.22925 4.45622 5.43064 4.77566 4.79175 5.41455C4.15286 6.05344 3.83341 6.85205 3.83341 7.81038C3.83341 8.36941 3.94522 8.93243 4.16883 9.49945C4.39244 10.0665 4.79175 10.7133 5.36675 11.4401C5.94175 12.1668 6.72439 13.0213 7.71466 14.0036C8.70494 14.9859 9.96675 16.1639 11.5001 17.5375Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div className="dress-page_left_content w-1/2">
          <h1 className="dress-page_left_content_name">Nike Sportswear Futura Luxe</h1>
          <div className="dress-page_left_content_prices">
            <div className="dress-page_left_content_prices_price">150 {t('tmt')}</div>
            <div className="dress-page_left_content_prices_discount">350 {t('tmt')}</div>
          </div>
          <div className="dress-page_left_content_rating-stock"></div>
        </div>
      </div>
      <div className="dress-page_right w-1/5"></div>
    </div>
  );
}

export default dress;
