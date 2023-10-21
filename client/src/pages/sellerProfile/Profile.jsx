import React, { useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import { t } from 'i18next';

function Profile() {
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);
  return (
    <div className='one-comment'>
      <Breadcrumb page={'profile'} pageLink={'/sellerProfile/profile'} name={'Kumush'} />

      <div className="one-comment_content flex mt-5">
        <div className="one-comment_content_left bg-white rounded-lg w-3/5 mr-5">
          <div className="title py-3 px-5 font-semibold border-b">{t('personalInformation')}</div>

          <div className="inputs grid grid-cols-4 gap-5 p-5">
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('nameSimple')}</div>
              <div className="data_title text-lybas-gray bg-gray-200 rounded-lg py-2.5 px-5">{t('nameSimple')}</div>
            </div>
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('phoneNumber')}</div>
              <div className="data_title text-lybas-gray bg-gray-200 rounded-lg py-2.5 px-5 flex justify-between">
                {t('nameSimple')}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#0E1217" />
                </svg>
              </div>
            </div>
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('login')}</div>
              <div className="data_title text-lybas-gray bg-gray-200 rounded-lg py-2.5 px-5">{t('nameSimple')}</div>
            </div>
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('province')}</div>
              <div className="data_title text-lybas-gray bg-gray-200 rounded-lg py-2.5 px-5 flex justify-between">
                {t('nameSimple')}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#0E1217" />
                </svg>
              </div>
            </div>
            <div className="data col-span-4">
              <div className="data_title font-semibold mb-2">{t('password')}</div>
              <div className="data_title text-lybas-gray bg-gray-200 rounded-lg flex justify-between items-center pr-5">
                <input type="password" value={'Ayhanjan'} className='py-2.5 px-5 w-full bg-gray-200 rounded-lg' />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#0E1217" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='w-2/5 flex flex-col justify-between'>
          <div className="one-comment_content_right bg-white rounded-lg h-fit">
            <div className="title py-3 px-5 font-semibold border-b">{t('profileImage')}</div>
            <div className="photo p-5 flex items-center">
              <div className="image w-[55px] h-[55px] flex items-center justify-center rounded-full bg-gray-200 mr-3">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1196_22316)">
                    <path d="M30.7589 33.6467C27.5204 36.3707 23.4395 37.9997 19.0006 37.9997C14.5617 37.9997 10.4812 36.3707 7.24221 33.6467C5.66519 32.3206 4.28631 30.7373 3.16699 28.9507C4.70755 27.5019 7.72343 26.4007 9.27742 25.6589C10.2456 25.1963 11.3409 24.917 11.9205 24.4473L14.5631 21.7191L13.2418 17.7799C11.6307 17.2875 10.8823 13.2343 11.9205 13.1332C11.5871 11.1864 11.2637 8.57689 11.6389 6.69225C12.0347 3.81984 15.1743 1.58301 18.9905 1.58301C22.6425 1.58301 25.6743 3.63194 26.2749 6.32517C26.7782 8.22676 26.4347 11.0566 26.0787 13.1327C27.1169 13.2338 26.3958 17.2763 24.7838 17.7691L23.4361 21.7181L26.0797 24.4462C26.6583 24.916 27.7536 25.1958 28.7223 25.6578C30.2772 26.3997 33.2931 27.5014 34.8337 28.9502C33.7143 30.7378 32.3355 32.3211 30.7589 33.6467Z" fill="#64748B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1196_22316">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="title">
                <div className='font-semibold'>{t('edit')} {t('photo')}</div>
                <div className="title_actions text-sm ">
                  <button className='text-lybas-blue mr-3'>{t('upload')}</button>
                  <button className='text-lybas-gray'>{t('delete')}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="actions flex">
            <button className='w-full bg-white rounded-lg py-2 mr-5 hover:bg-gray-100'>{t('cancel')}</button>
            <button className='bg-lybas-blue text-white rounded-lg w-full py-2 hover:bg-blue-700'>{t('save')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
