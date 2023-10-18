import { t } from 'i18next';
import Search from './components/Search';
import React from 'react';

const tableHeader = ['clientPhoneNumber', 'product', 'number', 'dateTime', 'status']

function Orders() {
  return (
    <div className='orders-page'>
      <Search title='orders' className='' filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />

      <div className="orders_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden">
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-gray-500 dark:text-gray-400">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  $2999
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
                <td className="px-6 py-4">
                  $1999
                </td>
                <td className="px-6 py-4">
                  $1999
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </td>
                <td className="px-6 py-4">
                  Black
                </td>
                <td className="px-6 py-4">
                  Accessories
                </td>
                <td className="px-6 py-4">
                  $99
                </td>
                <td className="px-6 py-4">
                  $99
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>


  );
}

export default Orders;
