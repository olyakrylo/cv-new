import { FC } from 'react';

import { Organization } from '@/entities/organization';

import { ProjectsProps } from '../type';

import styles from './Projects.module.css';

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className={styles.Container}>
      {projects.map((project, i) => (
        <Organization
          {...project}
          left={i % 2 === 0}
          right={i % 2 === 1}
          // defaultExpanded={i === 0}
          key={i}
        />
      ))}
    </div>
  );
};
