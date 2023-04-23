'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/base-layout';
import { Title } from '@/components/title';
import { useMascot } from '@/contexts/mascot';
import { ArrowButton } from '@/components/arrow-button';

export default function WinPage() {
  const [showPage, setShowPage] = useState(false);
  const { replace } = useRouter();
  const { name } = useMascot();

  useEffect(() => {
    const maxScenePage = localStorage.getItem('maxScenePage') ?? '1';
    if (Number(maxScenePage) < 3) {
      replace('/question/1');
      return;
    }
    setShowPage(true);
  }, [replace]);

  return showPage ? (
    <BaseLayout>
      <div className='h-full p-8 border-4 border-white rounded-md flex flex-col gap-4 items-center'>
        <Title>Parabéns, o {name} tem queijo para a vida inteira!</Title>
        <img
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
