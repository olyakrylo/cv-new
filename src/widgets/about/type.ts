import { RefObject } from 'react';

import { CVDataAbout } from '@/shared/cvData';

export type AboutProps = CVDataAbout & {
  className?: string;
  contentRef?: RefObject<HTMLDivElement>;
};
