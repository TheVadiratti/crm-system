import { type ReactNode } from 'react';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

interface Props {
  children: ReactNode;
  isLoading?: boolean;
}

export default function PageContainer({ children, isLoading = false }: Props) {
  if (isLoading) {
    return <LinearProgress />;
  }

  return <Container component="main">{children}</Container>;
}
