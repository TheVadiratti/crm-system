import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import routes from '../../../../../router/routes';

interface Props {
  onLinkClick?: () => void;
}

const buttons = [
  {
    localizedLabel: 'pageHeadings.main',
    to: routes.main.index,
  },
  {
    localizedLabel: 'pageHeadings.issues',
    to: routes.issues.index,
  },
  {
    localizedLabel: 'pageHeadings.designers',
    to: routes.designers.index,
  },
];

export default function Navigation({ onLinkClick }: Props) {
  const { t: localize } = useTranslation();

  return (
    <ButtonGroup orientation="vertical" size="large">
      {buttons.map((button) => (
        <Button component={Link} to={button.to} onClick={onLinkClick}>
          {localize(button.localizedLabel)}
        </Button>
      ))}
    </ButtonGroup>
  );
}
