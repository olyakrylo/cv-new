import { FC } from 'react';

import { SkillsCategory } from '@/entities/skills/category';
import { SkillsProps } from '@/widgets/skills/type';

import styles from './Skills.module.css';

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className={styles.Container}>
      {skills.map((skill, i) => (
        <SkillsCategory key={i} {...skill} />
      ))}
    </div>
  );
};
