import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Select, Option } from "@material-tailwind/react";
import { t } from 'i18next';
import Chip from '../components/Chip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Person2Icon from '@mui/icons-material/Person2';

function DressmakersAdd() {
  const [openPassword, setOpenPassword] = useState(false);
  const [data, setData] = useState({
    size: []
  });
  const handleSize = (e) => {
    console.log(e);
  }
  const handleUploadImage = (event) => {

  }
  return (
    <div className='dress-add'>
      <Breadcrumb page={'dressmakers'} pageLink={'/dressmakers'} name={t('newDressmakerAdd')} />

      <div className="dress-add_content flex justify-between mt-5">
        <div className="dress-add_content_left w-3/5 h-[70vh] overflow-auto rounded-lg border bg-white mr-5">
          <div className="name px-5 py-4 font-bold border-b">{t('personalInformation')}</div>
          <div className="inputs grid grid-cols-2 gap-5 p-5">
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='bussinessName'>{t('bussinessName')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('bussinessName')} id='bussinessName' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='phoneNumber'>{t('phoneNumber')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('phoneNumber')} id='phoneNumber' />
            </div>
            <div className="dress-input col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='login'>{t('login')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('login')} id='login' />
            </div>
            <div className="dress-input col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='password'>{t('password')}</label>
              <div className='text-lybas-gray flex items-center pr-5 bg-gray-100 rounded-lg'>
                <input type={openPassword ? 'text' : 'password'} className='w-full bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('password')} id='password' />
                <button onClick={() => setOpenPassword(!openPassword)}>
                  <VisibilityIcon />
                </button>
              </div>
            </div>
            <div className="dress-input sizes col-span-2">
              <div className="label font-semibold block mb-2.5" htmlFor='category'>{t('category')}</div>
              <div className="size flex flex-wrap items-center">
                <div className="w-72 mr-5">
                  <Select
                    label={t('size')}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }} color='gray'
                    onChange={handleSize}
                    className='bg-gray-100 border-none outline-none border-none'
                  >
                    <Option value='1'>Material Tailwind HTML</Option>
                    <Option value='2'>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
                <div className='mt-4 flex flex-wrap w-full'>
                  <Chip className="mr-2 mb-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-container w-2/5 h-[70vh]'>
          <div className="dress-add_content_right w-full overflow-auto rounded-lg border bg-white">
            <div className="name px-5 py-4 font-bold border-b">{t('profileImage')}</div>
            <div className="inputs p-5">
              <div className="flex items-center">
                <div className="image w-[55px] h-[55px] rounded-full flex justify-center items-center bg-gray-100 object-fit mr-3 overflow-hidden">
                  <Person2Icon sx={{ width: '90%', height: '90%' }} />
                  {/* <img src={require('./../assets/images/dressImage.png')} className='w-full h-full' alt="" /> */}
                </div>
                <div className="titleAndAction flex flex-col justify-center">
                  <div className="title font-semibold mb-1">{t('uploadImage')}</div>
                  <div className="actions flex items-center">
                    <label htmlFor='upload-image' className='text-lybas-blue mr-2 cursor-pointer'>{t('upload')}</label>
                    <input id='upload-image' type="file" className='hidden'/>
                    <button className='text-lybas-gray'>{t('delete')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="actions flex mt-10">
            <button className='bg-white border mr-5 w-full py-2 rounded hover:bg-gray-100'>{t("cancel")}</button>
            <button className='bg-lybas-blue text-white border w-full py-2 rounded hover:bg-blue-800'>{t("save")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressmakersAdd;
