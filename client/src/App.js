import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import Header from './components/Header';
import Footer from './components/Footer';

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
