import { redirect } from 'next/navigation';
import { QuestionPage as QuestionPageComponent } from '@/components/question-page';
import { BaseLayout } from '@/components/base-layout';
import { AnswerResponse } from '@/types/answers';
import { BASE_URL } from '@/utils/base-url';

export default async function QuestionPage({
  params,
}: {
  params: { id: string };
}) {
  const sceneRespose = await fetch(BASE_URL + '/api/question/' + params.id);

  if (sceneRespose.status >= 500 && Number(params.id) > 0) {
    redirect('/');
  }

  const sceneContent: AnswerResponse = await sceneRespose.json();

  return (
    <BaseLayout>
      <div className='h-full p-8 border-4 border-white rounded-md flex flex-col gap-6'>
        <QuestionPageComponent
          questionId={Number(params.id)}
          sceneContent={sceneContent}
        />
      </div>
    </BaseLayout>
  );
}
