import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import { type CommentDto } from '../../../services/types.dto';
import CommentCard from '../../Card/CommentCard';
import PageSection from '../index';

interface Props {
  comments: CommentDto[];
}

const MAX_LIST_LENGTH = 10;

export default function LastCommentsSection({ comments }: Props) {
  const { t: localize } = useTranslation();

  const displayData = comments.slice(MAX_LIST_LENGTH * -1).reverse();

  return (
    <PageSection heading={localize('sectionHeadings.lastComments')}>
      <Stack spacing={2}>
        {displayData.map((comment) => (
          <CommentCard
            authorName={comment.designer.username}
            issueName={comment.issue}
            message={comment.message}
            createdAt={comment.date_created}
            avatarSrc={comment.designer.avatar}
            key={comment.id}
          />
        ))}
      </Stack>
    </PageSection>
  );
}
