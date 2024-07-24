import { useGetIssuesQuery } from '../../../services/issues';

export default function useData() {
  const { data: issues = [], isSuccess } = useGetIssuesQuery();

  return { data: { issues }, isSuccess };
}
