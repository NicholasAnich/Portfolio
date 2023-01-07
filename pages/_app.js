import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/layout.component';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
