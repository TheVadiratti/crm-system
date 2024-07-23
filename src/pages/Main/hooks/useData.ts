import { useGetCommentsQuery } from '../../../services/comments';
import { useGetDesignersQuery } from '../../../services/designers';

export default function useData() {
  const { data: comments = [], isSuccess: isCommentsSuccess } =
    useGetCommentsQuery();
  const { data: designers = { results: [] }, isSuccess: isDesignersSuccess } =
    useGetDesignersQuery();

  const isSuccess = isCommentsSuccess && isDesignersSuccess;

  return { data: { comments, designers }, isSuccess };
}
