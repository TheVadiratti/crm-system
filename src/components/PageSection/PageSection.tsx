import { type ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface Props {
  heading: string;
  children: ReactNode;
}

export default function PageSection({ heading, children }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: 'background',
        p: 2,
        borderRadius: 4,
      }}
      elevation={-1}
    >
      <Stack spacing={2} component="section">
        <Typography
          variant="h5"
          component="h2"
          color="text.primary"
          textTransform="uppercase"
          fontWeight={600}
        >
          {heading}
        </Typography>
        {children}
      </Stack>
    </Paper>
  );
}
