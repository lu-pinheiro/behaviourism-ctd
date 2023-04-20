import { redirect } from 'next/navigation';
import { QuestionPage as QuestionPageComponent } from '@/components/question-page';
import { AnswerResponse } from '@/types/answers';

const BASE_URL = 'https://' + process.env.VERCEL_URL;

export default async function QuestionPage({
  params,
}: {
  params: { id: string };
}) {
  const sceneRespose = await fetch(BASE_URL + '/api/question/' + params.id);

  if (sceneRespose.status >= 500 && Number(params.id) > 0) {
    redirect(`/scene/${Number(params.id) - 1}`);
  }

  const sceneContent: AnswerResponse = await sceneRespose.json();

  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-6 p-4 md:p-24 bg-slate-800 text-white'>
      <QuestionPageComponent id={params.id} sceneContent={sceneContent} />
    </main>
  );
}
