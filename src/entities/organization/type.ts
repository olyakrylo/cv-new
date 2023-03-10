import { CVDataOrganization } from '@/shared/cvData';

export type WorkplaceProps = CVDataOrganization & {
  defaultExpanded?: boolean;
  disabled?: boolean;
  left?: boolean;
  right?: boolean;
};
