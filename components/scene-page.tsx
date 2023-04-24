'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Iframe } from '@/components/iframe';
import { ArrowButton } from '@/components/arrow-button';
import { Title } from '@/components/title';
import { Type } from '@/components/type';
import { Input } from '@/components/input';
import { Paragraph } from '@/components/paragraph';
import { useMascot } from '@/contexts/mascot';
import { Scene } from '@/types/scenes';

interface ScenePageProps {
  sceneContent: Scene;
  sceneId: number;
}

const createContent = (sceneContent: Scene['content'], mascotName: string) => {
  const hasMascotName = sceneContent.find(text =>
    new RegExp(/mascot_name/gi).test(text),
  );

  if (hasMascotName) {
    return sceneContent.map(text => (
      <Paragraph key={text} className='my-1 text-xl'>
        <span>{text.replace(/mascot_name/gi, mascotName)}</span>
      </Paragraph>
    ));
  }

  return sceneContent.map(text => (
    <Paragraph className='my-2' key={text}>
      {text}
    </Paragraph>
  ));
};

export const ScenePage = ({ sceneContent, sceneId }: ScenePageProps) => {
  const { name } = useMascot();
  const [showPage, setShowPage] = useState(false);
  const { replace } = useRouter();

  useEffect(() => {
    const maxScenePage = localStorage.getItem('maxScenePage') ?? '1';
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

          {sceneContent?.title && (
            <Title>
              <Type>{sceneContent.title}</Type>
            </Title>
          )}

          {createContent(sceneContent.content, name)}

          {sceneContent?.youtube_link && sceneContent?.youtube_title && (
            <Iframe
              url={sceneContent.youtube_link}
              title={sceneContent.youtube_title}
            />
          )}
        </>
      ) : null}
    </main>
  );
};
