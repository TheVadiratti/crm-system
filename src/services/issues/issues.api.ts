import api from '../api';
import config from '../config';
import { type IssueDto } from '../types.dto';

const issuesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getIssues: builder.query<IssueDto[], void>({
      query: () => ({
        url: config.endpoints.issues,
        method: 'GET',
      }),
    }),
  }),
});

export default issuesApi;
