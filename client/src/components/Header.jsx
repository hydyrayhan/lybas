import { Fragment, useState, useContext } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconButton, SearchIcon } from "@material-tailwind/react";


import { AppContext } from '../App';

const navigation = {
  pages: [
    { name: 'home', href: '#' },
    { name: 'dresses', href: '#' },
    { name: 'dressmakers', href: '#' },
    { name: 'blog', href: '#' },
  ],
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const { t } = useContext(AppContext);

  const styleHeader = {
    background: '#F6F6F6'
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.2)' }}>
        <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={styleHeader}>
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <svg width="87" height="21" viewBox="0 0 87 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.524 16.304H11.796V20H0.736V0.343999H5.524V16.304ZM30.9358 0.343999L24.1318 13.504V20H19.3438V13.504L12.5398 0.343999H17.9718L21.7798 8.576L25.5598 0.343999H30.9358ZM44.7649 9.92C45.9036 10.1627 46.8182 10.732 47.5089 11.628C48.1996 12.5053 48.5449 13.5133 48.5449 14.652C48.5449 16.2947 47.9662 17.6013 46.8089 18.572C45.6702 19.524 44.0742 20 42.0209 20H32.8649V0.343999H41.7129C43.7102 0.343999 45.2689 0.801332 46.3889 1.716C47.5276 2.63067 48.0969 3.872 48.0969 5.44C48.0969 6.59733 47.7889 7.55867 47.1729 8.324C46.5756 9.08933 45.7729 9.62133 44.7649 9.92ZM37.6529 8.296H40.7889C41.5729 8.296 42.1702 8.128 42.5809 7.792C43.0102 7.43733 43.2249 6.924 43.2249 6.252C43.2249 5.58 43.0102 5.06667 42.5809 4.712C42.1702 4.35733 41.5729 4.18 40.7889 4.18H37.6529V8.296ZM41.1809 16.136C41.9836 16.136 42.5996 15.9587 43.0289 15.604C43.4769 15.2307 43.7009 14.6987 43.7009 14.008C43.7009 13.3173 43.4676 12.776 43.0009 12.384C42.5529 11.992 41.9276 11.796 41.1249 11.796H37.6529V16.136H41.1809ZM63.5579 16.528H56.2219L55.0459 20H50.0339L57.1459 0.343999H62.6899L69.8019 20H64.7339L63.5579 16.528ZM62.3259 12.832L59.8899 5.636L57.4819 12.832H62.3259ZM79.0785 20.196C77.6411 20.196 76.3531 19.9627 75.2145 19.496C74.0758 19.0293 73.1611 18.3387 72.4705 17.424C71.7985 16.5093 71.4438 15.408 71.4065 14.12H76.5025C76.5771 14.848 76.8291 15.408 77.2585 15.8C77.6878 16.1733 78.2478 16.36 78.9385 16.36C79.6478 16.36 80.2078 16.2013 80.6185 15.884C81.0291 15.548 81.2345 15.0907 81.2345 14.512C81.2345 14.0267 81.0665 13.6253 80.7305 13.308C80.4131 12.9907 80.0118 12.7293 79.5265 12.524C79.0598 12.3187 78.3878 12.0853 77.5105 11.824C76.2411 11.432 75.2051 11.04 74.4025 10.648C73.5998 10.256 72.9091 9.67733 72.3305 8.912C71.7518 8.14667 71.4625 7.148 71.4625 5.916C71.4625 4.08667 72.1251 2.65867 73.4505 1.632C74.7758 0.586666 76.5025 0.0639997 78.6305 0.0639997C80.7958 0.0639997 82.5411 0.586666 83.8665 1.632C85.1918 2.65867 85.9011 4.096 85.9945 5.944H80.8145C80.7771 5.30933 80.5438 4.81467 80.1145 4.46C79.6851 4.08667 79.1345 3.9 78.4625 3.9C77.8838 3.9 77.4171 4.05867 77.0625 4.376C76.7078 4.67467 76.5305 5.11333 76.5305 5.692C76.5305 6.32667 76.8291 6.82133 77.4265 7.176C78.0238 7.53067 78.9571 7.91333 80.2265 8.324C81.4958 8.75333 82.5225 9.164 83.3065 9.556C84.1091 9.948 84.7998 10.5173 85.3785 11.264C85.9571 12.0107 86.2465 12.972 86.2465 14.148C86.2465 15.268 85.9571 16.2853 85.3785 17.2C84.8185 18.1147 83.9971 18.8427 82.9145 19.384C81.8318 19.9253 80.5531 20.196 79.0785 20.196Z" fill="#0E1217" />
                  </svg>
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {t(page.name)}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className='ml-auto w-full max-w-lg flex items-center'>
                <form className="w-full px-4">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="rgba(14, 18, 23, 1)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.3}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder={t('search')}
                      className="w-full py-2 pl-12 pr-4 text-gray-500 rounded-lg outline-none focus:bg-white focus:border-indigo-600 "
                      style={styleHeader}
                    />
                  </div>
                </form>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H4C4 3.61667 4.4875 2.4375 5.4625 1.4625C6.4375 0.4875 7.61667 0 9 0C10.3833 0 11.5625 0.4875 12.5375 1.4625C13.5125 2.4375 14 3.61667 14 5H16C16.55 5 17.0208 5.19583 17.4125 5.5875C17.8042 5.97917 18 6.45 18 7V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H2ZM9 13C10.3833 13 11.5625 12.5125 12.5375 11.5375C13.5125 10.5625 14 9.38333 14 8H12C12 8.83333 11.7083 9.54167 11.125 10.125C10.5417 10.7083 9.83333 11 9 11C8.16667 11 7.45833 10.7083 6.875 10.125C6.29167 9.54167 6 8.83333 6 8H4C4 9.38333 4.4875 10.5625 5.4625 11.5375C6.4375 12.5125 7.61667 13 9 13ZM6 5H12C12 4.16667 11.7083 3.45833 11.125 2.875C10.5417 2.29167 9.83333 2 9 2C8.16667 2 7.45833 2.29167 6.875 2.875C6.29167 3.45833 6 4.16667 6 5Z" fill="#64748B" />
                    </svg>
                  </a>
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 17V15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H16V17H0ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20Z" fill="#64748B" />
                    </svg>
                  </a>
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18.9999L8.55 17.6999C6.86667 16.1832 5.475 14.8749 4.375 13.7749C3.275 12.6749 2.4 11.6874 1.75 10.8124C1.1 9.9374 0.645833 9.13324 0.3875 8.3999C0.129167 7.66657 0 6.91657 0 6.1499C0 4.58324 0.525 3.2749 1.575 2.2249C2.625 1.1749 3.93333 0.649902 5.5 0.649902C6.36667 0.649902 7.19167 0.833236 7.975 1.1999C8.75833 1.56657 9.43333 2.08324 10 2.7499C10.5667 2.08324 11.2417 1.56657 12.025 1.1999C12.8083 0.833236 13.6333 0.649902 14.5 0.649902C16.0667 0.649902 17.375 1.1749 18.425 2.2249C19.475 3.2749 20 4.58324 20 6.1499C20 6.91657 19.8708 7.66657 19.6125 8.3999C19.3542 9.13324 18.9 9.9374 18.25 10.8124C17.6 11.6874 16.725 12.6749 15.625 13.7749C14.525 14.8749 13.1333 16.1832 11.45 17.6999L10 18.9999Z" fill="#64748B" />
                    </svg>
                  </a>
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">

                  </a>

                  <span className="h-8 w-px" style={{ background: '#64748B' }} aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 10C8.625 10 7.44792 9.51042 6.46875 8.53125C5.48958 7.55208 5 6.375 5 5C5 3.625 5.48958 2.44792 6.46875 1.46875C7.44792 0.489583 8.625 0 10 0C11.375 0 12.5521 0.489583 13.5312 1.46875C14.5104 2.44792 15 3.625 15 5C15 6.375 14.5104 7.55208 13.5312 8.53125C12.5521 9.51042 11.375 10 10 10ZM0 20V16.5C0 15.7917 0.182292 15.1406 0.546875 14.5469C0.911458 13.9531 1.39583 13.5 2 13.1875C3.29167 12.5417 4.60417 12.0573 5.9375 11.7344C7.27083 11.4115 8.625 11.25 10 11.25C11.375 11.25 12.7292 11.4115 14.0625 11.7344C15.3958 12.0573 16.7083 12.5417 18 13.1875C18.6042 13.5 19.0885 13.9531 19.4531 14.5469C19.8177 15.1406 20 15.7917 20 16.5V20H0Z" fill="#64748B" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
