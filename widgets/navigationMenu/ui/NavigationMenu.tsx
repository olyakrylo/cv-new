import { FC, useCallback } from 'react';
import { NavigationMenuProps } from '@/widgets/navigationMenu/type';
import cn from 'classnames';

import styles from './NavigationMenu.module.css';
import { NavigationTabs, ContactIcons } from '../model';
import { CVData } from '@/shared/cvData';

import Image from 'next/image';

export const NavigationMenu: FC<NavigationMenuProps> = ({
  className,
  contacts,
}) => {
  const getContactContent = useCallback(
    (contact: CVData['contacts'][number]) => {
      if (contact.link) {
        return <a href={contact.link}>{contact.text}</a>;
      }
      return <span>{contact.text}</span>;
    },
    []
  );

  return (
    <div className={cn(styles.Container, [className])}>
      <div className={styles.Menu}>
        {NavigationTabs.map((tab) => (
          <button className={styles.Tab} key={tab.path}>
            {tab.name}
          </button>
        ))}
      </div>

      <div className={styles.Contacts}>
        {contacts.map((contact, i) => (
          <div key={i} className={styles.ContactsRow}>
            <Image
              className={styles.ContactIcon}
              src={ContactIcons[contact.type]}
              alt={''}
            />
            {getContactContent(contact)}
          </div>
        ))}
      </div>
    </div>
  );
};
