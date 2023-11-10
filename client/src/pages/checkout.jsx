import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { t } from 'i18next';
import DOMPurify from 'dompurify';
import AddAddressPopup from '../components/popups/addAddressPopup';
import AccountOneAddress from '../components/AccountOneAddress';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataCart } from '../redux/features/Cart';
import { AxiosUser } from '../common/AxiosInstance';
import ip from '../common/Config';
import { AppContext } from '../App'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Checkout() {
  const { lang } = useContext(AppContext)
  const [addAddressPopupOpen, setAddAddressPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [instantOrder, setInstantOrder] = useState(searchParams.get('instantOrder'))
  const [instantOrderData, setInstantOrderData] = useState(instantOrder ? JSON.parse(localStorage.getItem('instantProduct')) : '')
  const cartData = useSelector((state) => state?.Cart.data)
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [data, setData] = useState({
    name: '',
    surname: '',
    user_phone: '',
    note: '',
    address: '',
  })

  const getAddress = async () => {
    try {
      const res = await AxiosUser("/address");
      setAddresses(res.data.address);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('lybas-user'));
    setData({
      name: user.username ? user.username.split(' ')[0] : '',
      surname: user.username ? user.username.split(' ')[1] : '',
      user_phone: user.user_phone,
      note: '',
      address: '',
    });
    getAddress();
  }, [])

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleAddress = (address, index) => {
    setSelectedAddress(index)
    handleData({ target: { name: 'address', value: address.welayat + ',/' + address.address } })
  }

  const handleAddressAdded = async (bool) => {
    if (bool) {
      await getAddress()
    }
  }



  const calculateTotalPrice = (cart) => {
    return cart.reduce((sum, obj) => sum + obj.total_price, 0).toFixed(2);
  }

  const updateProductQuantity = async (product, quantity) => {
    if (instantOrder) {
      setInstantOrderData({ ...instantOrderData, quantity })
    } else {
      if (quantity > 0) {
        try {
          const data = {
            id: product.productId,
            productsizeId: product.productsizeId,
            quantity
          }
          await AxiosUser('/to-my-cart', { method: 'POST', data })
          await dispatch(fetchDataCart());
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await AxiosUser('/delete/not-ordered/' + product.orderproductId, { method: 'POST' })
          await dispatch(fetchDataCart());
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  const sendData = async () => {
    if (data.user_phone && data.address && data.name && data.surname) {
      if (instantOrder) {
        const newData = {
          id: instantOrderData.id,
          productsizeId: instantOrderData.size.id,
          quantity: instantOrderData.quantity,
          address: data.address,
          user_phone: data.user_phone,
          name:data.name,
          surname:data.surname
        }
        try {
          const res = await AxiosUser("/my-orders/instant-order", { method: 'POST', data: newData });
          if(res.status === 201){
            toast.success(t('thankYouOrder'), { position: 'bottom-right', autoClose: 2000 })
            localStorage.setItem('instantProduct','')
            navigate('/')
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await AxiosUser("/my-orders/add", { method: 'POST', data });
          if (res.status === 200) {
            toast.success(t('thankYouOrder'), { position: 'bottom-right', autoClose: 2000 })
            dispatch(fetchDataCart())
            navigate('/')
          }
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      alert('fillTheGaps')
    }
  }

  return (
    <>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Breadcrumb page1={{ text: 'checkout', link: '/checkout' }} />
        <h1 className="text-3xl font-bold tracking-tighter mb-3">{t('checkout')}</h1>
        <p className="text-lybas-gray tracking-tighter mb-7">{t('thereAre')} {instantOrder ? 1 : cartData?.length} {t('productsInYourCart')}</p>
        <div className="grid grid-cols-2 gap-7">
          <div className="">
            <h3 className="text-2xl font-bold mb-5">{t('billingDetails')}</h3>
            <div className='grid grid-cols-2 gap-7 mb-7'>
              <input type="text" placeholder={t('firstName') + '*'} name='name' value={data.name} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('lastName') + '*'} name='surname' value={data.surname} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('phoneNumber') + '*'} name='user_phone' value={data.user_phone} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('note')} name='note' value={data.note} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
            </div>
            <div className='order_addresses flex flex-wrap w-full h-[200px] overflow-auto border-2 border-lybas-light-gray p-2 rounded-lg'>
              {/* <textarea name="" id="" rows="5" disabled placeholder={t('yourAddress')+'*'} className="resize-none text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue"></textarea> */}
              {
                addresses?.length > 0 ? addresses.map((address, index) => (
                  <button key={index} onClick={() => handleAddress(address, index)} className='text-left mr-3 mb-3 flex h-fit'>
                    <AccountOneAddress active={index === selectedAddress} key={index} className={'w-[250px] cursor-pointer'} data={data} setData={setData} address={address} action={false} />
                  </button>
                )) :
                  <span></span>
              }
            </div>
            <button disabled={addresses?.length > 3} onClick={() => setAddAddressPopupOpen(true)} className={"text-white rounded-lg py-2 px-10 mt-5 mb-10 " + (addresses?.length > 3 ? 'bg-gray-400' : 'bg-lybas-blue')}>{t('addAddress')}</button>
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
                {
                  cartData?.length > 0 && !instantOrder && cartData.map((product, index) => (
                    <div key={index} className="grid grid-cols-4 gap-1 p-5 border-b border-b-lybas-light-gray">
                      <div className="col-span-2 flex">
                        <div className="">
                          <img src={ip + '/' + product.image} alt="" className='h-12 w-12 rounded mr-4' />
                        </div>
                        <div className="">
                          <h4 className="font-semibold mb-1">{product['name_' + lang]}</h4>
                          <p className="text-sm text-lybas-gray">{product.material['name_' + lang]} {product.size} {product.price.toFixed(2)} TMT X {product.quantity}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg mb-1">
                          <button onClick={() => updateProductQuantity(product, product.quantity - 1)} className='h-full px-[8px] group border-r border-r-lybas-light-gray'>
                            <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                            </svg>
                          </button>
                          <span className='px-[20px] text-semibold'>{product.quantity}</span>
                          <button onClick={() => updateProductQuantity(product, product.quantity + 1)} className='h-full px-[8px] group border-l border-l-lybas-light-gray'>
                            <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                            </svg>
                          </button>
                        </div>
                        <button onClick={() => updateProductQuantity(product, 0)} className='flex text-lybas-blue font-semibold tracking-tighter'>{t('delete')}</button>
                      </div>
                      <p className="text-end font-semibold">{product.total_price.toFixed(2)} {t('tmt')}</p>
                    </div>
                  ))
                }
                {
                  instantOrder &&
                  <div className="grid grid-cols-4 gap-1 p-5 border-b border-b-lybas-light-gray">
                    <div className="col-span-2 flex">
                      <div className="">
                        <img src={ip + '/' + instantOrderData?.data?.images[0]?.image} alt="" className='h-12 w-12 rounded mr-4' />
                      </div>
                      <div className="">
                        <h4 className="font-semibold mb-1">{instantOrderData?.data['name_' + lang]}</h4>
                        <p className="text-sm text-lybas-gray">{instantOrderData?.data?.material['name_' + lang]} {instantOrderData?.size?.size?.size} {instantOrderData?.size?.price.toFixed(2)} TMT X {instantOrder.quantity}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg mb-1">
                        <button onClick={() => updateProductQuantity(instantOrderData, instantOrderData.quantity - 1)} className='h-full px-[8px] group border-r border-r-lybas-light-gray'>
                          <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                          </svg>
                        </button>
                        <span className='px-[20px] text-semibold'>{instantOrderData.quantity}</span>
                        <button onClick={() => updateProductQuantity(instantOrderData, instantOrderData.quantity + 1)} className='h-full px-[8px] group border-l border-l-lybas-light-gray'>
                          <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                          </svg>
                        </button>
                      </div>
                      <button onClick={() => updateProductQuantity(instantOrderData, 0)} className='flex text-lybas-blue font-semibold tracking-tighter'>{t('delete')}</button>
                    </div>
                    <p className="text-end font-semibold">{(instantOrderData.quantity * instantOrderData?.size?.price).toFixed(2)} {t('tmt')}</p>
                  </div>
                }
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
                <p className="font-semibold">{instantOrder ? (instantOrderData.quantity * instantOrderData?.size?.price).toFixed(2) : calculateTotalPrice(cartData)} TMT</p>
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
            <button type="submit" onClick={sendData} className='lybas-blue-button mt-5'>{t('checkout')}</button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <AddAddressPopup setAddedAddress={handleAddressAdded} open={addAddressPopupOpen} setOpen={setAddAddressPopupOpen} />
    </>
  );
}

export default Checkout;