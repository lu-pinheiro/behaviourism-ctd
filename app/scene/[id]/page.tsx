import { redirect } from 'next/navigation';
import { BASE_URL } from '@/utils/base-url';
import { Scene } from '@/types/scenes';
import { ScenePage as ScenePageComponent } from '@/components/scene-page';

export default async function ScenePage({
  params,
}: {
  params: { id: string };
}) {
  const sceneRespose = await fetch(BASE_URL + '/api/scene/' + params.id);

  if (sceneRespose.status >= 500) {
    redirect(`/scene/${Number(params.id) - 1}`);
  }

  const sceneContent: Scene = await sceneRespose.json();

  return (
    <ScenePageComponent
      sceneContent={sceneContent}
      sceneId={Number(params.id)}
    />
  );
}
