import api from '../api';
import config from '../config';
import { type DesignersDto } from '../types.dto';

const designersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDesigners: builder.query<DesignersDto, void>({
      query: () => ({
        url: config.endpoints.designers,
        method: 'GET',
        params: { format: 'json' },
      }),
    }),

    getDesignersByPage: builder.query<DesignersDto, number>({
      query: (page) => ({
        url: config.endpoints.designers,
        method: 'GET',
        params: { page },
      }),
    }),
  }),
});

export default designersApi;
