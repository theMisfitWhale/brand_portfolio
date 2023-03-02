import Head from 'next/head';
import { Header } from '@/components';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Juliet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-auto ">
        <Header />
        <div className=" block px-20 pt-40  text-[7vh] ">
          <div>Athens, Greece</div>
          <div>Jaipur, Rajasthan, India</div>
          <div>Bergen, Norway</div>
          <div>Marrakesh, Morocco</div>
          <div>Dublin, Ireland</div>
          <div>Cartagena, Colombia</div>
          <div>Bangkok, Thailand</div>
          <div>San Sebastian, Spain</div>
          <div>Dubrovnik, Croatia</div>
          <div>Seoul, South Korea</div>
          <div>San Miguel de Allende, Mexico</div>
          <div>Queenstown, New Zealand</div>
          <div>Hanoi, Vietnam</div> <div>Bangkok, Thailand</div>
          <div>San Sebastian, Spain</div>
          <div>Dubrovnik, Croatia</div>
          <div>Seoul, South Korea</div>
          <div>San Miguel de Allende, Mexico</div>
          <div>Queenstown, New Zealand</div>
          <div>Hanoi, Vietnam</div>
        </div>
      </main>
    </div>
  );
}
