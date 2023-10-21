import React, { useState } from 'react';
import Search from '../components/Search';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';


const tableHeader = [{ text: 'nameLocation', col: '3' }, { text: 'email', col: '3' }, { text: 'dateTime', col: '2' }, { text: 'edit', col: '1' }, { text: 'action', col: '2' }]

function Dressmakers() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='dresses'>
      <Search title='dressmaker' className='mt-5' action={{ link: '/dressmaker/add', text: 'addDressmaker' }} filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />
      <div className="dresses_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden">
        <div className="relative overflow-x-auto">
          <div className="table-with-grid">
            <div className="table-with-grid_tr grid grid-cols-11 gap-5 bg-gray-50 py-4 px-5 border-b">
              {
                tableHeader.map((head, index) => (
                  <div className={"table-with-grid_tr_head font-bold col-span-" + head.col} key={index}>{t(head.text)}</div>
                ))
              }
            </div>
            <div className="table-with-grid_tr grid grid-cols-11 gap-5 bg-white py-4 px-5 border-b">
              <div className={"table-with-grid_tr_data col-span-3 flex items-center"}>
                <img className='w-12 h-12 rounded-lg object-cover mr-3' src={require('./../assets/images/dressImage.png')} alt="" />
                <div className="data">
                  <div className="name font-bold">Jeren</div>
                  <div className="province text-lybas-gray text-sm">Mary</div>
                </div>
              </div>
              <div className={"table-with-grid_tr_data col-span-3 flex items-center text-lybas-gray"}>
                hydyrowayhan8@gmail.com
              </div>
              <div className={"table-with-grid_tr_data col-span-2 flex items-center text-lybas-gray"}>
                02.12.2024,12.25
              </div>
              <div className={"table-with-grid_tr_data col-span-1 flex items-center text-lybas-gray"}>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#1A54EB" />
                  </svg>
                </button>
              </div>
              <div className={"table-with-grid_tr_data col-span-2 flex justify-between items-center text-lybas-gray"}>
                <button className='mr-2'><LoginIcon color='success' /></button>
                <button className='mr-2'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                  </svg>
                </button>
                <div
                  className={"md:w-10 md:h-5 w-10 h-4 flex items-center rounded-full p-1 cursor-pointer " + (toggle ? 'bg-green-600' : 'bg-gray-300')}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <div
                    className={
                      "bg-white md:w-4 md:h-4 h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out " +
                      (toggle ? ' transform translate-x-4' : '')
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* <table className="w-full text-left text-gray-500 dark:text-gray-400">
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
                <td scope="row" className="max-w-[400px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17" Apple MacBook Pro 17" Apple MacBook Pro 17" Apple MacBook Pro 17"
                </td>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  <Link to={'#'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#1A54EB" />
                    </svg>
                  </Link>
                </td>
                <td className="px-6 py-4 flex justify-between items-center">
                  <button className='mr-3'><LoginIcon color='success'/></button>
                  <button className='mr-3'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                    </svg>
                  </button>

                  <div
                    className={"md:w-10 md:h-5 w-10 h-4 flex items-center rounded-full p-1 cursor-pointer " + (toggle ? 'bg-green-600' : 'bg-gray-300')}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <div
                      className={
                        "bg-white md:w-4 md:h-4 h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out " +
                        (toggle ? ' transform translate-x-4' : '')
                      }
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

      </div>
    </div>
  );
}

export default Dressmakers;
