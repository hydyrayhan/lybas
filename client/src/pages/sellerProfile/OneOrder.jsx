import React, { useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import { t } from 'i18next';

const tableHeader = ['product', 'number', 'price']

function OneOrder() {
  const [open, setOpen] = useState(false);
  return (
    <div className='one-order'>
      <Breadcrumb page={'orders'} pageLink={'/sellerProfile/orders'} link={'1'} name={'Selbi'} />

      <div className="one-order_content bg-white border rounded-lg p-7 mt-5 flex">
        <div className="one-order_content_table w-3/5 mr-5">
          <div className="orders_table border rounded-lg overflow-hidden">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {
                      tableHeader.map((th, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                          {t(th)}
                        </th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                    </td>
                    <td className="px-6 py-4">
                      White
                    </td>
                    <td className="px-6 py-4">
                      Laptop PC
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Mouse 2
                    </td>
                    <td className="px-6 py-4">
                      Black
                    </td>
                    <td className="px-6 py-4">
                      Accessories
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td scope="row" className="px-6 py-4 font-semibold text-black">
                      {t('subtotal')}
                    </td>
                    <td className="px-6 py-4">
                    </td>
                    <td className="px-6 py-4 font-semibold text-black">
                      1320 TMT
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="one-order_content_address w-2/5">
          <div className="title">{t('result')}</div>

          <button onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full border mt-2 flex justify-between font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Dropdown button
            <svg className={"w-2.5 h-2.5 ml-2.5 transition-all " + (open ? 'rotate-180' : 'rotate-0')} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdown" className={"absolute z-10 w-full bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 origin-top transition-all " + (open ? 'scale-y-1' : 'scale-y-0')}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="dropdownDefaultButton">
              <li>
                <button onClick={() => (setOpen(false))} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</button>
              </li>
              <li>
                <button onClick={() => (setOpen(false))} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</button>
              </li>
              <li>
                <button onClick={() => (setOpen(false))} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</button>
              </li>
              <li>
                <button onClick={() => (setOpen(false))} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
              </li>
            </ul>
          </div>

          <div className="name my-5"><span className='font-semibold'>{t('fullName')}:</span><span className='text-lybas-gray'> Selbi</span></div>
          <div className="name mb-5">
            <span className='font-semibold block mb-3'>{t('address')}:</span>
            <span className='text-lybas-gray block mb-1'>Ashgabat</span>
            <span className='text-lybas-gray block mb-1'>Tejen vsooky gaty coy jayy</span>
            <span className='text-lybas-gray block mb-1'>+99364813309</span>
          </div>
          <div className="name my-5"><span className='font-semibold'>{t('dressmaker')}:</span><span className='text-lybas-gray'> Jeren Otelya</span></div>
        </div>
      </div>
    </div>
  );
}

export default OneOrder;
