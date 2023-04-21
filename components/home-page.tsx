'use client';

import { Title } from './title';
import { Paragraph } from './paragraph';
import { Type } from './type';
import { ArrowButton } from './arrow-button';

export const HomePage = ({ data }: { data: any }) => {
  return (
    <div className='h-full p-8 border-4 border-white rounded-md flex flex-col gap-4'>
      <Title className='text-center'>{data?.title}</Title>
      <Paragraph className='w-full max-w-6xl mx-auto text-xl text-center'>
        <Type>{data?.content}</Type>
      </Paragraph>
      <ArrowButton direction='right' href='/mascot' />
    </div>
  );
};
