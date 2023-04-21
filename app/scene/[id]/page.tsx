import { Explication } from '@/components/explication';
import { Iframe } from '@/components/iframe';
import { ArrowButton } from '@/components/arrow-button';
import { Paragraph } from '@/components/paragraph';
import { Title } from '@/components/title';
import { Type } from '@/components/type';
import { Scene } from '@/types/scenes';
import { redirect } from 'next/navigation';
import { BASE_URL } from '@/utils/base-url';


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

  // const getDelay = (index: number) => {
  //   return sceneContent.content.reduce((acc, text, indexReduce) => {
  //     return indexReduce < index ? text.length + acc : acc;
  //   }, 0);
  // };

  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-6 p-4 md:p-24 bg-slate-800 text-white'>
      {Number(params.id) > 1 && (
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

      {/* <Explication>
        <div className='w-full'>
          {sceneContent.content.map((paragraph, index) => (
            <Paragraph key={paragraph}>
              <Type
                options={{
                  startDelay: getDelay(index) * 25,
                  speed: 2,
                  waitUntilVisible: true,
                }}
              >
                {paragraph}
              </Type>
            </Paragraph>
          ))}
        </div>
      </Explication> */}
    </main>
  );
}
