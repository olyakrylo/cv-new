import { Theme } from './type';

export const LS_THEME_KEY = 'theme-key';

export const inverse = {
  [Theme.LIGHT]: Theme.DARK,
  [Theme.DARK]: Theme.LIGHT,
};

export const metaThemeColor = {
  [Theme.LIGHT]: '#fAf0e6',
  [Theme.DARK]: '#3a3a3a',
};
