export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const inverse = {
  [Theme.LIGHT]: Theme.DARK,
  [Theme.DARK]: Theme.LIGHT,
};
