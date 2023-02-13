import { Section } from '@/features/navigation';
import { CVDataContact } from '@/shared/cvData';

export type NavigationMenuProps = {
  contacts: CVDataContact[];
  navigate: (id: Section) => void;
  className?: string;
};
