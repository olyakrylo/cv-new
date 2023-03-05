import { FC, useCallback, useContext, useMemo, useState } from 'react';
import cn from 'classnames';

import { Contacts } from '@/entities/contacts';
import { NavigationContext } from '@/features/navigation';
import { useStartTransition } from '@/features/startTransition';
import { ThemeContext } from '@/features/theme';

import { NavigationTabs } from '../model';
import { NavigationMenuProps } from '../type';

import styles from './NavigationMenu.module.css';

export const NavigationMenu: FC<NavigationMenuProps> = ({
  className,
  contacts,
  navigate,
}) => {
  const [expanded, setExpanded] = useState(false);

  const { toggleTheme } = useContext(ThemeContext);
  const currentSection = useContext(NavigationContext);

  const { startTransitionCN } = useStartTransition({
    from: 'desktop_left_tablet_top',
  });

  const toggleMenu = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const currentSectionModifier = useMemo(() => {
    const index = NavigationTabs.findIndex(({ id }) => id === currentSection);
    return `Menu_tab_${index + 1}`;
  }, [currentSection]);

  return (
    <div
      className={cn(styles.Container, [className, startTransitionCN])}
      aria-expanded={expanded}
    >
      <div className={cn(styles.Menu, [styles[currentSectionModifier]])}>
        {NavigationTabs.map((tab) => (
          <button
            className={cn(styles.Tab, {
              [styles.Tab_active]: tab.id === currentSection,
            })}
            key={tab.id}
            onClick={() => navigate(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className={styles.Controls}>
        <button className={styles.ThemeSwitcher} onClick={toggleTheme} />

        <div className={styles.Burger} onClick={toggleMenu} />
      </div>

      <div className={styles.Contacts}>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
};
