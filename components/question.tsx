import React from 'react';
import { Title } from './title';
import { Type } from './type';

interface QuestionProps {
  title: string;
  children: React.ReactNode;
}

export const Question = ({ children, title }: QuestionProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <Title>
        <Type>{title}</Type>
      </Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>{children}</div>
    </div>
  );
};
