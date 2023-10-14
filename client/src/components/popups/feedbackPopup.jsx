import { Fragment, useEffect, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';

export default function FeedbackPopup({ open, setOpen }) {
  const [provinceOpen, setProvinceOpen] = useState(false)
  const [dataFull, setDataFull] = useState(false);

  const data = useRef({
    province: '',
    address: '',
  })

  const cancelButtonRef = useRef(null)

  const sendData = () => {
    setOpen(false);
  }

  useEffect(() => {
    data.current = {
      province: '',
      address: '',
    }
  }, [open])

  const checkDataFull = () => {
    for (const key in data.current) {
      if (!data.current[key]) {
        setDataFull(false);
        return
      }
    }
    setDataFull(true);
  }

  const handleChange = ({ name, value }) => {
    data.current.address = value;
    checkDataFull();
  }

  const selectProvince = (province) => {
    data.current.province = province;
    checkDataFull();
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
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-3 flex justify-end items-center">
                        <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-5">
                        <div className="feedbackPopup_title mb-2">{t('leaveComment')}</div>
                        <div className="feedbackPopup_definition-rate text-base">{t('giveRate')}</div>
                        <div className="feedbackPopup_stars flex justify-center mt-3">
                          <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5007 4.08334L30.8094 16.8642L44.9173 18.9263L34.709 28.8692L37.1182 42.9158L24.5007 36.2804L11.8832 42.9158L14.2923 28.8692L4.08398 18.9263L18.1919 16.8642L24.5007 4.08334Z" fill="#EDEDED" />
                          </svg>
                          <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5007 4.08334L30.8094 16.8642L44.9173 18.9263L34.709 28.8692L37.1182 42.9158L24.5007 36.2804L11.8832 42.9158L14.2923 28.8692L4.08398 18.9263L18.1919 16.8642L24.5007 4.08334Z" fill="#EDEDED" />
                          </svg>
                          <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5007 4.08334L30.8094 16.8642L44.9173 18.9263L34.709 28.8692L37.1182 42.9158L24.5007 36.2804L11.8832 42.9158L14.2923 28.8692L4.08398 18.9263L18.1919 16.8642L24.5007 4.08334Z" fill="#EDEDED" />
                          </svg>
                          <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5007 4.08334L30.8094 16.8642L44.9173 18.9263L34.709 28.8692L37.1182 42.9158L24.5007 36.2804L11.8832 42.9158L14.2923 28.8692L4.08398 18.9263L18.1919 16.8642L24.5007 4.08334Z" fill="#EDEDED" />
                          </svg>
                          <svg className='cursor-pointer' width="35" height="35" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5007 4.08334L30.8094 16.8642L44.9173 18.9263L34.709 28.8692L37.1182 42.9158L24.5007 36.2804L11.8832 42.9158L14.2923 28.8692L4.08398 18.9263L18.1919 16.8642L24.5007 4.08334Z" fill="#EDEDED" />
                          </svg>
                        </div>
                      </Dialog.Title>
                      <div className="">
                        <textarea className='input w-full resize-none h-[120px]' name="" id="" placeholder={t('enterComment')}></textarea>
                        <div className="flex items-center justify-center w-full mt-3">
                          <label for="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-lybas-blue border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg className='mb-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#0E1217" />
                              </svg>
                              <p className="mb-2 text-sm text-lybas-blue">{t('clickToUpload')}</p>
                              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px) 0/8</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 py-3">
                  <button
                    type="button"
                    className={"w-full rounded-md px-20 py-2 text-sm text-white shadow-sm " + (dataFull ? 'bg-lybas-blue' : 'bg-lybas-gray')}
                    onClick={sendData}
                    disabled={!dataFull}
                  >
                    {t('addComment')}
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
