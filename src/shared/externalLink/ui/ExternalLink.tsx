import { FC } from 'react';
import cn from 'classnames';

import { ExternalLinkProps } from '../type';

import styles from './ExternalLink.module.css';

export const ExternalLink: FC<ExternalLinkProps> = ({
  title,
  href,
  className,
}) => {
  return (
    <a
      className={cn(styles.Container, [className])}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  );
};
