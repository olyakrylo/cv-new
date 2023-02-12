import MailIconSrc from '@/shared/icons/mail.svg';
import PhoneIconSrc from '@/shared/icons/phone.svg';
import LinkedinIconSrc from '@/shared/icons/linkedin.svg';
import TelegramIconSrc from '@/shared/icons/telegram.svg';
import InstagramIconSrc from '@/shared/icons/instagram.svg';
import GitHubIconSrc from '@/shared/icons/github.svg';
import { CVDataContactType } from '@/shared/cvData';

export const NavigationTabs = [
  { name: 'About', path: 'about' },
  { name: 'Skills', path: 'skills' },
  { name: 'Experience', path: 'experience' },
  { name: 'Education', path: 'education' },
];

export const ContactIcons: Record<CVDataContactType, any> = {
  mail: MailIconSrc,
  phone: PhoneIconSrc,
  linkedin: LinkedinIconSrc,
  telegram: TelegramIconSrc,
  instagram: InstagramIconSrc,
  github: GitHubIconSrc,
};
