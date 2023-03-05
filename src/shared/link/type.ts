import { PropsWithChildren } from 'react';

export type LinkProps = PropsWithChildren & {
  href: string;
  className?: string;
  phone?: boolean;
  email?: boolean;
};
