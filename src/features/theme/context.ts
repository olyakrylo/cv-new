import { createContext } from 'react';

import { Theme } from './type';

export const ThemeContext = createContext({
  theme: Theme.LIGHT,
  toggleTheme: () => {},
});
