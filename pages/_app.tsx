import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GetServerSideProps } from 'next';
import { getJsonFromS3 } from '@/features/s3';
import { CVData } from '@/shared/cvData';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
