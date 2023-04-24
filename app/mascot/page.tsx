'use client';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Mascot } from '@/components/mascot';
import { BaseLayout } from '@/components/base-layout';
import { Paragraph } from '@/components/paragraph';
import { Type } from '@/components/type';
import { Title } from '@/components/title';
import { useMascot } from '@/contexts/mascot';

export default function Maskot() {
  const router = useRouter();
  const { setName } = useMascot();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const setMascotName = (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    setName(inputValue);
    router.push('/scene/1');
  };

  return (
    <BaseLayout>
      <section className='h-full p-8 border-4 border-white rounded-md flex flex-col items-center gap-6 overflow-x-hidden'>
        <Title className='animate__animated animate__backInDown'>
          Você sabe o que é condicionamento?
        </Title>
        <div className='flex flex-col gap-6'>
          <Paragraph className='text-center md:text-2xl font-normal'>
            <Type
              options={{
                startDelay: 500,
              }}
            >
              Vem com a gente nessa jornada que a gente te conta! E, pra você
              não se sentir sozinho, você terá esse bichinho como companheiro de
              caminhada.
            </Type>
          </Paragraph>
          <Paragraph className='text-center md:text-2xl font-normal'>
            <Type
              options={{
                startDelay: 2750 * 3,
              }}
            >
              No entanto, ainda não demos um nome pra ele, você poderia nos
              ajudar?
            </Type>
          </Paragraph>
        </div>
        <div
          className={
            loading
              ? 'opacity-75 animate-pulse'
              : 'animate__animated animate__bounceInLeft'
          }
        >
          <Mascot />
        </div>
        <form
          onSubmit={setMascotName}
          className='flex flex-col gap-4 justify-center items-center animate__animated animate__backInRight'
        >
          <Input
            className={loading ? 'opacity-75 animate-pulse delay-100' : ''}
            type='text'
            required
            minLength={3}
            maxLength={15}
            onChange={handleChange}
            value={inputValue}
          />
          <Button
            className={loading ? 'opacity-75 animate-pulse delay-150' : ''}
            type='submit'
          >
            Nomear
          </Button>
        </form>
      </section>
    </BaseLayout>
  );
}
