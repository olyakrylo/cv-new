import { FC, useCallback, useMemo, useState } from 'react';
import useCollapse from 'react-collapsed';
import cn from 'classnames';

import { Link } from '@/shared/link';
import { Markdown } from '@/shared/markdown';

import { WorkplaceProps } from '../type';

import styles from './Organization.module.css';

export const Organization: FC<WorkplaceProps> = ({
  defaultExpanded = false,
  name,
  startDate,
  endDate,
  description,
  tags,
  links,
  disabled = false,
  left = false,
  right = false,
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

  const dates = useMemo(() => {
    if (startDate === endDate) {
      return <span className={styles.Date}>{startDate}</span>;
    }
    return (
      <>
        <span className={styles.Date}>{startDate}</span> -{' '}
        <span className={styles.Date}>{endDate ?? 'Present'}</span>
      </>
    );
  }, [startDate, endDate]);

  return (
    <div
      className={cn(styles.Container, {
        [styles.Container_left]: left,
        [styles.Container_right]: right,
      })}
      aria-expanded={expanded}
    >
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
        <div className={styles.Dates}>{dates}</div>
      </button>

      <section {...getCollapseProps()}>
        <div className={styles.Content}>
          {description.map((text, i) => (
            <div key={i}>
              <Markdown className={styles.Description}>{text}</Markdown>
            </div>
          ))}

          {Boolean(links) && (
            <div className={styles.Links}>
              {links?.map(({ title, href }, i) => (
                <Link href={href} key={i} className={styles.Link}>
                  {title}
                </Link>
              ))}
            </div>
          )}

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
