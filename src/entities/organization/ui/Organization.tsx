import { FC, useCallback, useState } from 'react';
import useCollapse from 'react-collapsed';

import { WorkplaceProps } from '../type';

import styles from './Organization.module.css';

export const Organization: FC<WorkplaceProps> = ({
  defaultExpanded = false,
  name,
  startDate,
  endDate,
  description,
  tags,
  disabled = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: expanded,
    duration: 300,
  });

  const toggle = useCallback(() => {
    if (disabled) return;
    setExpanded(!expanded);
  }, [disabled, expanded]);

  return (
    <div className={styles.Container} aria-expanded={expanded}>
      <button
        className={styles.Heading}
        aria-disabled={disabled}
        {...getToggleProps({
          onClick: toggle,
        })}
      >
        <div className={styles.Title}>
          {!disabled && <div className={styles.Arrow} />}
          <p>{name}</p>
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

          <div className={styles.Tags}>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
