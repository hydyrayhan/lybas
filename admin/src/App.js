import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

// Pages
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import SellerComments from './pages/Comments'
import SellerProfileDresses from './pages/Dresses';
import SellerProfileAddDress from './pages/DressesAdd';
import OneOrder from "./pages/OneOrder";
import CommentOne from "./pages/CommentOne";
import Emails from "./pages/Emails";
import EmailOne from "./pages/EmailOne";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Dressmakers from "./pages/Dressmakers";


export const AppContext = createContext();

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'tm');
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
    setLang(lng)
  };

  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (!localLang) {
      localStorage.setItem('lang', lang);
      changeLanguage(lang)
    } else {
      setLang(localLang)
    }
  }, [lang])

  return (<AppContext.Provider value={{
    t: t,
    changeLanguage: changeLanguage,
    lang: lang,
  }}>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />}/>
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OneOrder />} />
            <Route path="/dressmakers" element={<Dressmakers />} />
            <Route path="/dresses" element={<SellerProfileDresses />} />
            <Route path="/comments" element={<SellerComments />} />
            <Route path="/comments/:id" element={<CommentOne />} />
            <Route path="/dresses/add" element={<SellerProfileAddDress />} />
            <Route path="/emails" element={<Emails />} />
            <Route path="/emails/:id" element={<EmailOne />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<Login />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  </AppContext.Provider>
  );
}

export default App;
