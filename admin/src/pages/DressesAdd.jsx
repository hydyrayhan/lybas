import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Select, Option } from "@material-tailwind/react";
import { t } from 'i18next';
import Chip from '../components/Chip';

function DressesAdd() {
  const [data, setData] = useState({
    size: []
  });
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleSize = (e) => {
    console.log(e);
  }
  const handleUploadImage = (event) => {
    setFile(event.target.files[0]);
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload');
    xhr.send(formData);

    xhr.upload.addEventListener('progress', (event) => {
      const newProgress = (event.loaded / event.total) * 100;
      setProgress(newProgress);
    });

    xhr.onload = () => {

    };

    // With axios
    // const formData = new FormData();
    // formData.append('file', file);

    // const config = {
    //   onUploadProgress: (event) => {
    //     const progress = (event.loaded / event.total) * 100;
    //     // Update the progress bar or display other information about the upload progress to your users
    //   },
    // };

    // const response = await axios.post('/upload', formData, config);
  }
  return (
    <div className='dress-add'>
      <Breadcrumb page={'dresses'} pageLink={'/sellerProfile/dresses'} name={'Taze geler kurte'} />

      <div className="dress-add_content flex justify-between mt-5">
        <div className="dress-add_content_left w-3/5 h-[70vh] overflow-auto rounded-lg border bg-white mr-5">
          <div className="name px-5 py-4 font-bold border-b">{t('aboutTheDress')}</div>
          <div className="inputs grid grid-cols-2 gap-5 p-5">
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('nameTm')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('nameTm')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('nameEn')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('nameEn')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('nameRu')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('nameRu')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('fabric')}</label>
              <div className="w-72">
                <Select
                  label={t('fabric')}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }} color='gray'
                  className='bg-gray-100 border-none outline-none border-none'
                >
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('dressmaker')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('dressmaker')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('price')}</label>
              <input type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('price')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('category')}</label>
              <div className="w-72">
                <Select
                  label={t('category')}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }} color='gray'
                  className='bg-gray-100 border-none outline-none border-none'
                >
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
            <div className="dress-input">
              <div className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('color')}</div>
              <div className="colors flex flex-wrap items-center">
                <button className='rounded-full mr-3 border-blue-600'>
                  <div className='w-5 h-5 rounded-full bg-[yellow]'></div>
                </button>
                <button className='rounded-full mr-3 border-2 p-0.5 border-blue-600'>
                  <div className='w-5 h-5 rounded-full bg-[red]'></div>
                </button>
                <button className='rounded-full mr-3 border-blue-600'>
                  <div className='w-5 h-5 rounded-full bg-[black]'></div>
                </button>
              </div>
            </div>
            <div className="dress-input sizes col-span-2">
              <div className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('size')}</div>
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
            <div className="dress-input sizes col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='body-tm'>{t('writeContentTm')}</label>
              <textarea className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5 resize-none' placeholder={t('writeContentTm')} name="" id="body-tm" cols="30" rows="5"></textarea>
            </div>
            <div className="dress-input sizes col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='body-tm'>{t('writeContentEn')}</label>
              <textarea className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5 resize-none' placeholder={t('writeContentEn')} name="" id="body-tm" cols="30" rows="5"></textarea>
            </div>
            <div className="dress-input sizes col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='body-tm'>{t('writeContentRu')}</label>
              <textarea className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5 resize-none' placeholder={t('writeContentRu')} name="" id="body-tm" cols="30" rows="5"></textarea>
            </div>
          </div>
        </div>
        <div className='right-container w-2/5 h-[70vh]'>
          <div className="dress-add_content_right w-full overflow-auto rounded-lg border bg-white">
            <div className="name px-5 py-4 font-bold border-b">{t('uploadImage')}</div>
            <div className="inputs p-5">
              <div className="flex items-center justify-center w-full mt-3">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-lybas-blue border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className='mb-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#0E1217" />
                    </svg>
                    <p className="mb-2 text-sm text-lybas-blue">{t('clickToUpload')}</p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px) 0/8</p>
                  </div>
                  <input id="dropzone-file" onProgress={() => handleUploadImage()} type="file" className="hidden" />
                </label>
              </div>
              <div className="uploading-image_progressbar mb-3">
                <div className='uploading-image mt-5 flex justify-between items-center'>
                  <div className="left flex items-center">
                    <div className="image w-16 h-16 rounded-lg overflow-hidden mr-3">
                      <img className='h-full w-full object-cover' src={require('./../assets/images/dressImage.png')} alt="" />
                    </div>
                    <div className="info flex flex-col justify-center">
                      <div className="name">image_1.jpg</div>
                      <div className="size text-lybas-gray">521kb / loading</div>
                    </div>
                  </div>
                  <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.33317 15.8337L4.1665 14.667L8.83317 10.0003L4.1665 5.33366L5.33317 4.16699L9.99984 8.83366L14.6665 4.16699L15.8332 5.33366L11.1665 10.0003L15.8332 14.667L14.6665 15.8337L9.99984 11.167L5.33317 15.8337Z" fill="#0B1527" />
                    </svg>
                  </button>
                </div>
                <div className="progressbar bg-gray-200 w-full h-2 rounded-lg mt-3">
                  <div className="progressbar_thumb bg-red-500 w-[50%] h-full rounded-lg"></div>
                </div>
              </div>
              <div className="uploading-image_progressbar mb-3">
                <div className='uploading-image mt-5 flex justify-between items-center'>
                  <div className="left flex items-center">
                    <div className="image w-16 h-16 rounded-lg overflow-hidden mr-3">
                      <img className='h-full w-full object-cover' src={require('./../assets/images/dressImage.png')} alt="" />
                    </div>
                    <div className="info flex flex-col justify-center">
                      <div className="name">image_1.jpg</div>
                      <div className="size text-lybas-gray">521kb / loading</div>
                    </div>
                  </div>
                  <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.33317 15.8337L4.1665 14.667L8.83317 10.0003L4.1665 5.33366L5.33317 4.16699L9.99984 8.83366L14.6665 4.16699L15.8332 5.33366L11.1665 10.0003L15.8332 14.667L14.6665 15.8337L9.99984 11.167L5.33317 15.8337Z" fill="#0B1527" />
                    </svg>
                  </button>
                </div>
                <div className="progressbar bg-gray-200 w-full h-2 rounded-lg mt-3">
                  <div className="progressbar_thumb bg-red-500 w-[50%] h-full rounded-lg"></div>
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

export default DressesAdd;
