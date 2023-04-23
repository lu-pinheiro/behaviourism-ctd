'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { Mascot } from '@/components/mascot';
import { Question } from '@/components/question';
import { useMascot } from '@/contexts/mascot';
import { Answer, AnswerResponse } from '@/types/answers';
import { setMaxPage } from '@/utils/set-max-page';

interface QuestionPageProps {
  questionId: number;
  sceneContent: AnswerResponse;
}

export const QuestionPage = ({
  questionId,
  sceneContent,
}: QuestionPageProps) => {
  const [showPage, setShowPage] = useState(false);
  const { replace, push } = useRouter();
  const { damage } = useMascot();

  const handleClick = (data: Answer) => {
    if (data.isCorrect) {
      setMaxPage(data.nextPage);
      push(data.nextPage);
    } else {
      damage();
    }
  };

  useEffect(() => {
    const maxQuestionPage = localStorage.getItem('maxQuestionPage') ?? '0';
    if (Number(questionId) > Number(maxQuestionPage)) {
      replace(sceneContent.previous);
      return;
    }
    setShowPage(true);
  }, [questionId, replace, sceneContent.previous]);

  return showPage ? (
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
  ) : null;
};
