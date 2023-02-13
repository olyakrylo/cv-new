import '@/shared/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans } from '@next/font/google';

export const Typography = Noto_Sans({
  weight: ['300', '400', '700', '800'],
  subsets: ['latin', 'cyrillic'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Typography.className}>
      <Component {...pageProps} />{' '}
    </main>
  );
}
