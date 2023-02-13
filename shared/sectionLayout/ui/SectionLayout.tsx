import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';

import { SectionLayoutProps } from '@/shared/sectionLayout/type';

import styles from './SectionLayout.module.css';

export const SectionLayout: FC<SectionLayoutProps> = ({
  title,
  children,
  className,
  contentRef,
}) => {
  return (
    <div className={cn(styles.Container, [className])} ref={contentRef}>
      <p className={styles.Title}>{title}</p>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
