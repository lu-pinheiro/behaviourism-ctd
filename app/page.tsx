import { BaseLayout } from '@/components/base-layout';
import { HomePage } from '@/components/home-page';
import { BASE_URL } from '@/utils/base-url';

export default async function Home() {
  const sceneContent = await fetch(BASE_URL + '/api/intro');
  let initialScreen;
  try {
    initialScreen = await sceneContent.json();
  } catch {}

  return (
    <BaseLayout>
      <HomePage data={initialScreen} />
    </BaseLayout>
  );
}
