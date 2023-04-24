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
        <div className='animate__animated animate__rollIn'>
          <Mascot />
        </div>
        {sceneContent.questions.map((data, index) => (
          <div
            key={data.question}
            className={`animate__animated animate__fadeIn${
              index % 2 === 0 ? 'Left' : 'Right'
            } animate__delay-${index * 0.5}s`}
          >
            <Question data={data} />
          </div>
        ))}
        <ModalWin nextPage={sceneContent.nextPage} />
        <ModalMis />
      </>
    </QuestionProvider>
  ) : null;
};
