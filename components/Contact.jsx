import Head from 'next/head';
import Contact from '../components/Contact';
import ContactComponent from './ContactComponent';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Head>
        <title>Contact or Download</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <ContactComponent />
      </main>
    </div>
  );
}
