import { useMemo } from 'react';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useSelector } from '../../../store';
import getTimePassedString from '../../../utils/getTimePassedString';
import Card from '../index';

interface Props {
  authorName: string;
  issueName: string;
  message: string;
  createdAt: string;
  avatarSrc: string;
  avatarAlt?: string;
}

export default function CommentCard({
  authorName,
  issueName,
  message,
  createdAt,
  avatarSrc,
  avatarAlt,
}: Props) {
  const localeName = useSelector((state) => state.meta.locale);
  const { t: localize } = useTranslation();

  const timePassedSinceCreated = useMemo(
    () => getTimePassedString(createdAt, localeName),
    [createdAt, localeName]
  );

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc} alt={avatarAlt} />}
        title={`${localize('CommentCard.user')}: ${authorName}`}
        subheader={`${localize('CommentCard.issue')}: ${issueName}`}
      />
      <Divider />
      <CardContent>
        <Typography>{message}</Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {timePassedSinceCreated}
        </Typography>
      </CardActions>
    </Card>
  );
}
