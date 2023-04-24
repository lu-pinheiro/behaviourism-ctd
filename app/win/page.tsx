'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/base-layout';
import { Title } from '@/components/title';
import { ArrowButton } from '@/components/arrow-button';
import { Confetti } from '@/components/confetti';
import { useMascot } from '@/contexts/mascot';

export default function WinPage() {
  const [showPage, setShowPage] = useState(false);
  const { replace } = useRouter();
  const { name } = useMascot();

  useEffect(() => {
    const maxScenePage = localStorage.getItem('maxScenePage') ?? '1';
    const maxQuestionPage = localStorage.getItem('maxQuestionPage') ?? '1';
    if (Number(maxScenePage) < 8 && Number(maxQuestionPage) < 4) {
      replace('/scene/1');
      return;
    }
    setShowPage(true);
  }, [replace]);

  return showPage ? (
    <BaseLayout>
      <Confetti />
      <div className='h-full p-8 border-4 border-white rounded-md flex flex-col gap-4 items-center'>
        <Title className='animate__animated animate__jackInTheBox'>
          Parabéns, o {name} tem queijo para a vida inteira!
        </Title>
        <img
          className='animate__animated animate__bounceInUp'
          src='/mascot-win.gif'
          alt='Parabéns! Seu mascote agora tem queijo para a vida toda.'
          width={400}
          height={400}
        />
        <ArrowButton direction='right' href='/credits' />
      </div>
    </BaseLayout>
  ) : null;
}
