import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from '../../store';
import { changeLocale } from '../../store/meta';
import { Locales } from '../../utils/constants';

export default function LocaleSelect() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.meta.locale);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeLocale(event.target.value as Locales));
  };

  return (
    <Select
      variant="outlined"
      value={value}
      size="small"
      onChange={handleChange}
    >
      <MenuItem value={Locales.russian}>RU</MenuItem>
      <MenuItem value={Locales.englishGB}>EN</MenuItem>
    </Select>
  );
}
