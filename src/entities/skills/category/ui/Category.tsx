import { FC } from 'react';
import cn from 'classnames';

import { CategoryProps } from '../type';

import styles from './Category.module.css';

export const Category: FC<CategoryProps> = ({ title, list }) => {
  return (
    <div className={cn(styles.Container)}>
      <p className={styles.Heading}>{title}</p>
      <ul className={styles.List}>
        {list.map((item, i) => (
          <li className={styles.Item} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
