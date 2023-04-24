'use client';

import Image from 'next/image';
import { XCircle } from 'react-feather';
import { useQuestion } from '@/contexts/question';
import { useMascot } from '@/contexts/mascot';

interface Props {}

export const ModalMis = (props: Props) => {
  const { name, life } = useMascot();
  const { showModal, closeMisModal } = useQuestion();

  if (life < 1 || life === 3 || !showModal.mis) {
    return null;
  }

  return (
    <>
      <div id='modal-mis' className={`modal modal-open`}>
        <div className='modal-box w-11/12 max-w-5xl'>
          <h3 className='font-bold text-4xl flex gap-4 items-center text-slate-800'>
            <XCircle height='50' width='50' className='h-full text-red-500' />{' '}
            Você errou. Você tem {life} tentativa(s).
          </h3>
          <picture className='flex items-center justify-center'>
            <Image
              className={`animate-pulse-fast`}
              src='/mascot-brave.gif'
              width={400}
              height={400}
              alt='Seu mascote está bravo, porque você errou.'
            />
          </picture>
          <div className='modal-action flex justify-center'>
            <label
              onClick={closeMisModal}
              htmlFor='modal-mis'
              className='btn btn-outline btn-ghost min-w-[25%] capitalize text-lg font-extrabold'
            >
              Voltar as perguntas!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
