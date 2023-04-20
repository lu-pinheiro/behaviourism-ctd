'use client';
import { useMascot } from '@/contexts/mascot';
import Image from 'next/image';

export const Mascot = () => {
  const { pulse, life } = useMascot();

  const mascotName =
    typeof window !== 'undefined' ? localStorage.getItem('mascotName') : '';
  return (
    <aside>
      {life <= 0 ? (
        <Image
          src='/duck-animate-sad.gif'
          width={400}
          height={400}
          alt='Seu mascote está triste, porque você perdeu.'
        />
      ) : pulse ? (
        <Image
          className={`animate-pulse-fast`}
          src='/duck-animate-cry.gif'
          width={400}
          height={400}
          alt='Seu mascote está triste, porque você errou.'
        />
      ) : (
        <Image src='/mascot.jpeg' width={400} height={400} alt='Seu mascote' />
      )}
      <p className='font-bold text-xl text-center'>{mascotName}</p>
    </aside>
  );
};
