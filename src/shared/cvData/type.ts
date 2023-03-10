export type CVData = {
  about: CVDataAbout;
  contacts: CVDataContact[];
  experience: CVDataOrganization[];
  education: CVDataOrganization[];
  skills: CVDataSkillsCategory[];
  projects: CVDataOrganization[];
};

export type CVDataContactType =
  | 'mail'
  | 'phone'
  | 'telegram'
  | 'linkedin'
  | 'instagram'
  | 'github';

export type CVDataAbout = {
  name: string;
  profession: string;
  text: string;
};

export type CVDataContact = {
  type: CVDataContactType;
  text: string;
  link?: string;
};

export type CVDataOrganization = {
  name: string;
  startDate: string;
  endDate?: string;
  description: string[];
  tags: string[];
  links?: {
    title: string;
    href: string;
  }[];
};

export type CVDataSkillsCategory = {
  title: string;
  list: string[];
};
