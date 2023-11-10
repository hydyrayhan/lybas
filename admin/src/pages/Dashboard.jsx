import React from 'react';
import StatisticaBox from '../components/StatisticaBox';
import Graphic from '../components/Graphic';
import Search from '../components/Search';
import { t } from 'i18next';
import Orders from './Orders';

const icon1 = <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 22.75C10.2736 22.75 7.96701 22.3302 6.08021 21.4906C4.1934 20.651 3.25 19.6264 3.25 18.4167V7.58333C3.25 6.39167 4.20243 5.37153 6.10729 4.52292C8.01215 3.67431 10.3097 3.25 13 3.25C15.6903 3.25 17.9878 3.67431 19.8927 4.52292C21.7976 5.37153 22.75 6.39167 22.75 7.58333V18.4167C22.75 19.6264 21.8066 20.651 19.9198 21.4906C18.033 22.3302 15.7264 22.75 13 22.75ZM13 9.77708C14.6069 9.77708 16.2229 9.54688 17.8479 9.08646C19.4729 8.62604 20.3847 8.13403 20.5833 7.61042C20.3847 7.08681 19.4774 6.59028 17.8615 6.12083C16.2455 5.65139 14.625 5.41667 13 5.41667C11.3569 5.41667 9.74549 5.64687 8.16563 6.10729C6.58576 6.56771 5.66944 7.06875 5.41667 7.61042C5.66944 8.15208 6.58576 8.64861 8.16563 9.1C9.74549 9.55139 11.3569 9.77708 13 9.77708ZM13 15.1667C13.7583 15.1667 14.4896 15.1306 15.1938 15.0583C15.8979 14.9861 16.5705 14.8823 17.2115 14.7469C17.8524 14.6115 18.4573 14.4444 19.026 14.2458C19.5948 14.0472 20.1139 13.8215 20.5833 13.5688V10.3187C20.1139 10.5715 19.5948 10.7972 19.026 10.9958C18.4573 11.1944 17.8524 11.3615 17.2115 11.4969C16.5705 11.6323 15.8979 11.7361 15.1938 11.8083C14.4896 11.8806 13.7583 11.9167 13 11.9167C12.2417 11.9167 11.5014 11.8806 10.7792 11.8083C10.0569 11.7361 9.37535 11.6323 8.73438 11.4969C8.0934 11.3615 7.49306 11.1944 6.93333 10.9958C6.37361 10.7972 5.86806 10.5715 5.41667 10.3187V13.5688C5.86806 13.8215 6.37361 14.0472 6.93333 14.2458C7.49306 14.4444 8.0934 14.6115 8.73438 14.7469C9.37535 14.8823 10.0569 14.9861 10.7792 15.0583C11.5014 15.1306 12.2417 15.1667 13 15.1667ZM13 20.5833C13.8306 20.5833 14.6747 20.5201 15.5323 20.3937C16.3899 20.2674 17.1799 20.1003 17.9021 19.8927C18.6243 19.6851 19.2292 19.4503 19.7167 19.1885C20.2042 18.9267 20.4931 18.6604 20.5833 18.3896V15.7354C20.1139 15.9882 19.5948 16.2139 19.026 16.4125C18.4573 16.6111 17.8524 16.7781 17.2115 16.9135C16.5705 17.049 15.8979 17.1528 15.1938 17.225C14.4896 17.2972 13.7583 17.3333 13 17.3333C12.2417 17.3333 11.5014 17.2972 10.7792 17.225C10.0569 17.1528 9.37535 17.049 8.73438 16.9135C8.0934 16.7781 7.49306 16.6111 6.93333 16.4125C6.37361 16.2139 5.86806 15.9882 5.41667 15.7354V18.4167C5.50694 18.6875 5.79132 18.9493 6.26979 19.2021C6.74826 19.4549 7.34861 19.6851 8.07083 19.8927C8.79306 20.1003 9.5875 20.2674 10.4542 20.3937C11.3208 20.5201 12.1694 20.5833 13 20.5833Z" fill="#1A54EB" />
</svg>

