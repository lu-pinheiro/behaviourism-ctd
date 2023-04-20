'use client';

import Image from 'next/image';
import { Title } from './title';
import { Paragraph } from './paragraph';
import { Type } from './type';
import { ArrowButton } from './arrow-button';

export const HomePage = ({ data }: { data: any }) => {
  return (
    <>
      <Title>{data?.title}</Title>
      <Image
        src='/duck-animate.gif'
        width={400}
        height={400}
        alt='Seu mascote está sorrindo para você.'
      />
      <Paragraph>
        <Type>{data?.content}</Type>
      </Paragraph>
      <ArrowButton direction='right' href='/mascot' />
    </>
  );
};
