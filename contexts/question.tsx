'use client';
import { ReactNode, createContext, useContext, useState } from 'react';
import { QuestionResponse } from '@/types/question';

interface QuestionContextTypes {
  correctAnswersCount: number;
  userWin: boolean;
  showModal: {
    win: boolean;
    mis: boolean;
  };
  closeWinModal: () => void;
  closeMisModal: () => void;
  openMisModal: () => void;
  incrementAnswersCounter: () => void;
}

const QuestionContext = createContext<QuestionContextTypes>(
  {} as QuestionContextTypes,
);

type Props = {
  children: ReactNode;
  questions: QuestionResponse['questions'];
};

export const QuestionProvider = ({ children, questions }: Props) => {
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showModal, setShowModal] = useState({
    win: false,
    mis: false,
  });
  const userWin = questions.length === correctAnswersCount;

  const incrementAnswersCounter = () => {
    setCorrectAnswersCount(s => s + 1);
    setShowModal(s => ({ ...s, win: true }));
  };

  const closeWinModal = () => {
    setShowModal(s => ({ ...s, win: false }));
  };

  const closeMisModal = () => {
    setShowModal(s => ({ ...s, mis: false }));
  };

  const openMisModal = () => {
    setShowModal(s => ({ ...s, mis: true }));
  };

  return (
    <QuestionContext.Provider
      value={{
        correctAnswersCount,
        userWin,
        incrementAnswersCounter,
        showModal,
        closeWinModal,
        closeMisModal,
        openMisModal,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => useContext(QuestionContext);
