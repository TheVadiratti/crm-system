import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from './config';

export default createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.API_ORIGIN}${config.API_ENDPOINT}${config.API_VERSION}`,
  }),
  endpoints: () => ({}),
});
