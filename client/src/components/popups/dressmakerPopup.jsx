import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import { AxiosCustom } from '../../common/AxiosInstance';
import axios from 'axios';
import ip from '../../common/Config';
import { useNavigate } from 'react-router-dom';
import { Valid } from '../../common/Valid';

export default function DressmakerPopup({ open, setOpen, waitFunc }) {
  const cancelButtonRef = useRef(null)
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [data, setData] = useState({
    phone_number: '',
    password: ''
  })

  const [dataUp, setDataUp] = useState({
    phone_number: '',
    name: '',
    name1: '',
    surname: '',
  })

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }
  const handleDataUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUp({ ...dataUp, [name]: value });
  }


  const sendData = async () => {
    if (Valid((isSignIn ? data : dataUp))) {
      try {
        var res;
        if (isSignIn) {
          res = await axios.post(ip + '/seller/login', data);
        } else {
          res = await axios.post(ip + '/seller/account/new-account', { dataUp: { name: dataUp.name, phone_number: dataUp.phone_number, dataUp: { name: dataUp.name1, surname: dataUp.surname } } });
        }
        if (res.status === 200 && isSignIn) {
          localStorage.setItem('lybas-seller-token', res.data.token);
          localStorage.setItem('lybas-seller', JSON.stringify(res.data.data.seller));
          navigate('/sellerProfile')
        } else {
          waitFunc(true);
          setOpen(false);
        }
      } catch (error) {
        console.log(error)
        // setErrorText(response.data.message);
      }
    } else {
      setErrorText(t('fillTheGaps'))
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-10 pt-7">
                  <div className="">
                    <div className="mt-3 text-center">
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-8 flex justify-between items-center">
                        {t('dressmaker')}
                        <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                      <div className="buttons flex">
                        <button onClick={() => setIsSignIn(!isSignIn)} className={'w-1/2 border-2 py-2 rounded-lg font-bold ' + (!isSignIn && 'border-lybas-blue text-lybas-blue')}>{t('signUp')}</button>
                        <button onClick={() => setIsSignIn(!isSignIn)} className={'w-1/2 border-2 py-2 rounded-lg font-bold ' + (isSignIn && 'border-lybas-blue text-lybas-blue')}>{t('signIn')}</button>
                      </div>
                      {
                        !isSignIn ?
                          <div className="inputs py-3">
                            <input type="text" name='name1' onChange={handleDataUp} className='input w-full mb-3' placeholder={t('firstName')} />
                            <input type="text" name='surname' onChange={handleDataUp} className='input w-full mb-3' placeholder={t('lastName')} />
                            <input type="text" name='name' onChange={handleDataUp} className='input w-full mb-3' placeholder={t('bussinessName')} />
                            <input type="text" name='phone_number' onChange={handleDataUp} className='input w-full' placeholder={t('phoneNumber')} />
                          </div> :
                          <div className="inputs py-3">
                            <input type="text" name='phone_number' onChange={handleData} className='input w-full mb-3' placeholder={'+9936'} />
                            <input type='password' name='password' onChange={handleData} className='input w-full mb-3' placeholder={t('password')} />
                          </div>
                      }
                    </div>
                  </div>
                </div>
                <div className='px-10 text-red-600'>{errorText}</div>
                <div className="px-10 pt-3 pb-7 grid grid-cols-2 gap-5">
                  <button
                    onClick={sendData}
                    type="button"
                    className="rounded-md bg-lybas-blue col-span-2 py-2 text-sm text-white hover:bg-blue-800"
                  >
                    {t('confirm')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
