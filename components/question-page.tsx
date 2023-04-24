'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mascot } from '@/components/mascot';
import { Question } from '@/components/question';
import { ModalWin } from '@/components/modal-win';
import { ModalMis } from '@/components/modal-mis';
import { QuestionResponse } from '@/types/question';
import { QuestionProvider } from '@/contexts/question';

interface QuestionPageProps {
  questionId: number;
  sceneContent: QuestionResponse;
}

export const QuestionPage = ({
  questionId,
  sceneContent,
}: QuestionPageProps) => {
  const [showPage, setShowPage] = useState(false);
  const { replace } = useRouter();

  useEffect(() => {
    const maxQuestionPage = localStorage.getItem('maxQuestionPage') ?? '0';
    if (Number(questionId) > Number(maxQuestionPage)) {
      replace(sceneContent.previous);
      return;
    }
    setShowPage(true);
  }, [questionId, replace, sceneContent.previous]);

  return showPage ? (
    <QuestionProvider questions={sceneContent.questions}>
      <>
        <Mascot />
        {sceneContent.questions.map(data => (
          <Question key={data.question} data={data} />
        ))}
        <ModalWin nextPage={sceneContent.nextPage} />
        <ModalMis />
      </>
    </QuestionProvider>
  ) : null;
};
