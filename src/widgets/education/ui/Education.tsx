import { FC } from 'react';

import { Organization } from '@/entities/organization';

import { EducationProps } from '../type';

import styles from './Education.module.css';

export const Education: FC<EducationProps> = ({ organizations }) => {
  return (
    <div className={styles.Container}>
      {organizations.map((org, i) => (
        <Organization {...org} defaultExpanded disabled key={i} />
      ))}
    </div>
  );
};
