import { ru, enGB } from 'date-fns/locale';
import { formatDistance } from 'date-fns';

export default function getTimePassedString(from: string, localeName?: string) {
  let locale;

  switch (localeName) {
    case 'en-GB': {
      locale = enGB;
      break;
    }

    default: {
      locale = ru;
      break;
    }
  }

  return formatDistance(new Date(from), new Date(), {
    locale,
  });
}
