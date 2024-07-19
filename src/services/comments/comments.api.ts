import api from '../api';
import config from '../config';
import { type CommentDto } from '../types.dto';

const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<CommentDto[], void>({
      query: () => ({
        url: config.endpoints.comments,
        method: 'GET',
        params: { format: 'json' },
      }),
    }),
  }),
});

export default commentsApi;
