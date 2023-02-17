import { FC, useCallback } from 'react';
import cn from 'classnames';

import { ContactsProps } from '@/entities/contacts/type';
import { CVData } from '@/shared/cvData';
import { ExternalLink } from '@/shared/externalLink';

import styles from './Contacts.module.css';

export const Contacts: FC<ContactsProps> = ({ contacts, className }) => {
  const getContactContent = useCallback(
    (contact: CVData['contacts'][number]) => {
      if (contact.link) {
        return (
          <ExternalLink title={contact.text} href={contact.link} />
          // <a
          //   target="_blank"
          //   className={styles.Link}
          //   href={contact.link}
          //   rel="noreferrer"
          // >
          //   {contact.text}
          // </a>
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
          <div
            className={cn(styles.Icon, {
              [styles.Icon_mail]: contact.type === 'mail',
              [styles.Icon_phone]: contact.type === 'phone',
              [styles.Icon_linkedin]: contact.type === 'linkedin',
              [styles.Icon_telegram]: contact.type === 'telegram',
              [styles.Icon_instagram]: contact.type === 'instagram',
              [styles.Icon_github]: contact.type === 'github',
            })}
          />
          {getContactContent(contact)}
        </div>
      ))}
    </div>
  );
};
