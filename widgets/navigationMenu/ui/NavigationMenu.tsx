import { FC, useCallback, useState } from 'react';
import { NavigationMenuProps } from '@/widgets/navigationMenu/type';
import cn from 'classnames';

import styles from './NavigationMenu.module.css';
import { NavigationTabs } from '../model';
import BurgerIcon from '@/shared/icons/burger.svg';

import Image from 'next/image';
import { Contacts } from '@/entities/contacts';

export const NavigationMenu: FC<NavigationMenuProps> = ({
  className,
  contacts,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className={cn(styles.Container, [className])} aria-expanded={expanded}>
      <div className={styles.Menu}>
        {NavigationTabs.map((tab) => (
          <button
            className={cn(styles.Tab, {
              [styles.Tab_active]: tab.path === 'about',
            })}
            key={tab.path}
          >
            {tab.name}
          </button>
        ))}

        <button className={styles.Burger} onClick={toggle}>
          <Image src={BurgerIcon} alt={''} />
        </button>
      </div>

      <div className={styles.Contacts}>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
};