const icon2 = <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_1095_22969)">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.46857 16.6353C2.51565 15.5882 3.93579 15 5.41658 15H14.0833C15.564 15 16.9842 15.5882 18.0313 16.6353C19.0783 17.6824 19.6666 19.1025 19.6666 20.5833V22.75C19.6666 23.4404 19.1069 24 18.4166 24C17.7262 24 17.1666 23.4404 17.1666 22.75V20.5833C17.1666 19.7656 16.8417 18.9813 16.2635 18.4031C15.6853 17.8249 14.901 17.5 14.0833 17.5H5.41658C4.59883 17.5 3.81458 17.8249 3.23634 18.4031C2.6581 18.9813 2.33325 19.7656 2.33325 20.5833V22.75C2.33325 23.4404 1.77361 24 1.08325 24C0.392896 24 -0.166748 23.4404 -0.166748 22.75V20.5833C-0.166748 19.1025 0.421495 17.6824 1.46857 16.6353Z" fill="#1A54EB" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.75008 4.5C8.0472 4.5 6.66675 5.88046 6.66675 7.58333C6.66675 9.28621 8.0472 10.6667 9.75008 10.6667C11.453 10.6667 12.8334 9.28621 12.8334 7.58333C12.8334 5.88046 11.453 4.5 9.75008 4.5ZM4.16675 7.58333C4.16675 4.49974 6.66649 2 9.75008 2C12.8337 2 15.3334 4.49974 15.3334 7.58333C15.3334 10.6669 12.8337 13.1667 9.75008 13.1667C6.66649 13.1667 4.16675 10.6669 4.16675 7.58333Z" fill="#1A54EB" />
    <path fillRule="evenodd" clipRule="evenodd" d="M20.4563 16.0784C20.6288 15.41 21.3106 15.008 21.9791 15.1806C23.1769 15.4899 24.238 16.1882 24.996 17.1659C25.7539 18.1437 26.1656 19.3454 26.1666 20.5825V22.7501C26.1666 23.4404 25.6069 24.0001 24.9166 24.0001C24.2262 24.0001 23.6666 23.4404 23.6666 22.7501V20.5838C23.6659 19.9008 23.4386 19.2374 23.0201 18.6976C22.6016 18.1577 22.0155 17.772 21.3541 17.6012C20.6856 17.4286 20.2837 16.7469 20.4563 16.0784Z" fill="#1A54EB" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16.1224 3.08088C16.2936 2.41209 16.9746 2.00875 17.6434 2.17999C18.8444 2.48749 19.9088 3.18597 20.669 4.1653C21.4292 5.14463 21.8418 6.3491 21.8418 7.58884C21.8418 8.82858 21.4292 10.0331 20.669 11.0124C19.9088 11.9917 18.8444 12.6902 17.6434 12.9977C16.9746 13.1689 16.2936 12.7656 16.1224 12.0968C15.9511 11.428 16.3545 10.7471 17.0233 10.5758C17.6865 10.406 18.2744 10.0203 18.6941 9.47946C19.1139 8.93863 19.3418 8.27347 19.3418 7.58884C19.3418 6.90421 19.1139 6.23905 18.6941 5.69823C18.2744 5.1574 17.6865 4.77168 17.0233 4.60186C16.3545 4.43063 15.9511 3.74966 16.1224 3.08088Z" fill="#1A54EB" />
  </g>
  <defs>
    <clipPath id="clip0_1095_22969">
      <rect width="26" height="26" fill="white" />
    </clipPath>
  </defs>
</svg>

const icon3 = <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M5.63317 1.51634C5.83776 1.24355 6.15885 1.08301 6.49984 1.08301H19.4998C19.8408 1.08301 20.1619 1.24355 20.3665 1.51634L23.6165 5.84967C23.7571 6.0372 23.8332 6.26527 23.8332 6.49967V21.6663C23.8332 22.5283 23.4908 23.3549 22.8813 23.9644C22.2718 24.5739 21.4451 24.9163 20.5832 24.9163H5.4165C4.55455 24.9163 3.7279 24.5739 3.11841 23.9644C2.50891 23.3549 2.1665 22.5283 2.1665 21.6663V6.49967C2.1665 6.26527 2.24253 6.0372 2.38317 5.84967L5.63317 1.51634ZM7.0415 3.24967L4.33317 6.86079V21.6663C4.33317 21.9537 4.44731 22.2292 4.65047 22.4324C4.85364 22.6355 5.12919 22.7497 5.4165 22.7497H20.5832C20.8705 22.7497 21.146 22.6355 21.3492 22.4324C21.5524 22.2292 21.6665 21.9537 21.6665 21.6663V6.86079L18.9582 3.24967H7.0415Z" fill="#1A54EB" />
  <path fillRule="evenodd" clipRule="evenodd" d="M2.1665 6.50033C2.1665 5.90202 2.65153 5.41699 3.24984 5.41699H22.7498C23.3481 5.41699 23.8332 5.90202 23.8332 6.50033C23.8332 7.09863 23.3481 7.58366 22.7498 7.58366H3.24984C2.65153 7.58366 2.1665 7.09863 2.1665 6.50033Z" fill="#1A54EB" />
  <path fillRule="evenodd" clipRule="evenodd" d="M8.66683 9.75C9.26514 9.75 9.75016 10.235 9.75016 10.8333C9.75016 11.6953 10.0926 12.5219 10.7021 13.1314C11.3116 13.7409 12.1382 14.0833 13.0002 14.0833C13.8621 14.0833 14.6888 13.7409 15.2983 13.1314C15.9078 12.5219 16.2502 11.6953 16.2502 10.8333C16.2502 10.235 16.7352 9.75 17.3335 9.75C17.9318 9.75 18.4168 10.235 18.4168 10.8333C18.4168 12.2699 17.8461 13.6477 16.8303 14.6635C15.8145 15.6793 14.4368 16.25 13.0002 16.25C11.5636 16.25 10.1858 15.6793 9.17 14.6635C8.15418 13.6477 7.5835 12.2699 7.5835 10.8333C7.5835 10.235 8.06852 9.75 8.66683 9.75Z" fill="#1A54EB" />
