import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Resources from './types';

const resources: Resources = {
  ru: {
    translation: {
      pageHeadings: {
        main: 'Главная',
        issues: 'Задачи',
        designers: 'Дизайнеры',
      },

      sectionHeadings: {
        lastComments: 'Последние комментарии',
        topDesigners: 'Лучшие дизайнеры',
        doneIssuesChart: 'Завершённые задачи (по номерам недели)',
        issuesStatusesChart: 'Статусы задач',
        designersTable: 'Все дизайнеры',
      },

      Header: {
        weekNumber: 'Рабочая неделя №',
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

      DesignersTable: {
        columnHeadings: {
          avatar: 'Аватар',
          username: 'Имя',
          email: 'Эл. почта',
          inProgressIssuesCount: 'Задач в работе',
          doneIssuesCount: 'Задач закрыто',
        },
      },
    },
  },
  en: {
    translation: {
      pageHeadings: {
        main: 'Main',
        issues: 'Issues',
        designers: 'Designers',
      },

      sectionHeadings: {
        lastComments: 'Last comments',
        topDesigners: 'Top designers',
        doneIssuesChart: 'Done issues (by week number)',
        issuesStatusesChart: 'Issues statuses',
        designersTable: 'All designers',
      },

      Header: {
        weekNumber: 'Work week №',
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

      DesignersTable: {
        columnHeadings: {
          avatar: 'Avatar',
          username: 'Username',
          email: 'Email',
          inProgressIssuesCount: 'In Progress issues',
          doneIssuesCount: 'Done issues',
        },
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
