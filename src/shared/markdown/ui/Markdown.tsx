import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

import { MarkdownProps } from '@/shared/markdown/type';

import { renderer } from '../lib';

import styles from './Markdown.module.css';

export const Markdown: FC<MarkdownProps> = ({ children, className }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(
      DOMPurify.sanitize(marked.parse(children, { renderer }), {
        ADD_ATTR: ['target'],
      })
    );
  }, [children]);

  return (
    <div
      className={cn(styles.Container, [className])}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
