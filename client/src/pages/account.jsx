import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb'
import { t } from 'i18next';

// component
import AddAddressPopup from '../components/AddAddressPopup';

function Account() {
  const [contentTitle, setContentTitle] = useState('myAccount');
  const [editAccount, setEditAccount] = useState(false);
  const [accountData, setAccountData] = useState({
    name: "Merdan",
    surname: "Kadyrow",
    password: "geO123!"
  })
  const [addresses, setAddresses] = useState([
    {
      address_name: 'Tejen',
      name: 'Aymuhammet',
      phone_number: '+99364813308',
      address: 'Parasatly 109',
    },
    {
      address_name: 'Tejen',
      name: 'Aymuhammet',
      phone_number: '+99364813308',
      address: 'Parasatly 109',
    },
    {
      address_name: 'Tejen',
      name: 'Aymuhammet',
      phone_number: '+99364813308',
      address: 'Parasatly 109',
    },
  ])
  const [addAddressOpen, setAddAddressOpen] = useState(false);

  const saveProfile = () => {

    setEditAccount(false);
  }

  const renderContent = (content) => {
    if (content === 'myAccount') {
      return (
        <div className="account_card_content col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="account_card_content_title text-xl font-semibold mb-10">{t(contentTitle)}</div>
            {/* my account card form */}
            <div className="account_card_content_form-account grid grid-cols-2 gap-5 pr-20">
              <input type="text" className='input' value={accountData.name} disabled={!editAccount} />
              <input type="text" className='input' value={accountData.surname} disabled={!editAccount} />
              <input type="password" className='input' value={accountData.password} disabled={!editAccount} />
            </div>
          </div>
          {/* my account card edit button */}
          {
            editAccount ?
              <span className='mt-5'>
                <button onClick={() => setEditAccount(false)} className='account_card_content_button px-20 py-2 text-lybas-blue shadow-lybas-1 rounded-lg hover:bg-lybas-light-gray mr-7'>{t("cancel")}</button>
                <button onClick={saveProfile} className='account_card_content_button px-20 py-2 text-white bg-lybas-blue rounded-lg hover:opacity-75'>{t("save")}</button>
              </span>
              :
              <span className='mt-5'>
                <button onClick={() => setEditAccount(true)} className='account_card_content_button px-20 py-2 text-lybas-blue border border-lybas-light-gray rounded-lg hover:bg-lybas-light-gray'>{t("edit")}</button>
              </span>
          }
        </div>
      )
    } else if (content === 'myAddresses') {
      return (
        <div className="account_card_content col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className='flex justify-between items-center mb-10'>
              <div className="account_card_content_title text-xl font-semibold">{t(contentTitle)}</div>
              <div className="account_card_content_number text-lybas-gray text-sm">{addresses.length}/4</div>
            </div>
            {/* my account card form */}
            <div className="account_card_content_cards grid grid-cols-2 gap-5 pr-20">
              {
                addresses.map((address, index) => (
                  <div key={index + 400} className="account_card_content_cards_card flex relative group p-5 rounded-lg border hover:border-lybas-blue">
                    {/* hidden tick icon */}
                    <div className='transition-all duration-300  mr-3 w-0 group-hover:w-5 overflow-hidden'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="#1A54EB" />
                      </svg>
                    </div>
                    {/* content */}
                    <div className='content'>
                      <div className="address_name text-lybas-gray mb-2">{address.address_name}</div>
                      <div className="name text-lybas-gray mb-2">{address.name}</div>
                      <div className="phone_number text-lybas-gray mb-2">{address.phone_number}</div>
                      <div className="address text-lybas-gray">{address.address}</div>
                    </div>
                    {/* Buttons */}
                    <button className='hidden absolute group-hover:block top-5 right-5'>
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.57083 18.275 4.1125C18.2917 4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" fill="#64748B" />
                      </svg>
                    </button>
                    <button className='hidden absolute group-hover:block top-14 right-5'>
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#64748B" />
                      </svg>
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
          {/* my address card add button */}
          <span>
            <button onClick={() => setAddAddressOpen(true)} className='account_card_content_button px-20 py-2 text-white bg-lybas-blue rounded-lg mt-5 hover:opacity-75'>{t("add")}</button>
          </span>
          <AddAddressPopup open={addAddressOpen} setOpen={setAddAddressOpen}/>
        </div>
      )
    }
  }

  return (
    <div className='account container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb />

      <div className="account_title text-3xl font-bold mb-5 tracking-tighter">{t('myAccount')}</div>
      {/* my account card */}
      <div className="account_card min-h-[50vh] shadow-lybas-1 rounded-lg grid grid-cols-3">
        <div className="account_card_links bg-lybas-light-gray p-7">
          <button onClick={() => setContentTitle('myAccount')} className={'w-full text-left px-5 py-3 rounded-lg text-lybas-gray text-lg ' + (contentTitle === 'myAccount' ? 'active' : '')}>{t('profile')}</button>
          <button onClick={() => setContentTitle('myAddresses')} className={'w-full text-left px-5 py-3 rounded-lg text-lybas-gray text-lg ' + (contentTitle === 'myAddresses' ? 'active' : '')}>{t('myAddresses')}</button>
          <button onClick={() => setContentTitle('orders')} className={'w-full text-left px-5 py-3 rounded-lg text-lybas-gray text-lg ' + (contentTitle === 'orders' ? 'active' : '')}>{t('orders')}</button>
          <div className='block px-5 py-3 rounded-lg text-lybas-gray text-lg cursor-pointer'>{t('logout')}</div>
        </div>

        {/* Edit account data card */}
        {renderContent(contentTitle)}
      </div>
    </div>
  );
}

export default Account;
