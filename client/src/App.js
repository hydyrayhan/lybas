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
        </Routes>
      </BrowserRouter>
    </div>
  </AppContext.Provider>
  );
}

export default App;
