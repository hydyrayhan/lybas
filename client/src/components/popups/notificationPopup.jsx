import { t } from 'i18next';
import React, { useEffect, useRef } from 'react';

function NotificationPopup({setOpen}) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const el = document.querySelector("#root > div > div.bg-white > header > nav > div > div > div:nth-child(5) > div > div.relative.flex")
      if (ref.current && !ref.current.contains(event.target) && !el.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div ref={ref} className='notification absolute z-[10] w-[400px] top-[35px] -right-[150px] bg-white shadow-lybas-1 rounded-lg overflow-hidden'>
      <div className="notification_title p-4 font-bold text-lg text-left">{t('notification')} (2)</div>
      <div className="notification_list flex p-4 hover:bg-gray-200 cursor-pointer">
        <img className='notification_list_image rounded-full min-w-8 max-w-8 min-h-8 max-h-8 mr-3' src={require('./../../assets/images/dressImage.png')} alt="" />
        <div className="notification_list_content text-sm">
          <div className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, atque.</div>
          <div className='text-lybas-gray line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea velit enim tenetur officia nihil delectus aliquid adipisci deleniti facilis.</div>
        </div>
        <div className="notification_list_date ml-3">12.08.2023</div>
      </div>
    </div>
  );
}

export default NotificationPopup;
