'use client';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Mascot } from '@/components/mascot';
import { BaseLayout } from '@/components/base-layout';
import { Paragraph } from '@/components/paragraph';
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
      <div className='h-full p-8 border-4 border-white rounded-md flex flex-col gap-6'>
        <Paragraph className='text-center md:text-2xl font-normal'>
          Para começarmos nossa jornada de entendimento sobre o behaviorismo,
          essa pequena criatura será nossa companheira e aliada. No entanto,
          ainda não decidimos qual nome dar a ela. Você teria alguma sugestão?
        </Paragraph>
        <div className={loading ? 'opacity-75 animate-pulse' : ''}>
          <Mascot />
        </div>
        <form
          onSubmit={setMascotName}
          className='flex flex-col gap-4 justify-center items-center'
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
      </div>
    </BaseLayout>
  );
}
