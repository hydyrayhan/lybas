import { t } from 'i18next';
import React, { useState } from 'react';
import { AxiosCustom } from '../common/AxiosInstance';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [data,setData] = useState({
    username:"",
    password:"",
  })
  const navigate = useNavigate();
  const handleData = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const sendData = async (e)=>{
    e.preventDefault();

    try {
      const res = await AxiosCustom('/login',{method:"POST",data})
      if(res.status === 200){
        localStorage.setItem('lybas-token',res.data.token)
        navigate('/')
      }
    } catch (error) {
      alert(error.response.data.message);
      setData({username:"",password:""});
    }
  }
  return (
    <div className='login-background bg-gray-100 w-screen h-screen'>
      <div className='login w-4/5 m-auto translate-y-1/2 flex'>
        <div className="login_form w-1/2 p-20 bg-white">
          <div className="login_form_title font-bold text-3xl mb-5">{t('signIn')}</div>
          <form onSubmit={sendData}>
            <label className="mb-2 block cursor-pointer" htmlFor='login'>{t('login')}</label>
            <input type="text" id='login' name='username' onChange={handleData} required className='outline-none border w-full py-2 px-4 mb-4 rounded-lg text-lybas-gray' />
            <label className="mb-2 block cursor-pointer">{t('password')}</label>
            <div className="input_password pr-3 mb-5 text-lybas-gray flex justify-between items-center border rounded-lg">
              <input type={passwordOpen ? 'text' : 'password'} name='password' onChange={handleData} required className='outline-none py-2 px-4 w-full mr-3 text-lybas-gray' />
              <svg onClick={() => setPasswordOpen(!passwordOpen)} onMouseDown={(e) => e.preventDefault()} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19Z" fill="#0E1217" />
              </svg>
            </div>
            <input type="submit" value={t('signIn')} className='bg-lybas-blue text-white w-full rounded-lg py-2 mb-5 text-center' />
            <div onMouseDown={(e) => e.preventDefault()} className="forgot-password text-lybas-gray cursor-pointer">{t('forgotPassword')}</div>
          </form>
        </div>
        <div className="welcome w-1/2 text-white font-bold text-3xl p-10 flex items-end">
          <span className='w-0'>
            {t('heyWelcomeBack')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
