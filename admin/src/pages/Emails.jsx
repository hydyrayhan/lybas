import { t } from 'i18next';
import Search from '../components/Search';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const tableHeader = ['nameLocation', 'emailPhoneNumber', 'dateTime', 'result']

function Emails() {
  const navigate = useNavigate();
  return (
    <div className='orders-page'>
      <Search title='email' className='' filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />

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
              <tr onClick={()=>navigate('/sellerProfile/emails/1')} className="bg-white border-b cursor-pointer">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Emails;
