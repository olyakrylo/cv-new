export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const InverseTheme = {
  [Theme.LIGHT]: Theme.DARK,
  [Theme.DARK]: Theme.LIGHT,
};
