'use client';
import { useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { Mascot } from '@/components/mascot';
import { Question } from '@/components/question';
import { useMascot } from '@/contexts/mascot';
import { Answer, AnswerResponse } from '@/types/answers';
import { setMaxPage } from '@/utils/set-max-page';

interface QuestionPageProps {
  id: string;
  sceneContent: AnswerResponse;
}

export const QuestionPage = ({ id, sceneContent }: QuestionPageProps) => {
  const router = useRouter();
  const { damage } = useMascot();

  const handleClick = (data: Answer) => {
    if (data.isCorrect) {
      setMaxPage(data.nextPage);
      router.push(data.nextPage);
    } else {
      damage();
    }
  };

  useEffect(() => {
    const maxQuestionPage = localStorage.getItem('maxQuestionPage') ?? '0';
    if (typeof maxQuestionPage === 'number' && Number(id) > maxQuestionPage) {
      redirect(sceneContent.previous);
    }
  }, [id, sceneContent.previous]);

  return (
    <>
      <Mascot />
      <Question title={sceneContent.title}>
        {sceneContent.answers.map(data => (
          <Button key={data.text} onClick={() => handleClick(data)}>
            {data.text}
          </Button>
        ))}
      </Question>
    </>
  );
};
