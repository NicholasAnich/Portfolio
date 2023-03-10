import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Roboto|Lora'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
