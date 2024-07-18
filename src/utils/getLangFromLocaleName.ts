import { Locales } from './constants';

export default function getLangFromLocaleName(locale: Locales | string) {
  return locale.slice(0, 2);
}
