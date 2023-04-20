import { HomePage } from '@/components/home-page';

const BASE_URL = 'https://' + process.env.VERCEL_URL;

export default async function Home() {
  const sceneContent = await fetch(BASE_URL + '/api/intro');
  let initialScreen;
  try {
    initialScreen = await sceneContent.json();
  } catch {}

  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-6 p-4 md:p-24 bg-slate-800 text-white'>
      <HomePage data={initialScreen} />
    </main>
  );
}
