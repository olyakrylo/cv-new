import { CVDataAbout } from '@/shared/cvData';
import { RefObject } from 'react';

export type AboutProps = CVDataAbout & {
  className?: string;
  contentRef?: RefObject<HTMLDivElement>;
};
