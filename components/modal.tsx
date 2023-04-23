'use client';

import Image from 'next/image';
import { useMascot } from '@/contexts/mascot';
import { useRouter } from 'next/navigation';
import { XCircle } from 'react-feather';

export const Modal = () => {
  const { push } = useRouter();
  const { reset, life } = useMascot();

  if (life === 3) {
    return null;
  }

  return (
    <>
      <div className={`modal ${life < 1 ? 'modal-open' : ''}`}>
        <div className='modal-box w-11/12 max-w-5xl'>
          <h3 className='font-bold text-4xl flex gap-4 items-center'>
            <XCircle height='50' width='50' className='h-full text-red-500' />{' '}
            Você perdeu!
          </h3>
          <p className='py-4 flex items-center justify-center'>
            <Image
              src='/mascot-lost.gif'
              width={400}
              height={400}
              alt='Seu mascote está triste, porque você perdeu.'
            />
          </p>
          <div className='modal-action flex justify-center'>
            <button
              onClick={() => {
                reset();
                push('/');
              }}
              className='btn btn-outline btn-ghost min-w-[25%] capitalize text-lg font-extrabold'
            >
              Iniciar novamente!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
