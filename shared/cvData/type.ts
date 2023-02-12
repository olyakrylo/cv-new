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

export type CVData = {
  about: CVDataAbout;
  contacts: CVDataContact[];
};
