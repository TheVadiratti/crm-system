import Grid from '@mui/material/Grid';
import PageContainer from '../../components/PageContainer';
import LastCommentsSection from '../../components/PageSection/LastCommentsSection';
import TopDesignersSection from '../../components/PageSection/TopDesignersSection';
import { useGetCommentsQuery } from '../../services/comments';
import { useGetDesignersQuery } from '../../services/designers';

export default function MainPage() {
  const { data: comments = [], isSuccess: isCommentsSuccess } =
    useGetCommentsQuery();
  const { data: designers = { results: [] }, isSuccess: isDesignersSuccess } =
    useGetDesignersQuery();

  const isSuccess = isCommentsSuccess && isDesignersSuccess;

  return (
    <PageContainer>
      {isSuccess && (
        <Grid container sx={{ py: 2 }} spacing={2}>
          <Grid item md={12} lg={8}>
            <LastCommentsSection comments={comments} />
          </Grid>
          <Grid item md={12} lg={4}>
            <TopDesignersSection designers={designers.results} />
          </Grid>
        </Grid>
      )}
    </PageContainer>
  );
}
