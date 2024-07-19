import { type ReactNode } from 'react';
import Container from '@mui/material/Container';

interface Props {
  children: ReactNode;
}

export default function PageContainer({ children }: Props) {
  return <Container component="main">{children}</Container>;
}
