import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (callback: Function) => {
    return /*'en'; */ callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
const loadI18N = async () => {
  return i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      resources: {
        en: {
          translation: require('./en'),
        },
        vi: {
          translation: require('./vi'),
        },
      },
    });
};
export default loadI18N;
