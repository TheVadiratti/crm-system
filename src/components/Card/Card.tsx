import MuiCard, { type CardProps } from '@mui/material/Card';

export default function Card({
  children,
  ...rest
}: Omit<CardProps, 'elevation'>) {
  return (
    <MuiCard
      elevation={8}
      sx={{
        borderRadius: 4,
        backgroundColor: 'background',
      }}
      {...rest}
    >
      {children}
    </MuiCard>
  );
}
