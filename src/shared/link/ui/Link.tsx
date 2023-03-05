import { FC, useMemo } from 'react';
import cn from 'classnames';

import { LinkProps } from '../type';

import styles from './Link.module.css';

export const Link: FC<LinkProps> = ({
  href,
  className,
  children,
  phone = false,
  email = false,
}) => {
  const hrefData: string = useMemo(() => {
    if (phone) {
      return `tel:${href}`;
    }
    if (email) {
      return `mailto:${href}`;
    }
    return href;
  }, [phone, email, href]);

  return (
    <a
      className={cn(styles.Container, [className], {
        [styles.Container_internal]: phone || email,
      })}
      href={hrefData}
      target={phone || email ? '_self' : '_blank'}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
