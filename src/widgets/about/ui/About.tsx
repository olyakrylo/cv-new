import { FC } from 'react';
import cn from 'classnames';

import { useStartTransition } from '@/features/startTransition';
import { AboutProps } from '@/widgets/about/type';

import styles from './About.module.css';

export const About: FC<AboutProps> = ({
  name,
  profession,
  text,
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
      <div className={cn(styles.Heading, [rightTransition])}>
        <h1 className={cn(styles.Name)}>{name}</h1>
        <h2 className={styles.Profession}>{profession}</h2>
      </div>

      <div className={cn(styles.Text, [bottomTransition])}>{text}</div>
    </div>
  );
};
