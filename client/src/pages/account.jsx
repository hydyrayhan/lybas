import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { t } from 'i18next';

// component
import AddAddressPopup from '../components/popups/addAddressPopup';
import LogoutPopup from '../components/LogoutPopup';

// Mui components for accordion
import { styled } from '@mui/material/styles';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import FeedbackPopup from '../components/popups/feedbackPopup';
import Comment from '../components/Comment';
import AccountOneAddress from '../components/AccountOneAddress';
import MobileSlide from '../components/MobileSlide';

const image1 = require('../assets/images/dressImage.png');

function Account() {
  // Accordion style
  const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  }));

  const [contentTitle, setContentTitle] = useState('myAccount');
  const [editAccount, setEditAccount] = useState(false);
  const [passType, setPassType] = useState('password');
  const [feedbackPopupOpen, setFeedbackPopupOpen] = useState(false);
  const [mobileSlideOpen, setMobileSlideOpen] = useState(false);
  const [accountData, setAccountData] = useState({
    name: 'Merdan',
    surname: 'Kadyrow',
    password: 'geO123!',
    phone_number: '+99364813309'
  });
  const [addresses, setAddresses] = useState([
    {
      province: 'Ahal',
      address: 'Ahal welayaty'
    },
    {
      province: 'Ahal',
      address: 'Ahal welayaty Tejen shaheri Vsoky rayony Dowran kochesi 107-nji jayy'
    },
    {
      province: 'Ahal',
      address: 'Ahal welayaty Tejen shaheri Vsoky rayony Dowran kochesi 107-nji jayy'
    }
  ]);
  const [addAddressOpen, setAddAddressOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  const saveProfile = () => {
    setEditAccount(false);
  };

  const renderContent = (content) => {
    if (content === 'myAccount') {
      return (
        <div className="account_card_content col-span-2 p-7 flex flex-col justify-between hidden sm:block">
          <div>
            <div className="account_card_content_title text-xl font-semibold mb-10">{t(contentTitle)}</div>
            {/* my account card form */}
            <div className="account_card_content_form-account grid grid-cols-2 gap-5 pr-20">
              <div className="account_card_content_form-account_image flex">
                <img className="h-[55px] w-[55px] rounded-full object-cover mr-5" src={image1} alt="" />
                <div className="image_actions flex flex-col justify-center">
                  <div className="image_actions_title font-semibold">{t('editPhoto')}</div>
                  <div className="image_actoins_buttons flex">
                    <label
                      htmlFor={editAccount ? 'upload-image' : ''}
                      className={'text-sm text-semibold text-lybas-blue mr-3 ' + (editAccount && 'cursor-pointer')}
                    >
                      {t('upload')}
                    </label>
                    <input className="hidden" type="file" id="upload-image" />
                    <button disabled={!editAccount} className="text-sm text-semibold">
                      {t('delete')}
                    </button>
                  </div>
                </div>
              </div>
              <div className="free"></div>
              <input type="text" className="input" value={accountData.name} disabled={!editAccount} />
              <input type="text" className="input" value={accountData.surname} disabled={!editAccount} />
              <input type="text" className="input" value={accountData.phone_number} disabled={!editAccount} />
              <label className="input cursor-pointer flex" htmlFor="password">
                <input type={passType} id="password" className="w-full outline-none" value={accountData.password} disabled={!editAccount} />
                {editAccount && (
                  <button onClick={() => setPassType(passType === 'text' ? 'password' : 'text')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19Z"
                        fill="#0E1217"
                      />
                    </svg>
                  </button>
                )}
              </label>
            </div>
          </div>
          {/* my account card edit button */}
          {editAccount ? (
            <span className="mt-5">
              <button
                onClick={() => setEditAccount(false)}
                className="account_card_content_button px-20 py-2 text-lybas-blue shadow-lybas-1 rounded-lg hover:bg-lybas-light-gray mr-7"
              >
                {t('cancel')}
              </button>
              <button
                onClick={saveProfile}
                className="account_card_content_button px-20 py-2 text-white bg-lybas-blue rounded-lg hover:opacity-75"
              >
                {t('save')}
              </button>
            </span>
          ) : (
            <span className="mt-5">
              <button
                onClick={() => setEditAccount(true)}
                className="account_card_content_button px-20 py-2 text-lybas-blue border border-lybas-light-gray rounded-lg hover:bg-lybas-light-gray"
              >
                {t('edit')}
              </button>
            </span>
          )}
        </div>
      );
    } else if (content === 'myAddresses') {
      return (
        <div className="account_card_content col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-10">
              <div className="account_card_content_title text-xl font-semibold">{t(contentTitle)}</div>
              <div className="account_card_content_number text-lybas-gray text-sm">{addresses.length}/4</div>
            </div>
            {/* my account card form */}
            <div className="account_card_content_cards grid grid-cols-2 gap-5 pr-20">
              {addresses.map((address, index) => (
                <AccountOneAddress key={index} address={address} action={true} />
              ))}
            </div>
          </div>
          {/* my address card add button */}
          <span>
            <button
              onClick={() => setAddAddressOpen(true)}
              className="account_card_content_button px-20 py-2 text-white bg-lybas-blue rounded-lg mt-5 hover:opacity-75"
            >
              {t('add')}
            </button>
          </span>
          <AddAddressPopup open={addAddressOpen} setOpen={setAddAddressOpen} />
        </div>
      );
    } else if (content === 'orders') {
      return (
        <div className="account_card_order col-span-2 w-[400px] md:w-full">
          <div className="account_card_order_header grid grid-cols-5 gap-4 py-4 px-10 bg-gray-200">
            <div className="font-bold">{t('status')}</div>
            <div className="font-bold">{t('orderNumber')}</div>
            <div className="font-bold text-right">{t('date')}</div>
            <div className="font-bold text-center">{t('totalPrice')}</div>
            <div className="font-bold text-right">{t('more')}</div>
          </div>
          <div className="account_card_order_orders p-5">
            <div className="w-full account_card_order_list rounded-lg border mb-5">
              <div className="account_card_order_list_top grid grid-cols-5 gap-4 px-5 py-2 flex items-center border-b">
                <div className="account_card_order_list_top_col text-left text-orange-600">Expected</div>
                <div className="account_card_order_list_top_col text-left text-lybas-gray">2ufid283</div>
                <div className="account_card_order_list_top_col text-right text-lybas-gray">10.02.30/21:33</div>
                <div className="account_card_order_list_top_col text-center text-lybas-gray">1158TMT</div>
                <div className="account_card_order_list_top_col flex justify-end items-center">
                  <svg
                    className="w-8 h-8 text-gray-400 mx-1 rotate-90 cursor-pointer p-2 box-size"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="account_card_order_list_bottom h-0 overflow-hidden">
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3 border-b">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-3">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="space col-span-2"></div>
                  <div className="price font-bold col-span-2 text-center">815 {t('tmt')}</div>
                  <div className="space col-span-2"></div>
                </div>
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3 border-b">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-3">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="space col-span-2"></div>
                  <div className="price font-bold col-span-2 text-center">815 {t('tmt')}</div>
                  <div className="space col-span-2"></div>
                </div>
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-3">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="space col-span-2"></div>
                  <div className="price font-bold col-span-2 text-center">815 {t('tmt')}</div>
                  <div className="space col-span-2"></div>
                </div>
              </div>
            </div>
            <div className="w-full account_card_order_list rounded-lg border mb-5">
              <div className="account_card_order_list_top grid grid-cols-5 gap-4 px-5 py-2 flex items-center border-b">
                <div className="account_card_order_list_top_col text-left text-green-600">Accepted</div>
                <div className="account_card_order_list_top_col text-left text-lybas-gray">2ufid283</div>
                <div className="account_card_order_list_top_col text-right text-lybas-gray">10.02.30/21:33</div>
                <div className="account_card_order_list_top_col text-center text-lybas-gray">1158TMT</div>
                <div className="account_card_order_list_top_col flex justify-end items-center">
                  <svg
                    className="w-8 h-8 text-gray-400 mx-1 rotate-90 cursor-pointer p-2 box-size"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="account_card_order_list_bottom h-auto overflow-hidden">
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3 border-b">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-4">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="price font-bold col-span-2 text-end">815 {t('tmt')}</div>
                  <div className="space col-span-3 text-right">
                    <button className="text-white px-3 py-2 rounded-lg bg-lybas-blue" onClick={() => setFeedbackPopupOpen(true)}>
                      {t('feedback')}
                    </button>
                  </div>
                </div>
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3 border-b">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-4">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="price font-bold col-span-2 text-end">815 {t('tmt')}</div>
                  <div className="space col-span-3 text-right">
                    <button className="text-white px-3 py-2 rounded-lg bg-lybas-blue" onClick={() => setFeedbackPopupOpen(true)}>
                      {t('feedback')}
                    </button>
                  </div>
                </div>
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3 border-b">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-4">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  {/* <div className="space col-span-2"></div> */}
                  <div className="price font-bold col-span-2 text-end">815 {t('tmt')}</div>
                  <div className="space col-span-3 text-right">
                    <button className="text-white px-3 py-2 rounded-lg bg-lybas-blue" onClick={() => setFeedbackPopupOpen(true)}>
                      {t('feedback')}
                    </button>
                  </div>
                </div>
                {/* <Accordion>
                <AccordionSummary>
                </AccordionSummary>
                <AccordionDetails>hello <br />jfkdlsfd  <br /></AccordionDetails>
              </Accordion> */}
              </div>
            </div>
            <div className="w-full account_card_order_list rounded-lg border">
              <div className="account_card_order_list_top grid grid-cols-5 gap-4 px-5 py-2 flex items-center border-b">
                <div className="account_card_order_list_top_col text-left text-red-600">Cancelled</div>
                <div className="account_card_order_list_top_col text-left text-lybas-gray">2ufid283</div>
                <div className="account_card_order_list_top_col text-right text-lybas-gray">10.02.30/21:33</div>
                <div className="account_card_order_list_top_col text-center text-lybas-gray">1158TMT</div>
                <div className="account_card_order_list_top_col flex justify-end items-center">
                  <svg
                    className="w-8 h-8 text-gray-400 mx-1 rotate-90 cursor-pointer p-2 box-size"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="account_card_order_list_bottom h-0 overflow-hidden">
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3 border-b">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-3">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="space col-span-2"></div>
                  <div className="price font-bold col-span-2 text-center">815 {t('tmt')}</div>
                  <div className="space col-span-2"></div>
                </div>
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3 border-b">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-3">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="space col-span-2"></div>
                  <div className="price font-bold col-span-2 text-center">815 {t('tmt')}</div>
                  <div className="space col-span-2"></div>
                </div>
                <div className="account_card_order_list_bottom_order grid grid-cols-12 gap-4 flex items-center px-5 py-3">
                  <img className="col-span-1 rounded-lg" src={image1} alt="" />
                  <div className="name-price-quantity col-span-3">
                    <div className="name font-semibold">Hollo</div>
                    <div className="price-quantity flex text-[12px] text-lybas-gray">
                      <div className="material mr-2">Pombarh</div>
                      <div className="size mr-2">3XL</div>
                      <div className="price">815{t('tmt')} X 3</div>
                    </div>
                  </div>
                  <div className="quantity col-span-2 text-right font-semibold">1 pcs</div>
                  <div className="space col-span-2"></div>
                  <div className="price font-bold col-span-2 text-center">815 {t('tmt')}</div>
                  <div className="space col-span-2"></div>
                </div>
                {/* <Accordion>
                <AccordionSummary>
                </AccordionSummary>
                <AccordionDetails>hello <br />jfkdlsfd  <br /></AccordionDetails>
              </Accordion> */}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (content === 'myFeedback') {
      return (
        <div className="account_card_feedback col-span-2 p-7 flex flex-col max-h-full">
          <div className="account_card_feedback_header text-xl font-bold mb-10">{t('myFeedback')}</div>
          <div className="account_card_feedback_feedbacks max-h-[38vh] overflow-auto pr-3">
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="account container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb />

      <div className="account_title text-3xl font-bold mb-5 tracking-tighter">{t('myAccount')}</div>
      {/* my account card */}
      <div className="account_card min-h-[50vh] shadow-lybas-1 rounded-lg grid grid-cols-1 sm:grid-cols-3">
        <div className="account_card_links bg-lybas-light-gray p-7">
          <button
            onClick={() => setContentTitle('myAccount')}
            className={'w-full text-left px-5 py-3 rounded-lg text-lybas-gray text-lg ' + (contentTitle === 'myAccount' ? 'active' : '')}
          >
            {t('profile')}
          </button>
          <button
            onClick={() => setContentTitle('myAddresses')}
            className={'w-full text-left px-5 py-3 rounded-lg text-lybas-gray text-lg ' + (contentTitle === 'myAddresses' ? 'active' : '')}
          >
            {t('myAddresses')}
          </button>
          <button
            onClick={() => setContentTitle('orders')}
            className={'w-full text-left px-5 py-3 rounded-lg text-lybas-gray text-lg ' + (contentTitle === 'orders' ? 'active' : '')}
          >
            {t('orders')}
          </button>
          <button
            onClick={() => setContentTitle('myFeedback')}
            className={'w-full text-left px-5 py-3 rounded-lg text-lybas-gray text-lg ' + (contentTitle === 'myFeedback' ? 'active' : '')}
          >
            {t('myFeedback')}
          </button>
          <div onClick={() => setLogoutOpen(true)} className="block px-5 py-3 rounded-lg text-lybas-gray text-lg cursor-pointer">
            {t('logout')}
          </div>
        </div>

        {/* Edit account data card */}
        {renderContent(contentTitle)}
        <MobileSlide open={mobileSlideOpen} setOpen={setMobileSlideOpen}>
        </MobileSlide>
        <LogoutPopup open={logoutOpen} setOpen={setLogoutOpen} />
        <FeedbackPopup open={feedbackPopupOpen} setOpen={setFeedbackPopupOpen} />
      </div>
    </div>
  );
}

export default Account;
