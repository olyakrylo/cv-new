import { Section } from '@/features/navigation';
import { CVDataContactType } from '@/shared/cvData';

export const NavigationTabs: { name: string; id: Section }[] = [
  { name: 'About', id: Section.ABOUT },
  // { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: Section.EXPERIENCE },
  // { name: 'Education', id: 'education' },
];
