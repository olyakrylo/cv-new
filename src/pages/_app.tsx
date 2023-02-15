import type { AppProps } from 'next/app';

import '@/shared/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />{' '}
    </main>
  );
}
