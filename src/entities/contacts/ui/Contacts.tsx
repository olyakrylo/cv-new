import { FC, useCallback } from 'react';
import cn from 'classnames';

import { ContactsProps } from '@/entities/contacts/type';
import { CVDataContactType } from '@/shared/cvData';
import { Link } from '@/shared/link';

import styles from './Contacts.module.css';

export const Contacts: FC<ContactsProps> = ({ contacts, className }) => {
  const getIconModifier = useCallback((contactType: CVDataContactType) => {
    return `Icon_${contactType}`;
  }, []);

  return (
    <div className={cn(styles.Container, [className])}>
      {contacts.map((contact, i) => (
        <Link
          key={contact.type}
          className={styles.Row}
          href={contact.link ?? contact.text}
          phone={contact.type === 'phone'}
          email={contact.type === 'mail'}
        >
          <div
            className={cn(styles.Icon, [styles[getIconModifier(contact.type)]])}
          />
          <span>{contact.text}</span>
        </Link>
      ))}
    </div>
  );
};
