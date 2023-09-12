import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Main from './pages/index';
import Dresses from './pages/dresses';
import Dress from './pages/dress'
import Checkout from "./pages/checkout";
import Account from "./pages/account";
import Sidebar from "./pages/sellerProfile/components/Sidebar";
import Dashboard from "./pages/sellerProfile/Dashboard";
import Orders from "./pages/sellerProfile/Orders";
import Users from "./pages/sellerProfile/Users";
import Comments from "./pages/sellerProfile/Comments";
import SellerProfileDresses from './pages/sellerProfile/Dresses';

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
          <Route path="/sellerProfile/" element={<Sidebar />}>
            <Route index element={<Dashboard />}/>
            <Route path="/sellerProfile/orders" element={<Orders />} />
            <Route path="/sellerProfile/users" element={<Users />} />
            <Route path="/sellerProfile/dresses" element={<SellerProfileDresses />} />
            <Route path="/sellerProfile/comments" element={<Comments />} />
          </Route>

          <Route path='/' element={(
            <>
              <Header />
              <Main />
              <Footer />
            </>
          )} />
          <Route path='/dresses' element={(
            <>
              <Header />
              <Dresses />
              <Footer />
            </>
          )} />
          <Route path='/dresses/:id' element={(
            <>
              <Header />
              <Dress />
              <Footer />
            </>
          )} />
          <Route path='/checkout' element={(
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          )} />
          <Route path='/account' element={(
            <>
              <Header />
              <Account />
              <Footer />
            </>
          )} />

          {/* Seller routes start */}
          {/* <Route path='/sellerProfile' element={(
            <>
              <Sidebar />
            </>
          )} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  </AppContext.Provider>
  );
}

export default App;
