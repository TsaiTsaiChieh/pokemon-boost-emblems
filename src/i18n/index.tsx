import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import {initReactI18next} from 'react-i18next'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/pokemon-boost-emblems/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'zh',
    lng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
