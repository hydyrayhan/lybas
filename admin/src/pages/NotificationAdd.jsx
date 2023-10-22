import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

function NotificationAdd() {
  const navigate = useNavigate();
  return (
    <div className='dress-add'>
      <Breadcrumb page={'banner'} pageLink={'/banner'} name={t('addBanner')} />

      <div className="dress-add_content flex justify-between mt-5">
        <div className="dress-add_content_left w-full h-[70vh] overflow-auto rounded-lg border bg-white mr-5">
          <div className="name px-5 py-4 font-bold border-b">{t('aboutTheNotification')}</div>
          <div className="inputs grid grid-cols-2 gap-5 p-5">
            <div className="dress-input col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='name'>{t('nameSimple')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('nameSimple')} id='name' />
            </div>
            <div className="dress-input col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='text-tm'>{t('writeTheDetail')}</label>
              <textarea className='w-full h-40 resize-none text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('writeTheDetail')} id='text-tm' />
            </div>
            <div className="actions flex mt-10">
              <button onClick={()=>(navigate('/notification'))} className='bg-white border mr-5 px-20 py-2 rounded hover:bg-gray-100'>{t("cancel")}</button>
              <button className='bg-lybas-blue text-white border px-20 py-2 rounded hover:bg-blue-800'>{t("save")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationAdd;
