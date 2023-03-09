import Head from 'next/head';
import { Header } from '@/components';
import { HomeHero } from '../Layout';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Juliet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-auto ">
        <Header />
        <div className="bg-white">
          <HomeHero />
        </div>
      </main>
    </div>
  );
}
