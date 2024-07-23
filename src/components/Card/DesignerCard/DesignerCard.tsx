import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Card from '../index';

interface Props {
  username: string;
  avatarSrc: string;
  avatarAlt: string;
  issueMedianTime: number;
  doneIssuesCount: number;
  ratingPosition: number;
}

export default function DesignerCard({
  username,
  avatarSrc,
  avatarAlt,
  issueMedianTime,
  doneIssuesCount,
  ratingPosition,
}: Props) {
  const { t: localize } = useTranslation();

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc} alt={avatarAlt} />}
        title={username}
        subheader={`№${ratingPosition}`}
        titleTypographyProps={{ variant: 'body1' }}
        subheaderTypographyProps={{ variant: 'body1' }}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2">{`${localize('DesignerCard.completedIssuesCount')}: ${doneIssuesCount}`}</Typography>
        <Typography variant="body2">{`${localize('DesignerCard.issueMedianTime')}: ${issueMedianTime}`}</Typography>
      </CardContent>
    </Card>
  );
}
