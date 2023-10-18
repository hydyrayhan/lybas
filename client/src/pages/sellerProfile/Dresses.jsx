import React from 'react';
import Search from './components/Search';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { Switch } from "@material-tailwind/react";

const tableHeader = ['nameOfDressAndDressmaker', 'price', 'fabric', 'dateTime', 'edit', 'action']

function Dresses() {
  return (
    <div className='dresses'>
      <Search title='dresses' className='mt-5' action={{ link: '/sellerProfile/dresses/add', text: 'Add dress' }} filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />

      <div className="dresses_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden">
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
                  <Link to={'#'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#1A54EB" />
                    </svg>
                  </Link>
                </td>
                <td className="px-6 py-4 flex justify-between items-center">
                  <button className='mr-3'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                    </svg>
                  </button>
                  <Switch
                    id="custom-switch-component"
                    // ripple={false}
                    className="h-full w-full checked:bg-[#2ec946]"
                    containerProps={{
                      className: "w-11 h-6",
                    }}
                    circleProps={{
                      className: "before:hidden left-0.5 border-none",
                    }}
                  />
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

export default Dresses;
