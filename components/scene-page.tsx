'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Iframe } from '@/components/iframe';
import { ArrowButton } from '@/components/arrow-button';
import { Title } from '@/components/title';
import { Type } from '@/components/type';
import { Scene } from '@/types/scenes';

interface ScenePageProps {
  sceneContent: Scene;
  sceneId: number;
}

export const ScenePage = ({ sceneContent, sceneId }: ScenePageProps) => {
  const [showPage, setShowPage] = useState(false);
  const { replace } = useRouter();

  useEffect(() => {
    const maxScenePage = localStorage.getItem('maxScenePage') ?? '0';
    if (sceneId > Number(maxScenePage)) {
      replace(sceneContent.previous);
      return;
    }
    setShowPage(true);
  }, [sceneId, replace, sceneContent.previous]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-6 p-4 md:p-24 bg-slate-800 text-white'>
      {showPage ? (
        <>
          {sceneId > 1 && (
            <ArrowButton direction='left' href={sceneContent.previous} />
          )}
          <ArrowButton
            nextPage={sceneContent.next}
            direction='right'
            href={sceneContent.next}
          />
          <Title>
            <Type>{sceneContent.title}</Type>
          </Title>
          <Iframe
            url={sceneContent.youtube_link}
            title={sceneContent.youtube_title}
          />
        </>
      ) : null}
    </main>
  );
};
