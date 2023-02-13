import MailIconSrc from '@/shared/icons/mail.svg';
import PhoneIconSrc from '@/shared/icons/phone.svg';
import LinkedinIconSrc from '@/shared/icons/linkedin.svg';
import TelegramIconSrc from '@/shared/icons/telegram.svg';
import InstagramIconSrc from '@/shared/icons/instagram.svg';
import GitHubIconSrc from '@/shared/icons/github.svg';
import { CVDataContactType } from '@/shared/cvData';
import { Section } from '@/features/navigation';

export const NavigationTabs: { name: string; id: Section }[] = [
  { name: 'About', id: Section.ABOUT },
  // { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: Section.EXPERIENCE },
  // { name: 'Education', id: 'education' },
];

export const ContactIcons: Record<CVDataContactType, any> = {
  mail: MailIconSrc,
  phone: PhoneIconSrc,
  linkedin: LinkedinIconSrc,
  telegram: TelegramIconSrc,
  instagram: InstagramIconSrc,
  github: GitHubIconSrc,
};
