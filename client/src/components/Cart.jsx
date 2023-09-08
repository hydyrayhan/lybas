import { Fragment, useState, useRef, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { t } from 'i18next'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '/',
    color: 'Salmon',
    price: '90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '/',
    color: 'Blue',
    price: '32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Cart({ open, setOpen }) {
  const cancelButtonRef = useRef(null)
  
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-semibold text-gray-900">{t('myCart')}</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={()=>setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link to={'/'} className='font-semibold' href={product.href}>{product.name}</Link>
                                      </h3>
                                      <p className="ml-4 font-semibold">{product.price}{t('tmt')}</p>
                                    </div>
                                    <p className="mt-1 text-base text-lybas-gray">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">{product.price} {t('tmt')} x {product.quantity}</p>

                                    <div className="flex flex-col justify-right">
                                      <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg">
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
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 text-right hover:text-indigo-500 mt-1"
                                      >
                                        {t('remove')}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className='font-semibold'>{t('totalPrice')}</p>
                        <p className='font-semibold'>262 {t('tmt')}</p>
                      </div>
                      <div className="mt-6" onClick={()=>setOpen(false)}>
                        <Link
                          to="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-lybas-blue px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          {t('checkout')}
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          {t('or')}
                          <button
                            type="button"
                            className="font-medium text-lybas-blue hover:text-indigo-500"
                            onClick={()=>setOpen(false)}
                          >
                            {t('continueShopping')}
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}