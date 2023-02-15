export type CVData = {
  about: CVDataAbout;
  contacts: CVDataContact[];
  experience: CVDataWorkplace[];
  skills: CVDataSkillsCategory[];
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

export type CVDataWorkplace = {
  company: string;
  startDate: string;
  endDate?: string;
  description: string[];
  skills: string[];
};

export type CVDataSkillsCategory = {
  title: string;
  list: string[];
};
