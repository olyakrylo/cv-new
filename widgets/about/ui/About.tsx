import { FC } from 'react';
import { AboutProps } from '@/widgets/about/type';

import styles from './About.module.css';
import cn from 'classnames';

export const About: FC<AboutProps> = ({
  name,
  profession,
  text,
  className,
}) => {
  return (
    <div className={cn(styles.Container, [className])}>
      <div className={styles.Heading}>
        <h1 className={cn(styles.Name)}>{name}</h1>
        <h2 className={styles.Profession}>{profession}</h2>
      </div>

      <div className={styles.Text}>{text}</div>
    </div>
  );
};
