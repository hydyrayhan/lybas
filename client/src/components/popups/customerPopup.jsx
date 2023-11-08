import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import axios from 'axios';
import ip from '../../common/Config';

export default function CustomerPopup({ open, setOpen, veri }) {

  const cancelButtonRef = useRef(null)
  const [errorText, setErrorText] = useState('');
  const [isSignIn, setIsSignIn] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [data, setData] = useState({
    user_phone: '',
    password: '',
    passwordConfirm: '',
    user_checked_phone: '',
    code: '',
  })

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }

  const sendDataUp = async () => {
    if (data.user_phone && data.password && data.passwordConfirm) {
      try {
        const res = await axios.post(ip + '/users/signup', { user_phone: data.user_phone });
        if(res.status === 200){
          localStorage.setItem('verification-data',JSON.stringify(data));
          setOpen(false);
          veri(true);
        }
      } catch (error) {
        console.log(error)
        setErrorText(error.response.data.message);
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
                <div className="bg-white px-10 py-7">
                  <div className="">
                    <div className="mt-3 text-center">
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-8 flex justify-between items-center">
                        {t('becomeMember')}
                        <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                      <div className="buttons flex">
                        <button onClick={() => setIsSignIn(!isSignIn)} className={'w-1/2 border-2 py-2 rounded-lg font-bold ' + (!isSignIn && 'border-lybas-blue text-lybas-blue')}>{t('signUp')}</button>
                        <button onClick={() => setIsSignIn(!isSignIn)} className={'w-1/2 border-2 py-2 rounded-lg font-bold ' + (isSignIn && 'border-lybas-blue text-lybas-blue')}>{t('signIn')}</button>
                      </div>
                      <div className="inputs py-3">
                        <input type="text" name='user_phone' onChange={handleData} className='input w-full mb-3' placeholder='+993' />
                        <input type="password" name='password' onChange={handleData} className='input w-full mb-3' placeholder={t('password') + "*"} />
                        {
                          !isSignIn &&
                          <input type="password" name='passwordConfirm' onChange={handleData} className='input w-full mb-3' placeholder={t('confirmPassword') + '*'} />
                        }
                        <div className='flex justify-between'>
                          <button className='flex items-center' onClick={() => { setCheckbox(!checkbox) }}>
                            {
                              !checkbox ?
                                <svg className='cursor-pointer' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.75" y="0.75" width="28.5" height="28.5" rx="7.25" fill="white" />
                                  <rect x="0.75" y="0.75" width="28.5" height="28.5" rx="7.25" stroke="#F7F7F7" strokeWidth="1.5" />
                                </svg> :
                                <svg className='cursor-pointer' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" fill="#1A54EB" />
                                  <path d="M12.5516 21.0001L6.85156 15.3001L8.27656 13.8751L12.5516 18.1501L21.7266 8.9751L23.1516 10.4001L12.5516 21.0001Z" fill="white" />
                                  <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="#1A54EB" />
                                </svg>
                            }
                            <span className='ml-3 text-lybas-gray'>{t('rememberMe')}</span>
                          </button>
                          <span className='text-lybas-blue underline underline-offset-1'>{t('forgotYourPassword')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-10 text-red-600'>{errorText}</div>
                <div className="px-10 pt-3 pb-7 grid grid-cols-2 gap-5">
                  <button
                    type="button"
                    className="rounded-md bg-lybas-blue col-span-2 py-2 text-sm text-white hover:bg-blue-800"
                    onClick={() => (isSignIn ? '' : sendDataUp())}
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
