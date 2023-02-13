import { PropsWithChildren, RefObject } from 'react';

export type SectionLayoutProps = PropsWithChildren & {
  title: string;
  contentRef?: RefObject<HTMLDivElement>;
  className?: string;
};
