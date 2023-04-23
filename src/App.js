import './App.css';
import './i18n/index';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getLanguageToLocaleStorage, setLanguageFromLocaleStorage } from './utils/storage';
import Products from './components/Products';
import Product from './components/Product';
import Admin from './components/Admin';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState(getLanguageToLocaleStorage())

  useEffect(() => {
    const language = getLanguageToLocaleStorage()
    i18n.changeLanguage(language)
  }, [lang])



  function hendleSelect(e) {
    // i18next.changeLanguage(e.target.value)
    setLanguageFromLocaleStorage(e.target.value)
    setLang(e.target.value)
  }

  const publicRoutes = [
    {
      path: '/',
      element: Products,
      id: 1
    },
    {
      path: '/product',
      element: Product,
      id: 2
    }
  ]
  const privateRoute = [
    {
      path: '/admin',
      element: Admin,
      id: 4
    }
  ]
  const isAuth = false

  return (
    <div className="App">
      <select value={lang} className='section-lang' onChange={hendleSelect}>
        <option value={"uz"}>uz</option>
        <option value={"en"}>en</option>
        <option value={"ru"}>ru</option>
      </select>
      <br />
      {i18next.t("salom")} <br />
      {i18next.t("keyin")}

      <Routes>
        {publicRoutes.map(route => {
          return <Route
            key={route.id}
            path={route.path}
            element={<route.element />}
          />
        })}
        {
          isAuth ?
            privateRoute.map((route) => {
              return <Route
                key={route.id}
                path={route.path}
                element={<route.element />}
              />
            }) :
            null
        }
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
