import Head from 'next/head';
import PricingComponent from './Pricingcomponent';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Head>
        <title>Pricing Plans</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <PricingComponent />
      </main>
    </div>
  );
}
