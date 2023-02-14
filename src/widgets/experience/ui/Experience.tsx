import { FC } from 'react';

import { Workplace } from '@/entities/workplace';
import { ExperienceProps } from '@/widgets/experience/type';

import styles from './Experience.module.css';

export const Experience: FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className={styles.Container}>
      {experience.map((workplace, i) => (
        <Workplace {...workplace} defaultExpanded={i === 0} key={i} />
      ))}
    </div>
  );
};
