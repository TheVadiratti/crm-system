import Stack from '@mui/material/Stack';
import PageContainer from '../../components/PageContainer';
import DesignersTableSection from '../../components/PageSection/DesignersTableSection';

export default function DesignersPage() {
  return (
    <PageContainer>
      <Stack sx={{ py: 2 }}>
        <DesignersTableSection />
      </Stack>
    </PageContainer>
  );
}
