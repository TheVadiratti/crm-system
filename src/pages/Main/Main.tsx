import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import CommentCard from '../../components/Card/CommentCard';
import PageContainer from '../../components/PageContainer';
import PageSection from '../../components/PageSection';
import { useGetCommentsQuery } from '../../services/comments';

export default function MainPage() {
  const { data: comments = [], isSuccess } = useGetCommentsQuery();
  const { t: localize } = useTranslation();

  return (
    <PageContainer>
      <Grid container sx={{ py: 2 }}>
        <Grid item xs={8} spacing={2}>
          <PageSection heading={localize('sectionHeadings.lastComments')}>
            {isSuccess && (
              <Stack spacing={2}>
                {comments.map((comment) => (
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
            )}
          </PageSection>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
