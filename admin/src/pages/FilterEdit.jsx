import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { t } from 'i18next';
import OneFilter from '../components/OneFilter';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent } from '@mui/material';

function FilterEdit() {
  const { type } = useParams()
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='filter-edit'>
      <Breadcrumb page={'filter'} pageLink={'/filter'} name={t(type)} />

      <div className="filter-edit_body bg-white rounded-lg border mt-5">
        <div className="filter-edit_body_title py-3 px-5 font-bold border-b">{t(type)}</div>
        <div className="filter-edit_body_datas grid grid-cols-3 gap-5 p-5">
          <OneFilter />
          <OneFilter />
          <OneFilter />
          <OneFilter />
          <OneFilter />
          <OneFilter />
          <OneFilter />
          <OneFilter />
          <div className='flex items-end'>
            <button onClick={() => setOpen(true)} className='bg-lybas-blue h-[44px] text-white py-2 px-20 rounded-lg'>{t('add')}</button>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t('addNewOne')}
        </DialogTitle>
        <DialogContent sx={{ width: "400px" }}>
          {
            type === 'allCategory' && <>
              <div className="input-filter flex flex-col mb-2">
                <label className='mb-2 text-black cursor-pointer' htmlFor="tm">Türkmençe</label>
                <input className='w-full text-lybas-gray rounded-lg bg-gray-100 outline-none py-2 px-5' type="text" id='tm' placeholder='Türkmençe' />
              </div>
              <div className="input-filter flex flex-col mb-2">
                <label className='mb-2 text-black cursor-pointer' htmlFor="ru">Русский</label>
                <input className='w-full text-lybas-gray rounded-lg bg-gray-100 outline-none py-2 px-5' type="text" id='ru' placeholder='Русский' />
              </div>
              <div className="input-filter flex flex-col">
                <label className='mb-2 text-black cursor-pointer' htmlFor="en">English</label>
                <input className='w-full text-lybas-gray rounded-lg bg-gray-100 outline-none py-2 px-5' type="text" id='en' placeholder='English' />
              </div>
            </>
          }
          {
            type === 'size' &&
            <div className="input-filter flex flex-col">
              <label className='mb-2 text-black cursor-pointer' htmlFor="en">{t('size')}</label>
              <input className='w-full text-lybas-gray rounded-lg bg-gray-100 outline-none py-2 px-5' type="text" id='en' placeholder={t('size')} />
            </div>
          }
          {
            type === 'fabric' &&
            <div className="input-filter flex flex-col">
              <label className='mb-2 text-black cursor-pointer' htmlFor="en">{t('fabric')}</label>
              <input className='w-full text-lybas-gray rounded-lg bg-gray-100 outline-none py-2 px-5' type="text" id='en' placeholder={t('fabric')} />
            </div>
          }
          {
            type === 'color' &&
            <div className="input-filter flex flex-col">
              <label className='mb-2 text-black cursor-pointer'>{t('fabric')}</label>
              <input className='text-lybas-gray rounded-lg bg-gray-100 outline-none cursor-pointer' type="color" id='en' placeholder={t('fabric')} />
            </div>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button onClick={handleClose} autoFocus>
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FilterEdit;
