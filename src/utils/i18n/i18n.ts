import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Resources from './types';

const resources: Resources = {
  ru: {
    translation: {
      pageHeaders: {
        main: 'Главная',
        tasks: 'Задачи',
        designers: 'Дизайнеры',
      },

      header: {
        numberOfWeek: 'Неделя №',
        heading: 'Навигация',
      },
    },
  },
  en: {
    translation: {
      pageHeaders: {
        main: 'Home',
        tasks: 'Tasks',
        designers: 'Designers',
      },

      header: {
        numberOfWeek: 'Week №',
        heading: 'Navigation',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // Ругается на несоответствие типа Resources внутренним типам метода .init.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  .init({
    debug: true,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
