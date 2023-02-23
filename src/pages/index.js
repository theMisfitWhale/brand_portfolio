import Head from 'next/head';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <span className="inline-block p-12 text-6xl font-extrabold leading-[1.1] tracking-tighter sm:text-7xl lg:text-8xl xl:text-8xl">
          Next.js + tailwindcss
        </span>
      </main>
    </div>
  );
}
