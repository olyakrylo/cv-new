import { FC, useCallback } from 'react';
import { ContactsProps } from '@/entities/contacts/type';
import cn from 'classnames';

import styles from './Contacts.module.css';
import Image from 'next/image';
import { ContactIcons } from '@/widgets/navigationMenu/model';
import { CVData } from '@/shared/cvData';

export const Contacts: FC<ContactsProps> = ({ contacts, className }) => {
  const getContactContent = useCallback(
    (contact: CVData['contacts'][number]) => {
      if (contact.link) {
        return (
          <a target="_blank" href={contact.link} rel="noreferrer">
            {contact.text}
          </a>
        );
      }
      return <span>{contact.text}</span>;
    },
    []
  );

  return (
    <div className={cn(styles.Container, [className])}>
      {contacts.map((contact, i) => (
        <div key={i} className={styles.Row}>
          <Image
            className={styles.Icon}
            src={ContactIcons[contact.type]}
            alt={''}
          />
          {getContactContent(contact)}
        </div>
      ))}
    </div>
  );
};
