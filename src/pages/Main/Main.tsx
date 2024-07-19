import Grid from '@mui/material/Grid';
import PageContainer from '../../components/PageContainer';
import LastCommentsSection from '../../components/PageSection/LastCommentsSection';
import { useGetCommentsQuery } from '../../services/comments';

export default function MainPage() {
  const { data: comments = [], isSuccess: isCommentsSuccess } =
    useGetCommentsQuery();

  return (
    <PageContainer>
      <Grid container sx={{ py: 2 }}>
        <Grid item md={12} lg={8} spacing={2}>
          {isCommentsSuccess && <LastCommentsSection comments={comments} />}
        </Grid>
      </Grid>
    </PageContainer>
  );
}
