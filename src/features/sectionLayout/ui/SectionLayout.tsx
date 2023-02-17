import { FC } from 'react';
import cn from 'classnames';

import { SectionLayoutProps } from '@/features/sectionLayout/type';
import { useStartTransition } from '@/features/startTransition';

import styles from './SectionLayout.module.css';

export const SectionLayout: FC<SectionLayoutProps> = ({
  title,
  children,
  className,
  contentRef,
}) => {
  const { startTransitionCN: rightTransition } = useStartTransition({
    from: 'all_right_mobile_top',
  });
  const { startTransitionCN: bottomTransition } = useStartTransition({
    from: 'bottom',
  });

  return (
    <div className={cn(styles.Container, [className])} ref={contentRef}>
      <p className={cn(styles.Title, [rightTransition])}>{title}</p>
      <div className={cn(styles.Content, [bottomTransition])}>{children}</div>
    </div>
  );
};
