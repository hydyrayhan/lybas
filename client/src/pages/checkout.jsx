import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { t } from 'i18next';
import DOMPurify from 'dompurify';
import AddAddressPopup from '../components/popups/addAddressPopup';
import AccountOneAddress from '../components/AccountOneAddress';
const image = require('../assets/images/leftSmallImage.png')

function Checkout() {
  const [addAddressPopupOpen, setAddAddressPopupOpen] = useState(false);
  const [data,setData] = useState({
    name:'',
    surname:'',
    phone:'',
    note:'',
    address:'',
    products:[]
  })

  const handleData = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Breadcrumb />
        <h1 className="text-3xl font-bold tracking-tighter mb-3">{t('checkout')}</h1>
        <p className="text-lybas-gray tracking-tighter mb-7">{t('thereAre')} 3 {t('productsInYourCart')}</p>
        <div className="grid grid-cols-2 gap-7">
          <div className="">
            <h3 className="text-2xl font-bold mb-5">{t('billingDetails')}</h3>
            <div className='grid grid-cols-2 gap-7 mb-7'>
              <input type="text" placeholder={t('firstName')+'*'} name='name' className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('lastName')+'*'} name='surname' className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('phoneNumber')+'*'} name='phone' className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('note')} name='note' className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
            </div>
            <div className='order_addresses flex flex-wrap w-full h-[150px] overflow-auto border-2 border-lybas-light-gray p-2 rounded-lg'>
              {/* <textarea name="" id="" rows="5" disabled placeholder={t('yourAddress')+'*'} className="resize-none text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue"></textarea> */}
              <AccountOneAddress className={'mr-3 mb-3 w-[250px] cursor-pointer'} data={data} setData={setData} address={{province:'Mary',address:'Mary bla bla'}} action={false}/>
              <AccountOneAddress className={'mr-3 mb-3 w-[250px] cursor-pointer'} data={data} setData={setData} address={{province:'Mary',address:'Mary bla bla'}} action={false}/>
              <AccountOneAddress className={'mr-3 mb-3 w-[250px] cursor-pointer'} data={data} setData={setData} address={{province:'Mary',address:'Mary bla bla'}} action={false}/>
              <AccountOneAddress className={'mr-3 mb-3 w-[250px] cursor-pointer'} data={data} setData={setData} address={{province:'Mary',address:'Mary bla bla'}} action={false}/>
            </div>
            <button onClick={()=>setAddAddressPopupOpen(true)} className="bg-lybas-blue text-white rounded-lg py-2 px-10 mt-5 mb-10">{t('addAddress')}</button>
            <div className='orderLaw' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('orderLaw')) }}></div>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold mb-5">{t('yourOrder')}</h3>
            {/* Cart's products card */}
            <div className="shadow-lybas-1 rounded-lg">
              <div className="p-5 bg-lybas-light-gray grid grid-cols-4 gap-1">
                <h4 className='col-span-2'>{t('products')}</h4>
                <h4>{t('quantity')}</h4>
                <h4 className='text-end'>{t('subtotal')}</h4>
              </div>
              <div className="">
                {/* One cart product */}
                <div className="grid grid-cols-4 gap-1 p-5 border-b border-b-lybas-light-gray">
                  <div className="col-span-2 flex">
                    <div className="">
                      <img src={image} alt="" className='h-12 w-12 rounded mr-4' />
                    </div>
                    <div className="">
                      <h4 className="font-semibold mb-1">Hollo</h4>
                      <p className="text-sm text-lybas-gray">Pombarh 3XL 815 TMT X 3</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg mb-1">
                      <button className='h-full px-[8px] group border-r border-r-lybas-light-gray'>
                        <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                        </svg>
                      </button>
                      <span className='px-[20px] text-semibold'>0</span>
                      <button className='h-full px-[8px] group border-l border-l-lybas-light-gray'>
                        <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                        </svg>
                      </button>
                    </div>
                    <button className='flex text-lybas-blue font-semibold tracking-tighter'>Remove</button>
                  </div>
                  <p className="text-end font-semibold">815 {t('tmt')}</p>
                </div>
                {/* One cart product */}
                <div className="grid grid-cols-4 gap-1 p-5 border-b border-b-lybas-light-gray">
                  <div className="col-span-2 flex">
                    <div className="">
                      <img src={image} alt="" className='h-12 w-12 rounded mr-4' />
                    </div>
                    <div className="">
                      <h4 className="font-semibold mb-1">Hollo</h4>
                      <p className="text-sm text-lybas-gray">Pombarh 3XL 815 TMT X 3</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg mb-1">
                      <button className='h-full px-[8px] group border-r border-r-lybas-light-gray'>
                        <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                        </svg>
                      </button>
                      <span className='px-[20px] text-semibold'>0</span>
                      <button className='h-full px-[8px] group border-l border-l-lybas-light-gray'>
                        <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                        </svg>
                      </button>
                    </div>
                    <button className='flex text-lybas-blue font-semibold tracking-tighter'>Remove</button>
                  </div>
                  <p className="text-end font-semibold">815 {t('tmt')}</p>
                </div>
                {/* One cart product */}
                <div className="grid grid-cols-4 gap-1 p-5 border-b border-b-lybas-light-gray">
                  <div className="col-span-2 flex">
                    <div className="">
                      <img src={image} alt="" className='h-12 w-12 rounded mr-4' />
                    </div>
                    <div className="">
                      <h4 className="font-semibold mb-1">Hollo</h4>
                      <p className="text-sm text-lybas-gray">Pombarh 3XL 815 TMT X 3</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg mb-1">
                      <button className='h-full px-[8px] group border-r border-r-lybas-light-gray'>
                        <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                        </svg>
                      </button>
                      <span className='px-[20px] text-semibold'>0</span>
                      <button className='h-full px-[8px] group border-l border-l-lybas-light-gray'>
                        <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                        </svg>
                      </button>
                    </div>
                    <button className='flex text-lybas-blue font-semibold tracking-tighter'>Remove</button>
                  </div>
                  <p className="text-end font-semibold">815 {t('tmt')}</p>
                </div>
              </div>
              {/* All cart's total price */}
              {/* <div className="flex justify-between items-center p-5">
                <h3 className="">{t('totalPrice')}</h3>
                <p className="font-semibold">1 325 TMT</p>
              </div> */}
              {/* <div className="text-lybas-red flex justify-between items-center p-5 pt-0 border-b border-b-lybas-light-gray">
                <h3 className="">{t('discount')}</h3>
                <p className="font-semibold">1 325 TMT</p>
              </div> */}
              <div className="p-5 flex justify-between items-center">
                <h3 className="">{t('totalPrice')}</h3>
                <p className="font-semibold">1 114 TMT</p>
              </div>
            </div>
            {/* <div className="checkout_cards_payment-card rounded-lg shadow-lybas-1 my-7">
              <h2 className="checkout_cards_payment-card_title text-2xl font-bold p-4 bg-lybas-light-gray">{t('payment')}</h2>
              <div className="checkout_cards_payment-card_type p-4">
                <button className="type flex items-center mb-4">
                  <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.25" fill="#F7F7F7" stroke="#1A54EB" strokeWidth="1.5" />
                    <circle cx="10" cy="10" r="4.5" fill="#1A54EB" stroke="#1A54EB" />
                  </svg>
                  <span className='text-lybas-gray'>{t('cash')}</span>
                </button>
                <button className="type flex items-center">
                  <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.25" fill="#F7F7F7" stroke="#1A54EB" strokeWidth="1.5" />
                  </svg>
                  <span className='text-lybas-gray'>{t('terminal')}</span>
                </button>
              </div>
            </div> */}
            <button type="submit" className='lybas-blue-button mt-5'>{t('checkout')}</button>
          </div>
          <div>
          </div>
        </div>
      </div>

      <AddAddressPopup open={addAddressPopupOpen} setOpen={setAddAddressPopupOpen}/>
    </>
  );
}

export default Checkout;