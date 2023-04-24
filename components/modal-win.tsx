'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Confetti } from '@/components/confetti';
import { setMaxPage } from '@/utils/set-max-page';
import { useQuestion } from '@/contexts/question';

interface Props {
  nextPage: string;
}

export const ModalWin = ({ nextPage }: Props) => {
  const { showModal, closeWinModal, userWin } = useQuestion();

  if (!showModal.win) {
    return null;
  }

  if (userWin) {
    setMaxPage(nextPage);
  }

  return (
    <>
      <Confetti />
      <div id='win-modal' className={`modal modal-open`}>
        <div className='modal-box w-11/12 max-w-5xl'>
          <h3 className='font-bold text-4xl flex gap-4 items-center text-slate-800'>
            {userWin
              ? 'Parabéns, você acertou todas as questões.'
              : 'Parabéns, você acertou!'}
          </h3>
          <p className='py-4 flex items-center justify-center'>
            <Image
              src='/mascot-eat.gif'
              width={400}
              height={400}
              alt='Seu mascote está feliz, porque você acertou e ele ganhou um queijo.'
            />
          </p>
          <div className='modal-action flex justify-center'>
            {userWin ? (
              <Link
                href={nextPage}
                className='btn btn-outline btn-ghost min-w-[25%] text-lg font-extrabold'
              >
                Ir para a próxima página.
              </Link>
            ) : (
              <label
                onClick={closeWinModal}
                htmlFor='win-modal'
                className='btn btn-outline btn-ghost min-w-[25%] capitalize text-lg font-extrabold'
              >
                Voltar as perguntas!
              </label>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
