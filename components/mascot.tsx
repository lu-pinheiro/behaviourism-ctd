'use client';
import { useMascot } from '@/contexts/mascot';
import Image from 'next/image';

export const Mascot = () => {
  const { pulse, life } = useMascot();

  const mascotName =
    typeof window !== 'undefined' ? localStorage.getItem('mascotName') : '';
  return (
    <aside className='flex flex-col items-center'>
      {life <= 0 ? (
        <Image
          src='/mascot-lost.gif'
          width={400}
          height={400}
          alt='Seu mascote está triste, porque você perdeu. Portanto fugiu.'
        />
      ) : pulse ? (
        <Image
          className={`animate-pulse-fast`}
          src='/mascot-brave.gif'
          width={400}
          height={400}
          alt='Seu mascote está bravo, porque você errou.'
        />
      ) : (
        <Image
          src='/mascot-hi.gif'
          width={400}
          height={400}
          alt='Seu mascote está ansioso para receber uma comida. Responda corretamente.'
        />
      )}
      <p className='font-bold text-xl text-center'>{mascotName}</p>
    </aside>
  );
};