</svg>

const icon4 = <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_1095_22947)">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.46882 16.6353C2.51589 15.5882 3.93604 15 5.41683 15H14.0835C15.5643 15 16.9844 15.5882 18.0315 16.6353C19.0786 17.6824 19.6668 19.1025 19.6668 20.5833V22.75C19.6668 23.4404 19.1072 24 18.4168 24C17.7265 24 17.1668 23.4404 17.1668 22.75V20.5833C17.1668 19.7656 16.842 18.9813 16.2637 18.4031C15.6855 17.8249 14.9012 17.5 14.0835 17.5H5.41683C4.59908 17.5 3.81482 17.8249 3.23658 18.4031C2.65835 18.9813 2.3335 19.7656 2.3335 20.5833V22.75C2.3335 23.4404 1.77385 24 1.0835 24C0.39314 24 -0.166504 23.4404 -0.166504 22.75V20.5833C-0.166504 19.1025 0.421739 17.6824 1.46882 16.6353Z" fill="#1A54EB" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.74984 4.5C8.04696 4.5 6.6665 5.88046 6.6665 7.58333C6.6665 9.28621 8.04696 10.6667 9.74984 10.6667C11.4527 10.6667 12.8332 9.28621 12.8332 7.58333C12.8332 5.88046 11.4527 4.5 9.74984 4.5ZM4.1665 7.58333C4.1665 4.49974 6.66625 2 9.74984 2C12.8334 2 15.3332 4.49974 15.3332 7.58333C15.3332 10.6669 12.8334 13.1667 9.74984 13.1667C6.66625 13.1667 4.1665 10.6669 4.1665 7.58333Z" fill="#1A54EB" />
    <path fillRule="evenodd" clipRule="evenodd" d="M20.4565 16.0784C20.6291 15.41 21.3109 15.008 21.9793 15.1806C23.1771 15.4899 24.2383 16.1882 24.9962 17.1659C25.7541 18.1437 26.1659 19.3454 26.1668 20.5825V22.7501C26.1668 23.4404 25.6072 24.0001 24.9168 24.0001C24.2265 24.0001 23.6668 23.4404 23.6668 22.7501V20.5838C23.6662 19.9008 23.4388 19.2374 23.0204 18.6976C22.6018 18.1577 22.0158 17.772 21.3543 17.6012C20.6859 17.4286 20.2839 16.7469 20.4565 16.0784Z" fill="#1A54EB" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16.1224 3.08088C16.2936 2.41209 16.9746 2.00875 17.6434 2.17999C18.8444 2.48749 19.9088 3.18597 20.669 4.1653C21.4292 5.14463 21.8418 6.3491 21.8418 7.58884C21.8418 8.82858 21.4292 10.0331 20.669 11.0124C19.9088 11.9917 18.8444 12.6902 17.6434 12.9977C16.9746 13.1689 16.2936 12.7656 16.1224 12.0968C15.9511 11.428 16.3545 10.7471 17.0233 10.5758C17.6865 10.406 18.2744 10.0203 18.6941 9.47946C19.1139 8.93863 19.3418 8.27347 19.3418 7.58884C19.3418 6.90421 19.1139 6.23905 18.6941 5.69823C18.2744 5.1574 17.6865 4.77168 17.0233 4.60186C16.3545 4.43063 15.9511 3.74966 16.1224 3.08088Z" fill="#1A54EB" />
  </g>
  <defs>
    <clipPath id="clip0_1095_22947">
      <rect width="26" height="26" fill="white" />
    </clipPath>
  </defs>
</svg>

const tableHeader = ['clientPhoneNumber', 'product', 'number', 'dateTime', 'status']

function Dashboard() {
  return (
    <div className='grid grid-cols-12 gap-5'>
      <StatisticaBox icon={icon1} name={'totalBalance'} date={'thisMonth'} price={50357} percent={50} up={true} />
      <StatisticaBox icon={icon2} name={'users'} date={'thisMonth'} price={50357} percent={5} up={false} />
      <StatisticaBox icon={icon3} name={'orders'} date={'thisMonth'} price={507} percent={0} up={true} />
      <StatisticaBox icon={icon4} name={'dressmakers'} date={'thisMonth'} price={5357} percent={0} up={true} />

      <Graphic className='col-span-12' />

      <div className='col-span-12'>
        <Orders />
      </div>

    </div>
  );
}

export default Dashboard;
