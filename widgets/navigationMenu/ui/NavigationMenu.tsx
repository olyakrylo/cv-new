import { FC, useCallback, useContext, useState } from 'react';
import { NavigationMenuProps } from '@/widgets/navigationMenu/type';
import cn from 'classnames';

import styles from './NavigationMenu.module.css';
import { NavigationTabs } from '../model';
import BurgerIcon from '@/shared/icons/burger.svg';

import Image from 'next/image';
import { Contacts } from '@/entities/contacts';
import { NavigationContext } from '@/features/navigation';

export const NavigationMenu: FC<NavigationMenuProps> = ({
  className,
  contacts,
}) => {
  const [expanded, setExpanded] = useState(false);

  const currentSection = useContext(NavigationContext);

  const toggle = useCallback(() => {
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
