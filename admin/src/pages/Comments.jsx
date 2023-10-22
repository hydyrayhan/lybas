import React from 'react';
import Search from '../components/Search';
import { Rating } from "@material-tailwind/react";
import { t } from 'i18next';
import Toggle from '../components/Toggle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

const tableHeader = ['nameLocation', 'commentRating', 'dateTime', 'action']

function Comments() {
  return (
    <div className='comments py-5'>
      <Search title='comments' className='' filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />
      <div className="comments_table mt-5 shadow-lybas-1 rounded-lg overflow-auto">
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
              <tr className="bg-white border-b">
                <td scope="row" className="w-1/5 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                  Apple MacBook Pro 17"
                </td>
                <td className="px-6 py-4 w-2/5">
                  <Rating value={4} className='star-for-size' readonly />
                  <div className="text line-clamp-2">Lorem ipsum dolor sit amet consecteturipsum dolor sit amet consectetur, adipisicing elit. Atque, ad!</div>
                </td>
                <td className="px-6 py-4 w-1/5">
                  Laptop
                </td>
                <td className="px-6 py-4 flex items-center h-[100px] min-w-1/5">
                  <Link to={'/comments/1'} className='mr-3'>
                    <OpenInNewIcon sx={{color:'green'}}/>
                  </Link>

                  <button className='mr-3'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                    </svg>
                  </button>

                  <Toggle />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Comments;
