import { FC, useCallback, useContext, useState } from 'react';
import cn from 'classnames';

import { Contacts } from '@/entities/contacts';
import { NavigationContext } from '@/features/navigation';
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

  const toggleMenu = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className={cn(styles.Container, [className])} aria-expanded={expanded}>
      <div className={styles.Menu}>
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

        <div className={styles.Controls}>
          <button className={styles.ThemeSwitcher} onClick={toggleTheme} />

          <div className={styles.Burger} onClick={toggleMenu} />
        </div>
      </div>

      <div className={styles.Contacts}>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
};
