import '@/styles/globals.css';
import { PageProvider } from '../context/pageContext';

export default function App({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}
