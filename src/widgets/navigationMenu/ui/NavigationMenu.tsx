import { FC, useCallback, useContext, useState } from 'react';
import cn from 'classnames';

import { Contacts } from '@/entities/contacts';
import { NavigationContext, Section } from '@/features/navigation';
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

  return (
    <div
      className={cn(styles.Container, [className, startTransitionCN])}
      aria-expanded={expanded}
    >
      <div
        className={cn(styles.Menu, {
          [styles.Menu_tab_about]: currentSection === Section.ABOUT,
          [styles.Menu_tab_skills]: currentSection === Section.SKILLS,
          [styles.Menu_tab_experience]: currentSection === Section.EXPERIENCE,
          [styles.Menu_tab_education]: currentSection === Section.EDUCATION,
        })}
      >
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
