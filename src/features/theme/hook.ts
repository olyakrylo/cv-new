import { useCallback, useEffect, useState } from 'react';

import { inverse, LS_THEME_KEY, metaThemeColor } from './contants';
import { Theme } from './type';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const fromLS = localStorage.getItem(LS_THEME_KEY);

    if (fromLS === Theme.DARK || fromLS === Theme.LIGHT) {
      setTheme(fromLS);
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme(Theme.DARK);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = inverse[theme];
    localStorage.setItem(LS_THEME_KEY, newTheme);
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', metaThemeColor[theme]);
    }
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
