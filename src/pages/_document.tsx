import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/img/bg_1000_orig.webp" as="image" />

        <meta name="application-name" content="Olga Krylova - CV" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Olga Krylova - CV" />
        <meta
          name="description"
          content="Olga Krylova - Frontend Software Engineer CV"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FAF0E6" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Olga Krylova - CV" />
        <meta
          property="og:description"
          content="Olga Krylova - Frontend Software Engineer CV"
        />
        <meta property="og:site_name" content="Olga Krylova - CV" />
        <meta property="og:url" content="https://olyakrylo.online" />
        <meta
          property="og:image"
          content="https://olyakrylo.online/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
