import Grid from '@mui/material/Grid';
import PageContainer from '../../components/PageContainer';
import DoneIssuesChartSection from '../../components/PageSection/DoneIssuesChartSection';
import IssuesStatusesChartSection from '../../components/PageSection/IssuesStatusesChartSection';
import useData from './hooks/useData';

export default function IssuesPage() {
  const {
    data: { issues },
    isSuccess,
  } = useData();

  return (
    <PageContainer>
      {isSuccess && (
        <Grid container sx={{ py: 2 }} spacing={2}>
          <Grid item md={12}>
            <DoneIssuesChartSection issues={issues} />
          </Grid>
          <Grid item md={6}>
            <IssuesStatusesChartSection issues={issues} />
          </Grid>
        </Grid>
      )}
    </PageContainer>
  );
}
