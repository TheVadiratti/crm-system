export default {
  API_ORIGIN: 'https://sandbox.creos.me',
  API_ENDPOINT: '/api',
  API_VERSION: '/v1',

  endpoints: {
    // Эндпоинты названы в единственном числе, хотя отдают коллекции сущностей.
    // Они должны заканчиваться на -s.
    comments: '/comment/', // '/comments' и т.д.
    projects: '/project',
    designers: '/designer/',
    issues: '/issue/',
  },
} as const;
