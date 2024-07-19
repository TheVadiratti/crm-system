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

      sectionHeadings: {
        lastComments: 'Последние комментарии',
        topDesigners: 'Лучшие дизайнеры',
      },

      header: {
        weekNumber: 'Неделя №',
        heading: 'Навигация',
      },

      CommentCard: {
        user: 'Пользователь',
        issue: 'Задача',
        timePassedSinceCreated: 'назад',
      },
    },
  },
  en: {
    translation: {
      pageHeaders: {
        main: 'Main',
        tasks: 'Tasks',
        designers: 'Designers',
      },

      sectionHeadings: {
        lastComments: 'Last comments',
        topDesigners: 'Top designers',
      },

      header: {
        weekNumber: 'Week №',
        heading: 'Navigation',
      },

      CommentCard: {
        user: 'User',
        issue: 'Issue',
        timePassedSinceCreated: 'ago',
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
