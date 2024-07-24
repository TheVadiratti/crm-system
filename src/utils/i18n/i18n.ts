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
        doneIssuesChart: 'Завершённые задачи (по номерам недели)',
        issuesStatusesChart: 'Статусы задач',
      },

      header: {
        weekNumber: 'Неделя №',
        heading: 'Навигация',
      },

      CommentCard: {
        user: 'Пользователь',
        issue: 'Задача',
      },

      DesignerCard: {
        completedIssuesCount: 'Закрытых задач',
        issueMedianTime: 'Часов на задачу (медиана)',
      },

      DoneIssuesChartSection: {
        shownWeekNumber: 'Показывать недель',
      },

      DoneIssuesChart: {
        revenue: 'Доходы',
        expenses: 'Расходы',
        profit: 'Прибыль',
      },

      IssuesStatusesChart: {
        New: 'Новые',
        InProgress: 'В работе',
        Done: 'Закрытые',
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
        doneIssuesChart: 'Done issues (by week number)',
        issuesStatusesChart: 'Issues statuses',
      },

      header: {
        weekNumber: 'Week №',
        heading: 'Navigation',
      },

      CommentCard: {
        user: 'User',
        issue: 'Issue',
      },

      DesignerCard: {
        completedIssuesCount: 'Completed issues',
        issueMedianTime: 'Issue median time',
      },

      DoneIssuesChartSection: {
        shownWeekNumber: 'Show week',
      },

      DoneIssuesChart: {
        revenue: 'Revenue',
        expenses: 'Expenses',
        profit: 'Profit',
      },

      IssuesStatusesChart: {
        New: 'New',
        InProgress: 'In progress',
        Done: 'Done',
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
