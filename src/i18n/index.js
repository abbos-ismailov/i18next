import i18next from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import resources from './resources.json'

i18next
      .use(initReactI18next)
      .init({
            resources,
            lng: "uz",
            fallbackLng: "en",

            interpolation: {
                  escapeValue: false
            }
      })


export default i18next
