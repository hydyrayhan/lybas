import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom';

const dressImage = require('../assets/images/dressImage.png')

function Dress({ hover }) {
  const { t } = useContext(AppContext);
  const [stars, setStars] = useState(Array.from({ length: 3 }));
  const [starsFree, setStarsFree] = useState(Array.from({ length: 2 }));

  const dynamic_add_button_hover = {
    recommended: 'flex items-center bg-lybas-blue py-[10px] px-[35px] text-white rounded transition-opacity duration-300 opacity-0 group-hover:opacity-[1]',
    most_popular: 'hidden',
    on_sale: 'flex items-center bg-lybas-blue py-[5px] px-[15px] text-white rounded transition-opacity duration-300 opacity-0 group-hover:opacity-[1] text-base font-medium',
  }

  const size_style = {
    recommended: {
      name: 'dress-card_name text-lg my-2 font-semibold',
      count: 'dress-card_rate_count mx-2 text-lg',
      location: 'dress-card_rate_city flex items-center text-lybas-gray text-lg',
      discount: 'hidden',
      go_link_hover: 'dress-card_custom-buttons_link flex items-center',
      like: 'hidden',
      discount_top: 'hidden',
      price: 'dress-card_price font-bold text-3xl my-1',
    },
    most_popular: {
      name: 'dress-card_name text-base my-2 font-semibold',
      count: 'dress-card_rate_count mx-2 text-sm',
      location: 'dress-card_rate_city flex items-center text-lybas-gray text-sm',
      discount: 'mt-2 text-lybas-red line-through',
      go_link_hover: 'dress-card_custom-buttons_link flex items-center transition-opacity duration-300 opacity-0 group-hover:opacity-[1]',
      like: 'absolute z-10 top-[5px] bg-black right-[5px] p-[5px] rounded',
      discount_top: 'absolute z-10 top-[5px] left-[5px] bg-lybas-red text-white rounded py-[7px] px-[12px] text-sm',
      price: 'dress-card_price font-bold text-xl my-1',
    },
    on_sale: {
      name: 'dress-card_name text-base my-2 font-semibold',
      count: 'dress-card_rate_count mx-2 text-sm',
      location: 'dress-card_rate_city flex items-center text-lybas-gray text-sm',
      discount: 'mt-2 text-lybas-red line-through',
      go_link_hover: 'dress-card_custom-buttons_link flex items-center transition-opacity duration-300 opacity-0 group-hover:opacity-[1]',
      like: 'absolute z-10 top-[5px] bg-black right-[5px] p-[5px] rounded',
      discount_top: 'absolute z-10 top-[5px] left-[5px] bg-lybas-red text-white rounded py-[7px] px-[12px] text-sm',
      price: 'dress-card_price font-bold text-xl my-1 flex justify-between items-center w-full',
    },
  }

  return (
    <div className='dress-card group relative'>
      <Link to={'/dresses/1'}>
        <div className="dress-card_image"><img className='w-full object-cover' src={dressImage} alt="" /></div>
        <div className={size_style[hover].name}>Nike sportswear Futura Luxe</div>
        <div className="dress-card_rate flex items-center">
          {
            stars.map((e, index) => (
              <svg className='mr-1' key={index} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.925 5.475L10.4 4.775L8.34996 0.475C8.19996 0.175 7.79996 0.175 7.64996 0.475L5.59996 4.8L1.09996 5.475C0.77496 5.525 0.64996 5.95 0.89996 6.175L4.17496 9.55L3.39996 14.275C3.34996 14.6 3.67496 14.875 3.97496 14.675L8.04996 12.45L12.1 14.675C12.375 14.825 12.725 14.575 12.65 14.275L11.875 9.55L15.15 6.175C15.35 5.95 15.25 5.525 14.925 5.475Z" fill="#FFA645" />
              </svg>
            ))
          }
          {
            starsFree.map((e, index) => (
              <svg className='mr-1' key={index} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.87499 16.175C3.67499 16.175 3.47499 16.125 3.29999 16C2.97499 15.775 2.79999 15.375 2.87499 14.975L3.54999 10.725L0.624985 7.69995C0.349985 7.42495 0.249985 6.99995 0.374985 6.62495C0.499985 6.24995 0.799985 5.99995 1.17499 5.92495L5.24999 5.27495L7.07499 1.39995C7.24999 1.04995 7.59999 0.824951 7.97499 0.824951C8.37498 0.824951 8.69999 1.04995 8.87498 1.39995L10.75 5.24995L14.825 5.89995C15.2 5.94995 15.5 6.22495 15.625 6.59995C15.75 6.97495 15.65 7.39995 15.375 7.67495L12.425 10.7L13.125 14.975C13.2 15.375 13.025 15.775 12.7 16C12.4 16.225 12 16.25 11.65 16.075L7.99999 14.075L4.34999 16.075C4.19999 16.15 4.04999 16.175 3.87499 16.175ZM1.24999 7.09995L4.27499 10.2C4.42499 10.35 4.49998 10.575 4.44999 10.8L3.74999 15.125C3.72499 15.225 3.79999 15.275 3.82499 15.3C3.87499 15.35 3.92499 15.325 3.94999 15.3L7.69999 13.25C7.89999 13.15 8.12499 13.15 8.32499 13.25L12.075 15.275C12.1 15.275 12.125 15.3 12.2 15.275C12.225 15.25 12.275 15.2 12.275 15.1L11.575 10.75C11.55 10.525 11.6 10.325 11.75 10.15L14.75 7.04995C14.825 6.97495 14.8 6.89995 14.8 6.84995C14.8 6.82495 14.75 6.74995 14.7 6.74995L10.5 6.09995C10.275 6.07495 10.1 5.92495 9.99999 5.72495L8.12499 1.77495C8.09999 1.69995 8.04998 1.69995 7.99999 1.69995C7.97499 1.69995 7.92498 1.72495 7.87499 1.77495L5.99999 5.74995C5.89998 5.94995 5.72499 6.09995 5.49999 6.12495L1.32499 6.79995C1.24999 6.79995 1.22499 6.87495 1.22499 6.89995C1.19999 6.92495 1.17499 7.02495 1.24999 7.09995Z" fill="#FFA645" />
              </svg>
            ))
          }
          <span className={size_style[hover].count}>(218)</span>
          <span className={size_style[hover].location}><span className='dress-card_rate_city_dot w-[5px] h-[5px] bg-lybas-gray block rounded mr-1'></span>Ashgabat</span>
        </div>
        <div className={size_style[hover].discount}>550{t('tmt')}</div>
      </Link>
      <div className={size_style[hover].price}>
        <span>130 {t('tmt')}</span>
        {
          hover === 'on_sale' ?
            <button className={dynamic_add_button_hover[hover]}>
              <svg className='mr-2' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.16667 18.3334C1.70833 18.3334 1.31597 18.1702 0.989583 17.8438C0.663194 17.5174 0.5 17.125 0.5 16.6667V6.66671C0.5 6.20837 0.663194 5.81601 0.989583 5.48962C1.31597 5.16324 1.70833 5.00004 2.16667 5.00004H3.83333C3.83333 3.84726 4.23958 2.86462 5.05208 2.05212C5.86458 1.23962 6.84722 0.833374 8 0.833374C9.15278 0.833374 10.1354 1.23962 10.9479 2.05212C11.7604 2.86462 12.1667 3.84726 12.1667 5.00004H13.8333C14.2917 5.00004 14.684 5.16324 15.0104 5.48962C15.3368 5.81601 15.5 6.20837 15.5 6.66671V16.6667C15.5 17.125 15.3368 17.5174 15.0104 17.8438C14.684 18.1702 14.2917 18.3334 13.8333 18.3334H2.16667ZM8 11.6667C9.15278 11.6667 10.1354 11.2605 10.9479 10.448C11.7604 9.63546 12.1667 8.65282 12.1667 7.50004H10.5C10.5 8.19449 10.2569 8.78476 9.77083 9.27087C9.28472 9.75699 8.69444 10 8 10C7.30556 10 6.71528 9.75699 6.22917 9.27087C5.74306 8.78476 5.5 8.19449 5.5 7.50004H3.83333C3.83333 8.65282 4.23958 9.63546 5.05208 10.448C5.86458 11.2605 6.84722 11.6667 8 11.6667ZM5.5 5.00004H10.5C10.5 4.3056 10.2569 3.71532 9.77083 3.22921C9.28472 2.7431 8.69444 2.50004 8 2.50004C7.30556 2.50004 6.71528 2.7431 6.22917 3.22921C5.74306 3.71532 5.5 4.3056 5.5 5.00004Z" fill="white" />
              </svg>
              {t('add')}
            </button> : ''
        }
      </div>
      <div className="dress-card_custom-buttons flex items-center justify-between">
        <Link to="/" className={size_style[hover].go_link_hover}>
          <svg className='mr-2' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66667 2.99996V0.666626H20.3333V2.99996H1.66667ZM1.66667 19.3333V12.3333H0.5V9.99996L1.66667 4.16663H20.3333L21.5 9.99996V12.3333H20.3333V19.3333H18V12.3333H13.3333V19.3333H1.66667ZM4 17H11V12.3333H4V17Z" fill="#64748B" />
          </svg>
          <span className='underline underline-offset-1'>
            {t('goto')} Kumush{t('s')} {t('shop')}
          </span>
        </Link>
        {
          hover !== 'on_sale' ?
            <button className={dynamic_add_button_hover[hover]}>
              <svg className='mr-2' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.16667 18.3334C1.70833 18.3334 1.31597 18.1702 0.989583 17.8438C0.663194 17.5174 0.5 17.125 0.5 16.6667V6.66671C0.5 6.20837 0.663194 5.81601 0.989583 5.48962C1.31597 5.16324 1.70833 5.00004 2.16667 5.00004H3.83333C3.83333 3.84726 4.23958 2.86462 5.05208 2.05212C5.86458 1.23962 6.84722 0.833374 8 0.833374C9.15278 0.833374 10.1354 1.23962 10.9479 2.05212C11.7604 2.86462 12.1667 3.84726 12.1667 5.00004H13.8333C14.2917 5.00004 14.684 5.16324 15.0104 5.48962C15.3368 5.81601 15.5 6.20837 15.5 6.66671V16.6667C15.5 17.125 15.3368 17.5174 15.0104 17.8438C14.684 18.1702 14.2917 18.3334 13.8333 18.3334H2.16667ZM8 11.6667C9.15278 11.6667 10.1354 11.2605 10.9479 10.448C11.7604 9.63546 12.1667 8.65282 12.1667 7.50004H10.5C10.5 8.19449 10.2569 8.78476 9.77083 9.27087C9.28472 9.75699 8.69444 10 8 10C7.30556 10 6.71528 9.75699 6.22917 9.27087C5.74306 8.78476 5.5 8.19449 5.5 7.50004H3.83333C3.83333 8.65282 4.23958 9.63546 5.05208 10.448C5.86458 11.2605 6.84722 11.6667 8 11.6667ZM5.5 5.00004H10.5C10.5 4.3056 10.2569 3.71532 9.77083 3.22921C9.28472 2.7431 8.69444 2.50004 8 2.50004C7.30556 2.50004 6.71528 2.7431 6.22917 3.22921C5.74306 3.71532 5.5 4.3056 5.5 5.00004Z" fill="white" />
              </svg>
              {t('add')}
            </button> : ''
        }
      </div>
      <button className={size_style[hover].like}>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 20.125L10.1104 18.8791C8.49718 17.4257 7.1635 16.1718 6.10933 15.1177C5.05517 14.0635 4.21663 13.1172 3.59371 12.2786C2.97079 11.4401 2.53555 10.6694 2.28798 9.96663C2.04041 9.26386 1.91663 8.54511 1.91663 7.81038C1.91663 6.309 2.41975 5.05518 3.426 4.04893C4.43225 3.04268 5.68607 2.53955 7.18746 2.53955C8.01802 2.53955 8.80864 2.71525 9.55933 3.06663C10.31 3.41802 10.9569 3.91316 11.5 4.55205C12.043 3.91316 12.6899 3.41802 13.4406 3.06663C14.1913 2.71525 14.9819 2.53955 15.8125 2.53955C17.3138 2.53955 18.5677 3.04268 19.5739 4.04893C20.5802 5.05518 21.0833 6.309 21.0833 7.81038C21.0833 8.54511 20.9595 9.26386 20.7119 9.96663C20.4644 10.6694 20.0291 11.4401 19.4062 12.2786C18.7833 13.1172 17.9448 14.0635 16.8906 15.1177C15.8364 16.1718 14.5027 17.4257 12.8895 18.8791L11.5 20.125ZM11.5 17.5375C13.0333 16.1639 14.2951 14.9859 15.2854 14.0036C16.2757 13.0213 17.0583 12.1668 17.6333 11.4401C18.2083 10.7133 18.6076 10.0665 18.8312 9.49945C19.0548 8.93243 19.1666 8.36941 19.1666 7.81038C19.1666 6.85205 18.8472 6.05344 18.2083 5.41455C17.5694 4.77566 16.7708 4.45622 15.8125 4.45622C15.0618 4.45622 14.367 4.66785 13.7281 5.09111C13.0892 5.51438 12.65 6.05344 12.4104 6.7083H10.5895C10.35 6.05344 9.91072 5.51438 9.27183 5.09111C8.63295 4.66785 7.93815 4.45622 7.18746 4.45622C6.22913 4.45622 5.43052 4.77566 4.79163 5.41455C4.15274 6.05344 3.83329 6.85205 3.83329 7.81038C3.83329 8.36941 3.9451 8.93243 4.16871 9.49945C4.39232 10.0665 4.79163 10.7133 5.36663 11.4401C5.94163 12.1668 6.72427 13.0213 7.71454 14.0036C8.70482 14.9859 9.96663 16.1639 11.5 17.5375Z" fill="white" />
        </svg>
      </button>
      <div className={size_style[hover].discount_top}>50 %</div>
    </div>
  )
}

export default Dress
