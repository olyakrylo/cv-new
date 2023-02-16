import { FC } from 'react';

import { Organization } from '@/entities/organization';
import { ExperienceProps } from '@/widgets/experience/type';

import styles from './Experience.module.css';

export const Experience: FC<ExperienceProps> = ({ organizations }) => {
  return (
    <div className={styles.Container}>
      {organizations.map((workplace, i) => (
        <Organization {...workplace} defaultExpanded={i === 0} key={i} />
      ))}
    </div>
  );
};
