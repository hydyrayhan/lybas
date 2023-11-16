import { t } from 'i18next';
import React, { useEffect, useRef, useState } from 'react';
import MobileSlide from '../MobileSlide';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataNotifications } from '../../redux/features/Notifications';

function NotificationPopup({ open, setOpen }) {
  const ref = useRef(null);
  const data = useSelector((state) => state?.Notifications?.data)
  const count = useSelector((state) => state?.Notifications?.count)
  const [toggle,setToggle] = useState(-1);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!data.length && localStorage.getItem('lybas-user-token')) dispatch(fetchDataNotifications());

    const handleClickOutside = (event) => {
      const el = document.querySelector("#root > div > div.bg-white > header > nav > div > div > div:nth-child(5) > div > div.relative.flex")
      if (ref.current && !ref.current.contains(event.target) && !el.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleFunc = (index)=>{
    if(index === toggle){
      setToggle(-1)
    }else{
      setToggle(index)
    }
  }
  return (
    <>
      <div ref={ref} className='notification hidden lg:block absolute z-[100] w-[400px] h-[300px] top-[35px] -right-[150px] bg-white shadow-lybas-1 rounded-lg overflow-hidden md:overflow-auto'>
        <div className="notification_title p-4 font-bold text-lg text-left">{t('notification')} {count > 0 ? `(${count})` : ''}</div>
        {
          data?.length > 0 && data.map((noti, index) => (
            <div onClick={()=>toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
              {/* <img className='notification_list_image rounded-full min-w-8 max-w-8 min-h-8 max-h-8 mr-3' src={require('./../../assets/images/dressImage.png')} alt="" /> */}
              <div className="notification_list_content text-sm">
                <div className='font-semibold'>{noti.name === 'order' ? t('orderNotification') :noti.name}</div>
                <div className={'text-lybas-gray ' + (toggle === index ? '' : 'line-clamp-2')}>{noti.name === 'order' ? t('orderNotificationBody') :noti.text}</div>
              </div>
              <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
            </div>
          ))
        }
      </div>
      <div>
        <MobileSlide open={open} setOpen={setOpen} title={'notification'}>
          {
            data?.length > 0 && data.map((noti, index) => (
              <div onClick={()=>toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                {/* <img className='notification_list_image rounded-full min-w-8 max-w-8 min-h-8 max-h-8 mr-3' src={require('./../../assets/images/dressImage.png')} alt="" /> */}
                <div className="notification_list_content text-sm">
                  <div className='font-semibold'>{noti.name === 'order' ? t('orderNotification') :noti.name}</div>
                  <div className={'text-lybas-gray '+(toggle === index ? '' : 'line-clamp-2')}>{noti.name === 'order' ? t('orderNotificationBody') :noti.text}</div>
                </div>
                <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
              </div>
            ))
          }
        </MobileSlide>
      </div>
    </>
  );
}

export default NotificationPopup;