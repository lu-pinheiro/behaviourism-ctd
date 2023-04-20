'use client';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Mascot } from '@/components/mascot';
import { Title } from '@/components/title';
import { useMascot } from '@/contexts/mascot';

export default function Maskot() {
  const router = useRouter();
  const { setName } = useMascot();
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const setMascotName = (event: FormEvent) => {
    event.preventDefault();
    setName(inputValue);
    localStorage.setItem('mascotName', inputValue);
    router.push('/scene/1');
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-6 p-4 md:p-24 bg-slate-800 text-white'>
      <Title>Escolha o nome do seu mascote</Title>
      <Mascot />
      <form onSubmit={setMascotName} className='flex flex-col gap-2'>
        <Input
          type='text'
          required
          minLength={3}
          maxLength={15}
          onChange={handleChange}
          value={inputValue}
        />
        <Button type='submit'>Nomear</Button>
      </form>
    </main>
  );
}
