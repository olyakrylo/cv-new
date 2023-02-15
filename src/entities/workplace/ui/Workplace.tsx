import { FC, useCallback, useState } from 'react';
import useCollapse from 'react-collapsed';

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

  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: expanded,
    duration: 300,
  });

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className={styles.Container} aria-expanded={expanded}>
      <button
        className={styles.Heading}
        {...getToggleProps({
          onClick: toggle,
        })}
      >
        <div className={styles.Title}>
          <div className={styles.Arrow} />
          <p>{company}</p>
        </div>
        <div className={styles.Dates}>
          {startDate} - {endDate ?? 'Present'}
        </div>
      </button>

      <section {...getCollapseProps()}>
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
      </section>
    </div>
  );
};
