import { FC, useCallback, useState } from 'react';
import Collapse from '@mui/material/Collapse';

import { WorkplaceProps } from '../type';

import styles from './Workplace.module.css';

export const Workplace: FC<WorkplaceProps> = ({
  defaultExpanded = false,
  company,
  startDate,
  endDate,
  description,
  skills,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className={styles.Container} aria-expanded={expanded}>
      <div className={styles.Heading} onClick={toggle}>
        <div className={styles.Title}>
          <div className={styles.Arrow} />
          <p>{company}</p>
        </div>
        <div className={styles.Dates}>
          {startDate} - {endDate ?? 'Present'}
        </div>
      </div>

      <Collapse in={expanded} timeout={200}>
        <div className={styles.Content}>
          {description.map((text, i) => (
            <p className={styles.Description} key={i}>
              {text}
            </p>
          ))}

          <div className={styles.Skills}>
            {skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};
