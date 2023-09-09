import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';

export default function Popup({ open, setOpen }) {
  // const [open, setOpen] = useState(true)
  const [data, setData] = useState({
    address_name:'',
    name:'',
    address:'',
    phone_number:'',
  });

  const cancelButtonRef = useRef(null)

  const sendData = () => {
    console.log(data);

    setOpen(false);
  }

  const handleChange =({name,value})=>{
    setData({...data, [name]:value})
  }

  useEffect(()=>{
    setData({
      address_name:'',
      name:'',
      address:'',
      phone_number:'',
    })
  },[open])

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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-10 flex justify-between items-center">
                        {t('addNewAddress')}
                        <svg onClick={()=>{setOpen(false)}} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <input onChange={(e) => handleChange(e.target)} name='address_name' type="email" required className='w-full rounded-lg border-2 border-lybas-light-gray p-2 outline-none text-lybas-gray text-sm' placeholder={t('addressName')} />
                        <input onChange={(e) => handleChange(e.target)} name='name' type="email" required className='w-full rounded-lg border-2 border-lybas-light-gray p-2 outline-none text-lybas-gray text-sm' placeholder={t('name')} />
                        <input onChange={(e) => handleChange(e.target)} name='phone_number' type="email" required className='w-full rounded-lg border-2 border-lybas-light-gray p-2 outline-none text-lybas-gray text-sm' placeholder={t('phoneNumber')} />
                        <input onChange={(e) => handleChange(e.target)} name='address' type="email" required className='w-full rounded-lg border-2 border-lybas-light-gray p-2 outline-none text-lybas-gray text-sm' placeholder={t('address')} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 py-3">
                  <button
                    type="button"
                    className="w-full rounded-md bg-lybas-gray px-20 py-2 text-sm text-white shadow-sm hover:bg-gray-500"
                    onClick={sendData}
                  >
                    {t('send')}
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
