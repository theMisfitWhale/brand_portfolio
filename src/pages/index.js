import Head from 'next/head';
import { Button } from '../components';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <span className="from-red-500 inline-block  bg-gradient-to-r to-blue-500 bg-clip-text p-12 text-6xl font-extrabold leading-[1.1] tracking-tighter  sm:text-7xl lg:text-8xl xl:text-8xl">
          Next.js + tailwindcss
        </span>{' '}
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>
      </main>
    </div>
  );
}
